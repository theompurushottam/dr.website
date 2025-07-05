import './globals.css';
import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
  variable: '--font-inter'
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
  variable: '--font-playfair'
});

export const metadata: Metadata = {
  title: 'Dr. Serena Blake, PsyD - Clinical Psychologist | Los Angeles Therapy',
  description: 'Licensed clinical psychologist providing compassionate therapy for anxiety, relationships, and trauma recovery in Los Angeles and online via Zoom.',
  keywords: 'psychologist, therapy, Los Angeles, anxiety, trauma, relationships, mental health, counseling',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>{children}</body>
    </html>
  );
}