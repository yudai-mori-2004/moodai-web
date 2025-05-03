// components/ui/SectionTitle.tsx
import React, { ReactNode } from 'react';
import { Typography, Box } from '@mui/material';

interface SectionTitleProps {
    children: ReactNode;
    className?: string;
}

export function SectionTitle({ children }: SectionTitleProps) {
    return (
        <Box sx={{ mb: 4, position: 'relative', display: 'inline-block' }}>
            <Typography
                variant="h3"
                component="h2"
                fontWeight="bold"
                sx={{ mb: 0.5 }}
            >
                {children}
            </Typography>
            <Box
                sx={{
                    position: 'absolute',
                    bottom: -4,
                    left: 0,
                    width: '40px',
                    height: '2px',
                    bgcolor: 'text.primary',
                    borderRadius: '1px',
                }}
            />
        </Box>
    );
}