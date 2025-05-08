// components/layout/Footer.tsx
'use client';
import React from 'react';
import { Box, Typography, Link, Stack, IconButton, Tooltip } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Footer() {
    return (
        <Box component="footer" sx={{ mt: 8, pt: 4, borderTop: '1px solid', borderColor: 'divider' }}>
            <Box sx={{ maxWidth: '1200px', mx: 'auto', width: '100%', px: 3 }}>
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: { xs: 'flex-start', md: 'center' } }}>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: { xs: 2, md: 0 } }}>
                        © {new Date().getFullYear()} moodai
                    </Typography>
                    
                    <Stack direction="row" spacing={2} alignItems="center">
                        <Tooltip title="Email">
                            <Link href="mailto:yudai.mori@moodai.jp" color="inherit" sx={{ display: 'flex', alignItems: 'center' }}>
                                <EmailIcon fontSize="small" />
                                <Typography variant="body2" color="text.secondary" sx={{ ml: 0.5 }}>
                                    yudai.mori@moodai.jp
                                </Typography>
                            </Link>
                        </Tooltip>
                    </Stack>
                </Box>
            </Box>
        </Box>
    );
}
