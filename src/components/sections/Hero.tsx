// components/sections/Hero.tsx
import React from 'react';
import Link from 'next/link';
import { Box, Typography, Button, Grid, Container } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { Card } from '../ui/Card';

export function Hero() {
    return (
        <Container maxWidth="lg" sx={{ mt: 6, mb: 10 }}>
            <Grid container spacing={6} alignItems="center">
                <Grid item xs={12} md={7}>
                    <Typography
                        variant="h2"
                        component="h1"
                        fontWeight="bold"
                        sx={{ mb: 2 }}
                    >
                        moodai
                    </Typography>

                    <Typography variant="body1" sx={{ mb: 3, color: 'text.secondary', maxWidth: '40ch' }}>
                        Web3に最近興味を持ち始めました。現在はSolanaのハッカソンを通じていろいろ勉強をさせていただいています。
                    </Typography>

                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
                        <MailOutlineIcon sx={{ fontSize: 20, mr: 1, color: 'text.secondary' }} />
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            yudai.mori@moodai.jp
                        </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                        <Button
                            component={Link}
                            href="/projects"
                            variant="contained"
                            color="primary"
                            endIcon={<ArrowForwardIcon />}
                            sx={{
                                px: 3,
                                py: 1.5,
                                borderRadius: 1,
                            }}
                        >
                            プロジェクト一覧
                        </Button>
                        <Button
                            component={Link}
                            href="/memos"
                            variant="outlined"
                            color="primary"
                            sx={{
                                px: 3,
                                py: 1.5,
                                borderRadius: 1,
                            }}
                        >
                            メモ一覧
                        </Button>
                    </Box>
                </Grid>

                <Grid item xs={12} md={5}>
                    <Card>
                        <Box sx={{
                            p: 4,
                            backgroundColor: 'rgba(0, 0, 0, 0.02)',
                            borderRadius: 1,
                            border: '1px solid rgba(0, 0, 0, 0.05)'
                        }}>
                            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                                最近の関心
                            </Typography>

                            <Box component="ul" sx={{
                                pl: 2,
                                '& li': {
                                    mb: 1.5,
                                    color: 'text.secondary',
                                    fontSize: '0.95rem'
                                }
                            }}>
                                <li>DApp（分散型アプリ）の開発</li>
                                <li>特に今は、DePINの社会実装に興味があります</li>
                                <li>生体情報解析（卒論テーマ）</li>
                            </Box>
                        </Box>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
}