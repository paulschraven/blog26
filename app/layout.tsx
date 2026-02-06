import './globals.css';
import type { Metadata } from 'next';
import { Lora } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';

const lora = Lora({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.paulschraven.com'),
  alternates: {
    canonical: '/'
  },
  title: {
    default: 'Paul Schraven',
    template: '%s | Paul Schraven'
  },
  description: 'My portfolio, blog, and personal website.'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${lora.className}`}>
      <body className="antialiased tracking-tight">
        <div className="min-h-screen flex flex-col justify-between pt-0 md:pt-8 p-8 bg-zinc-900 text-gray-200">
          <main className="max-w-[60ch] mx-auto w-full space-y-6">
            {children}
          </main>
          <Footer />
          <Analytics />
        </div>
      </body>
    </html>
  );
}

function Footer() {
  const links = [
    { name: 'email', url: 'mailto:contact@paulschraven.com' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/paulschraven/' },
    { name: 'github', url: 'https://github.com/paulschraven' }
  ];

  return (
    <footer className="mt-12 text-center">
      <div className="flex justify-center space-x-4 tracking-tight">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-200 underline underline-offset-2 hover:no-underline transition-all duration-200"
          >
            {link.name}
          </a>
        ))}
      </div>
    </footer>
  );
}
