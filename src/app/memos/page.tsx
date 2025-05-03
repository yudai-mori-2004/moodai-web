// app/memos/page.tsx
import Link from 'next/link'

export default function MemosPage() {
    const notes = [
        { slug: 'first-note', title: 'First Note' },
        { slug: 'second-note', title: 'Second Note' },
    ]

    return (
        <section>
            <h2 className="text-2xl font-semibold mb-4">Memos</h2>
            <ul className="list-disc ml-6">
                {notes.map(({ slug, title }) => (
                    <li key={slug}>
                        <Link href={`/memos/${slug}`} className="text-blue-600">
                            {title}
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    )
}
