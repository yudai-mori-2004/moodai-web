// components/ui/Card.tsx
import React, { ReactNode } from 'react';
import { Paper, Box } from '@mui/material';

interface CardProps {
    children: ReactNode;
    withHoverEffect?: boolean;
}

export function Card({ children, withHoverEffect = true }: CardProps) {
    return (
        <Paper
            elevation={0}
            sx={{
                p: 0,
                borderRadius: 1,
                border: '1px solid rgba(0, 0, 0, 0.05)',
                backgroundColor: 'background.paper',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.2s ease',
                ...(withHoverEffect && {
                    '&:hover': {
                        transform: 'translateY(-2px)',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
                    }
                })
            }}
        >
            {children}
        </Paper>
    );
}