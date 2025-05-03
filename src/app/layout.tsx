// app/layout.tsx
import './globals.css'
import { ReactNode } from 'react'

export const metadata = {
  title: 'Moodaï – Yudai Mori',
  description: '森雄大の公式サイト・プロダクト・メモ置き場',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja">
      <body className="mx-auto max-w-3xl p-4">
        <header className="mb-8">
          <h1 className="text-3xl font-bold">Moodaï (森雄大)</h1>
          <nav className="space-x-4 text-blue-600">
            <a href="/">Home</a>
            <a href="/projects">Projects</a>
            <a href="/memos">Memos</a>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="mt-16 text-sm text-gray-500">
          © {new Date().getFullYear()} Yudai Mori | <a href="mailto:hello@moodai.jp">hello@moodai.jp</a>
        </footer>
      </body>
    </html>
  )
}
