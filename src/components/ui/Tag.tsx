// components/ui/Tag.tsx
import React, { ReactNode } from 'react';
import { Chip, Box } from '@mui/material';

interface TagProps {
    children: ReactNode;
}

export function Tag({ children }: TagProps) {
    return (
        <Chip
            label={children}
            size="small"
            sx={{
                bgcolor: 'rgba(0, 0, 0, 0.25)',
                color: 'text.secondary',
                fontWeight: 500,
                borderRadius: 1,
                '&:hover': {
                    bgcolor: 'rgba(0, 0, 0, 0.32)',
                }
            }}
        />
    );
}

export function TagList({ children }: { children: ReactNode }) {
    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {children}
        </Box>
    );
}