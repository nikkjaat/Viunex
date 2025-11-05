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
      console.log("Starting email sending process...");

      // Send notification to your mailbox FIRST
      console.log("Sending contact notification email...");
      await sendContactEmail(body);
      console.log(body);
      console.log("Contact notification email sent successfully");

      // Send auto-reply to client (don't fail if this fails)
      console.log("Sending auto-reply to client...");
      try {
        await sendAutoReply(body.email, body.name);
        console.log("Auto-reply sent successfully");
      } catch (autoReplyError) {
        console.error("Auto-reply failed (non-critical):", autoReplyError);
      }
    } catch (emailError) {
      console.error("CRITICAL: Contact email notification failed:", emailError);
      console.error(
        "Error type:",
        emailError instanceof Error ? emailError.message : "Unknown error"
      );
      console.error("Full error:", JSON.stringify(emailError, null, 2));

      // Still return success if database save worked, but log the error
      return NextResponse.json({
        success: true,
        message:
          "Contact form submitted successfully, but email notification failed",
        id: result.insertedId,
        warning: "Email notification failed - please check server logs",
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
