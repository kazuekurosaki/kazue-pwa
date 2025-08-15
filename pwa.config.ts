import type { Config } from './types';

export default {
  id: '/',
  name: 'Infinite Novel Translations',
  shortName: 'INT',
  description: 'Experience an infinite array of translated light novels and web novels with Infinite Novel Translations. Enjoy up-to-date reviews, reading guides, and popular series.',
  direction: 'auto',
  language: 'en-US',
  backgroundColor: '#fff',
  themeColor: '#fff',
  display: 'standalone',
  orientation: 'natural',
  scope: '/',
  startUrl: '/?utm_source=homescreen',
  appleStatusBarStyle: 'black-translucent',
  preferRelatedApplications: false,
  shortcuts: [
    {
      name: 'List Novel',
      shortName: 'List',
      description: 'Daftar Novel Yang Sudah Di Up',
      url: '/p/list.html?utm_source=homescreen',
    },
    {
      name: 'About Us',
      shortName: 'Tentang Kami',
      description: 'Tentang Kami Sebagai Penerjemah',
      url: '/p/about-us.html?utm_source=homescreen',
    },
  ],
  pwa: {
    logs: true,
    // OneSignal is only available if you are using cloudflare workers
    oneSignalEnabled: true, // To enable OneSignal, set this to true
    oneSignalConfig: {
      appId: 'd77b7040-d52b-4e6a-829b-26cece87604d', // Replace with your OneSignal App Id
      allowLocalhostAsSecureOrigin: true,
    },
  },
  // Please replace with your blog url if you are using CDN (JsDelivr)
  origin: 'https://infinitenoveltranslations.blogspot.com',
} satisfies Config;
