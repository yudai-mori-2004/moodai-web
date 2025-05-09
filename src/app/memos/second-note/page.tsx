// app/memos/first-note/page.tsx
import React from 'react';
import Link from 'next/link';
import {
  Box,
  Typography,
  Paper,
  Divider,
  Button,
  Chip,
  Container,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

export const metadata = {
  title: '次の目標について | moodai',
};

export default function SecondMemoPage() {
  // Memo date
  const memoDate = '2025-05-10';

  // Format date to display in a more readable format (YYYY年MM月DD日)
  const formattedDate = new Date(memoDate).toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <Container maxWidth="md">
      <Box component="article" sx={{ position: 'relative', my: 4 }}>
        <Typography
          variant="h2"
          component="h1"
          fontWeight="bold"
          sx={{ mb: 2 }}
        >
          次の目標について
        </Typography>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 2, mb: 4 }}>
          <Chip
            icon={<CalendarTodayIcon />}
            label={formattedDate}
            component="time"
            dateTime={memoDate}
            variant="outlined"
            size="small"
            sx={{
              borderRadius: 1,
              py: 0.5,
              px: 0.5,
              '& .MuiChip-label': {
                px: 1,
                fontWeight: 500,
              },
            }}
          />

          <Box sx={{ display: 'flex', gap: 1 }}>
            <Chip
              label="Next.js"
              size="small"
              sx={{
                bgcolor: 'rgba(0, 0, 0, 0.2)',
                color: 'text.secondary',
                fontWeight: 500,
                borderRadius: 1,
              }}
            />
            <Chip
              label="Vercel"
              size="small"
              sx={{
                bgcolor: 'rgba(0, 0, 0, 0.2)',
                color: 'text.secondary',
                fontWeight: 500,
                borderRadius: 1,
              }}
            />
          </Box>
        </Box>

        <Paper
          elevation={0}
          sx={{
            p: { xs: 3, md: 4 },
            borderRadius: 1,
            mb: 4,
            border: '1px solid rgba(0, 0, 0, 0.05)',
          }}
        >
          <Typography variant="body1" paragraph sx={{ color: 'text.secondary' }}>
            先日、急に東京へ行き、Breakoutハッカソンの参加メンバーが集まるイベントに参加してきました。
          </Typography>

          <Typography variant="body1" paragraph sx={{ color: 'text.secondary' }}>
            海外の起業家からピッチ作成のコツを教えてもらったり、他の出場チームの発表を聞いたりして、多くの学びを得ることができました。特に、これまでこのハッカソンに一人で取り組んできた私にとって、他の参加者たちの熱意を肌で感じる機会は初めてであり、とても大きな刺激になりました。
          </Typography>

          <Typography variant="body1" paragraph sx={{ color: 'text.secondary' }}>
            その後、現地で出会った方に翌日までお世話になり、様々な話を聞かせていただきました。そこで痛感したのは、私がこの分野についていかに無知であるかということです。
          </Typography>

          <Typography variant="body1" paragraph sx={{ color: 'text.secondary' }}>
            正直なところ、これまで私はWeb3業界にあまり信頼を置いていませんでした。実社会に活かすプロジェクトに興味がある私からすれば、Web3は単なる分散化・透明化ツールのようなものであり、必要な部分だけ理解して取り入れる「つまみ食い」のような甘い考えで臨めると思っていました。
          </Typography>

          <Typography variant="body1" paragraph sx={{ color: 'text.secondary' }}>
            しかし、Web3はそのような単純な世界ではありませんでした。トークン運用、AMMの仕組み、DEXやCEX、流動性についての理解などの基礎知識に加え、最新トレンドをキャッチするアンテナ力も必要です。そうした知識を備えて初めて、プロダクトに活かせる最適なスタックを選定できると気づきました。
          </Typography>

          <Typography variant="body1" paragraph sx={{ color: 'text.secondary' }}>
            また、Web3技術に関わることで得られるスキルは非常に幅広く、この業界での経験は将来の選択肢を広げるという点でも大きな価値があると感じています。
          </Typography>

          <Typography variant="body1" paragraph sx={{ color: 'text.secondary' }}>
            こうした刺激を受けた後、ハッカソンで作成中のプロダクトを振り返ると、Web3の強みを十分に活かしきれていないと感じ、戦略を見直す必要があると考えました。
          </Typography>

          <Typography variant="body1" paragraph sx={{ color: 'text.secondary' }}>
            これまでMVPの一部とピッチデックの作成まで進めていましたが、納得できない点が多く、このままMVPの完成やピッチ動画の制作を進めても意味がないと判断し、今回は提出を見送ることにしました。
          </Typography>

          <Typography variant="body1" paragraph sx={{ color: 'text.secondary' }}>
            ただ、アイデアのコンセプト自体には自信があるので、今後必ず何らかの形で実現させたいと思っています。
          </Typography>

          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            当面は勉強に集中するつもりです。AMMの仕組みを理解するためのプロダクトを作りながら、知識を深めていきたいと考えています。
          </Typography>
        </Paper>

        <Divider sx={{ my: 4 }} />

        <Button
          component={Link}
          href="/memos"
          startIcon={<ArrowBackIcon />}
          sx={{
            color: 'text.primary',
            fontWeight: 500,
            '&:hover': {
              backgroundColor: 'transparent',
              color: 'text.secondary',
              transform: 'translateX(-6px)',
            }
          }}
        >
          メモ一覧に戻る
        </Button>
      </Box>
    </Container>
  );
}