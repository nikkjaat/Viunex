import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const title = searchParams.get('title') || 'Viunex - Digital Excellence';
    const description = searchParams.get('description') || 'Web Development, Digital Marketing & SEO Services';

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#1E40AF',
            backgroundImage: 'linear-gradient(135deg, #1E40AF 0%, #7C3AED 100%)',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '40px',
              textAlign: 'center',
            }}
          >
            <h1
              style={{
                fontSize: '60px',
                fontWeight: 'bold',
                color: 'white',
                marginBottom: '20px',
                textShadow: '0 4px 8px rgba(0,0,0,0.3)',
              }}
            >
              Viunex
            </h1>
            <h2
              style={{
                fontSize: '36px',
                fontWeight: '600',
                color: 'white',
                marginBottom: '20px',
                maxWidth: '800px',
                lineHeight: '1.2',
              }}
            >
              {title}
            </h2>
            <p
              style={{
                fontSize: '24px',
                color: 'rgba(255,255,255,0.9)',
                maxWidth: '600px',
                lineHeight: '1.4',
              }}
            >
              {description}
            </p>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (error) {
    console.error('OG Image generation failed:', error);
    return new Response('Failed to generate image', { status: 500 });
  }
}