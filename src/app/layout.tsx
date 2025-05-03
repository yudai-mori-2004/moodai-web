// app/layout.tsx
import { ReactNode } from 'react';
import Providers from './providers';
import Layout from '@/components/layout/Layout';

export const metadata = {
  title: 'moodai',
  description: '公式サイト・プロダクト・メモ置き場',
  viewport: 'width=device-width, initial-scale=1',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja" className="scroll-smooth">
      <body>
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
}