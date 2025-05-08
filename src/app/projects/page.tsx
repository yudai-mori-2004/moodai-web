// app/projects/page.tsx
import { SectionTitle } from '@/components/ui/SectionTitle'
import { ProjectCard } from '@/components/sections/ProjectCard'
import { Box } from '@mui/material'

export const metadata = {
    title: 'Projects | moodai',
    description: 'moodaiのプロジェクト一覧',
}

export default function ProjectsPage() {
    return (
        <div>
            <SectionTitle>Projects</SectionTitle>

            <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <ProjectCard
                    title="RiceChain"
                    description="Solana上でP2P米流通プラットフォームの構築を目指しています。今回はハッカソンに出すフローを通してクリプトの経験を積む目的が大きいですが、いつか実現したいアイデアです。"

                    link="https://ricechain.example.com"
                    tags={["Solana", "Blockchain", "Web3"]}
                />



                <ProjectCard
                    title="進捗があればどんどん更新していきます"
                    description="幅広く、生活や社会をよりよくするアイデアを創出します。"
                    link=""
                    tags={[]}
                />
            </Box>
        </div>
    )
}
