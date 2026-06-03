import { ImageResponse } from 'next/og';
import { profile } from '@/data/profile';

export const runtime = 'edge';
export const alt = `${profile.name} — ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          background: '#06060A',
          backgroundImage:
            'radial-gradient(900px circle at 80% -10%, rgba(124,92,255,0.45), transparent 55%), radial-gradient(700px circle at 0% 110%, rgba(34,211,238,0.30), transparent 55%)',
          color: 'white',
          fontFamily: 'sans-serif',
        }}
      >
        {/* top row */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 18,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 32,
              fontWeight: 800,
              background: 'linear-gradient(135deg, #7C5CFF 0%, #22D3EE 100%)',
            }}
          >
            {profile.monogram}
          </div>
          <div style={{ fontSize: 26, color: '#A1A1B4' }}>{profile.location}</div>
        </div>

        {/* headline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <div style={{ fontSize: 30, color: '#A1A1B4', letterSpacing: 6 }}>
            {profile.name.toUpperCase()}
          </div>
          <div style={{ fontSize: 76, fontWeight: 800, lineHeight: 1.05, maxWidth: 960 }}>
            Software Engineer building{' '}
            <span
              style={{
                background: 'linear-gradient(110deg, #A5A9FF, #22D3EE)',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              AI-powered products.
            </span>
          </div>
        </div>

        {/* bottom row */}
        <div style={{ display: 'flex', gap: 14 }}>
          {['React', 'Next.js', 'Node.js', 'TypeScript', 'AI / LLM'].map((t) => (
            <div
              key={t}
              style={{
                fontSize: 24,
                color: '#C4C9FF',
                padding: '10px 22px',
                borderRadius: 999,
                border: '1px solid rgba(255,255,255,0.12)',
                background: 'rgba(255,255,255,0.03)',
              }}
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
