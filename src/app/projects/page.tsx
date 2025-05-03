// app/projects/page.tsx
export default function ProjectsPage() {
    return (
        <section>
            <h2 className="text-2xl font-semibold mb-4">Projects</h2>
            <ul className="list-disc ml-6">
                <li><a href="https://ricechain.example.com" className="text-blue-600">RiceChain</a> — Solana P2P米流通プラットフォーム</li>
                <li><a href="https://transak.example.com" className="text-blue-600">FaceWallet + Transak</a> — モック + 実装サンプル</li>
                <li><a href="https://moodai-web.example.com" className="text-blue-600">This Site</a> — Next.js + Docker + Vercel</li>
            </ul>
        </section>
    )
}
