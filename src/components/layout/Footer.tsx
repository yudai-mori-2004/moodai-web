// components/layout/Footer.tsx
import React from 'react';
import { Box, Typography, Link, Container, Stack } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Footer() {
    return (
        <Box component="footer" sx={{ mt: 8, pt: 4, borderTop: '1px solid', borderColor: 'divider' }}>
            <Container maxWidth="lg">
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: { xs: 'flex-start', md: 'center' } }}>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: { xs: 2, md: 0 } }}>
                        © {new Date().getFullYear()} moodai
                    </Typography>
                    <Stack direction="row" spacing={3}>
                        <Link href="mailto:yudai.mori@moodai.jp" underline="none" sx={{
                            display: 'flex',
                            alignItems: 'center',
                            color: 'text.secondary',
                            '&:hover': {
                                color: 'text.primary',
                            }
                        }}>
                            <EmailIcon fontSize="small" sx={{ mr: 0.5 }} />
                            yudai.mori@moodai.jp
                        </Link>
                        <Link href="https://github.com/yudai-mori-2004" target="_blank" rel="noopener noreferrer" underline="none" sx={{
                            display: 'flex',
                            alignItems: 'center',
                            color: 'text.secondary',
                            '&:hover': {
                                color: 'text.primary',
                            }
                        }}>
                            <GitHubIcon fontSize="small" sx={{ mr: 0.5 }} />
                            GitHub
                        </Link>
                    </Stack>
                </Box>
            </Container>
        </Box>
    );
}