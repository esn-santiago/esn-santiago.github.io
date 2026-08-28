import { whatsappGroupUrl } from '../i18n';

export const socialIcons = {
  WhatsApp: '<svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347M12.05 21.785h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884M20.463 3.488A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413"/></svg>',
  Flickr: '<svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true"><circle cx="7.5" cy="12" r="3.5"/><circle cx="16.5" cy="12" r="3.5"/></svg>',
  Instagram: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3.2" y="3.2" width="17.6" height="17.6" rx="5"/><circle cx="12" cy="12" r="4.1"/><circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none"/></svg>',
  Facebook: '<svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true"><path d="M13.7 21v-8h2.7l.4-3.1h-3.1v-2c0-.9.3-1.5 1.6-1.5h1.7V3.6c-.3 0-1.3-.1-2.4-.1-2.4 0-4.1 1.5-4.1 4.2v2.3H8v3.1h2.5v8h3.2Z"/></svg>',
  X: '<svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true"><path d="M4 4h4.2l4.1 5.5L17 4h3l-6.3 7.2L20.5 20h-4.2l-4.5-6-5.1 6h-3l6.9-7.8L4 4Zm3.4 1.8 9.8 12.4h1.8L9.2 5.8H7.4Z"/></svg>',
  LinkedIn: '<svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true"><rect x="3.5" y="8.5" width="3.4" height="11.5" rx=".3"/><circle cx="5.2" cy="5.2" r="1.7"/><path d="M10.2 8.5V20h3.4v-6.2c0-1.7.3-3.2 2.4-3.2 2 0 2.1 1.7 2.1 3.3V20h3.4v-6.8c0-3.4-.7-6-4.7-6-1.9 0-3.1 1-3.6 1.9h-.1V8.5h-2.9Z"/></svg>',
  TikTok: '<svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true"><path d="M14.2 3.5h3.1c.3 1.9 1.2 3.4 3.1 4.3v3.2a9 9 0 0 1-3.1-1.2v5.5a5.7 5.7 0 1 1-5.7-5.7c.4 0 .8 0 1.2.1v3.2a2.7 2.7 0 1 0 1.4 2.4V3.5Z"/></svg>',
} as const;

export const socialLinks = [
  { name: 'WhatsApp', href: whatsappGroupUrl, hoverBg: '#25D366', hoverColor: '#fff', hoverBorder: 'transparent' },
  { name: 'Flickr', href: 'https://www.flickr.com/photos/people/esnsantiago/', hoverBg: 'linear-gradient(135deg,#ff0084 50%,#0063dc 50%)', hoverColor: '#fff', hoverBorder: 'transparent' },
  { name: 'Instagram', href: 'https://www.instagram.com/esn_santiagodecompostela/?hl=es', hoverBg: 'linear-gradient(135deg,#833ab4 0%,#fd1d1d 50%,#fcb045 100%)', hoverColor: '#ffffff', hoverBorder: 'transparent' },
  { name: 'Facebook', href: 'https://www.facebook.com/esnsantiagodecompostela/', hoverBg: '#1877F2', hoverColor: '#fff', hoverBorder: 'transparent' },
  { name: 'X', href: 'https://x.com/esn_santiago', hoverBg: '#000000', hoverColor: '#ffffff', hoverBorder: 'transparent' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/esn-santiagodecompostela', hoverBg: '#0A66C2', hoverColor: '#fff', hoverBorder: 'transparent' },
  { name: 'TikTok', href: 'https://www.tiktok.com/@esn.santiagodecompostela?is_from_webapp=1&sender_device=pc', hoverBg: '#010101', hoverColor: '#25F4EE', hoverBorder: '#25F4EE' },
] as const satisfies { name: keyof typeof socialIcons; href: string; hoverBg: string; hoverColor: string; hoverBorder: string }[];
