import type { MetadataRoute } from 'next';
import { profile } from '@/data/profile';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${profile.name} — ${profile.role}`,
    short_name: profile.name,
    description: profile.shortBio,
    start_url: '/',
    display: 'standalone',
    background_color: '#06060A',
    theme_color: '#06060A',
    icons: [
      { src: '/icon', sizes: '512x512', type: 'image/png' },
    ],
  };
}
