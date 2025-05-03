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
  title: 'サイトをつくりました | moodai',
};

export default function FirstMemoPage() {
  // Memo date
  const memoDate = '2025-05-03';

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
          サイトを作りました
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
            GWの中盤、ハッカソンの締め切りまであと10日を切りそうな忙しいタイミングで作ったサイトです。
          </Typography>

          <Typography variant="body1" paragraph sx={{ color: 'text.secondary' }}>
            SolanaのBreakoutハッカソンでTransakを使おうとしたら、登録フォームで「フリーじゃないメールアドレス！！」が必須になっていて、仕方なく某お名前ドットコムでメール用のドメインを作り、無料のZohoMailといろいろ連携して「フリーじゃないメアド」を作りました。
          </Typography>

          <Typography variant="body1" paragraph sx={{ color: 'text.secondary' }}>
            ところが、Transakの登録要件をさらに見ていくと「自社サイトのリンク！（必須）（笑）」とあり、これはしゃあないなと思いつつ、不可抗力で自分用のサイトを作ることに。
          </Typography>

          <Typography variant="body1" paragraph sx={{ color: 'text.secondary' }}>
            重い腰を少しだけ上げて、Next.jsとVercel、Githubを使って開発からデプロイまでやることに。
          </Typography>

          <Typography variant="body1" paragraph sx={{ color: 'text.secondary' }}>
            VSCodeの拡張機能のClineを使えば、ほぼ日本語指示だけでコードが書けるので、短時間でそれなりのサイトは作れるんですよね。（認証にWebサイトのリンクを使うのってもはや意味あるのかわかんないですね（笑））
          </Typography>

          <Typography variant="body1" paragraph sx={{ color: 'text.secondary' }}>
            ついでにと思って、こんな感じの適当なメモ置き場を追加したりしましたが、他に特に凝ったことはせず、とにかくシンプルな構成でサイトを作りました。
          </Typography>

          <Typography variant="body1" paragraph sx={{ color: 'text.secondary' }}>
            驚いたのは、これが小一時間くらいで終わっちゃったこと。
          </Typography>

          <Typography variant="body1" paragraph sx={{ color: 'text.secondary' }}>
            本当はハッカソンのMVP作りとかピッチのプレゼン準備に集中したい時期なのに、こういう環境構築で時間取られるのはもったいないんだよなぁ。
          </Typography>

          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            でも今のツールって便利だな〜と実感。これでやっと本題に戻れる。ハッカソンまでの時間も限られてるし、さっさと進めます。
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