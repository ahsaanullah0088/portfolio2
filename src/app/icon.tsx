import { ImageResponse } from 'next/og';
import { profile } from '@/data/profile';

export const size = { width: 64, height: 64 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 34,
          fontWeight: 700,
          color: 'white',
          background: 'linear-gradient(135deg, #7C5CFF 0%, #22D3EE 100%)',
          borderRadius: 16,
        }}
      >
        {profile.monogram}
      </div>
    ),
    { ...size }
  );
}
