'use client';

// components/layout/Layout.tsx
import React, { ReactNode } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
    children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <Container maxWidth="lg" sx={{ py: 4 }}>
            <Header />
            <Box component="main" sx={{ my: 4, minHeight: '70vh' }}>
                {children}
            </Box>
            <Footer />
        </Container>
    );
}