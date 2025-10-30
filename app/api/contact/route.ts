import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import { sendContactEmail, sendAutoReply, ContactFormData } from "@/lib/email";

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();

    // Validate required fields
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Connect to MongoDB
    const client = await clientPromise;
    const db = client.db("viunex");
    const collection = db.collection("contacts");

    // Save to database
    const contactData = {
      ...body,
      createdAt: new Date(),
      status: "new",
      ipAddress:
        request.headers.get("x-forwarded-for") ||
        request.headers.get("x-real-ip") ||
        "unknown",
      userAgent: request.headers.get("user-agent") || "unknown",
    };

    const result = await collection.insertOne(contactData);

    // Send emails
    try {
      await sendContactEmail(body);
      // Send auto-reply (don't fail if this fails)
      await sendAutoReply(body.email, body.name);
    } catch (emailError) {
      console.error("Email sending failed:", emailError);
      // Still return success if database save worked
      return NextResponse.json({
        success: true,
        message:
          "Contact form submitted successfully, but email notification failed",
        id: result.insertedId,
      });
    }

    return NextResponse.json({
      success: true,
      message: "Contact form submitted successfully",
      id: result.insertedId,
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
}
