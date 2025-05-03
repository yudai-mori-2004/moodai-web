// app/memos/page.tsx
import { SectionTitle } from '@/components/ui/SectionTitle'
import { MemoCard } from '@/components/sections/MemoCard'
import { Box } from '@mui/material'

export const metadata = {
    title: 'Memos | moodai',
    description: 'moodaiの技術メモや覚え書き',
}

interface MemoItem {
    slug: string
    title: string
    date: string
    tags?: string[]
    excerpt?: string
}

export default function MemosPage() {
    const memos: MemoItem[] = [
        {
            slug: 'first-note',
            title: 'サイトをつくりました',
            date: '2025-05-03',
            tags: ['Next.js', 'Vercel'],
            excerpt: 'GWの中盤、ハッカソンの締め切りまであと10日を切りそうな忙しいタイミングで作ったサイトです。'
        },
    ]

    return (
        <div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-8">
                <SectionTitle className="mb-2 sm:mb-0">Memos</SectionTitle>
                <p className="text-muted-foreground bg-secondary/50 px-4 py-2 rounded-full shadow-sm inline-block">技術メモや覚え書き</p>
            </div>

            <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {memos.map((memo) => (
                    <MemoCard key={memo.slug} memo={memo} />
                ))}
            </Box>
        </div>
    )
}
