'use client';

import localFont from 'next/font/local';

import { AppLayout } from '@/core/ui/components/app-layout';

import '@/styles/globals.css';

const geistSans = localFont({
  src: '../assets/fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: '../assets/fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Book Keeper</title>
        <meta name="description" content="Take home assignment for a book inventory management app" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased max-w-screen min-h-screen`}
      >
        <AppLayout>
          {children}
        </AppLayout>
      </body>
    </html>
  );
}
