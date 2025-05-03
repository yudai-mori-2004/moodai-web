// app/theme.ts
'use client';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

// モノクロ基調でシンプルでスタイリッシュなテーマを作成
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#333333', // ダークグレー
      light: '#555555',
      dark: '#111111',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#666666', // ミディアムグレー
      light: '#999999',
      dark: '#444444',
      contrastText: '#ffffff',
    },
    background: {
      default: '#f8f8f8', // ほぼ白のバックグラウンド
      paper: '#ffffff',
    },
    text: {
      primary: '#111111',
      secondary: '#555555',
    },
    divider: 'rgba(0, 0, 0, 0.08)',
  },
  typography: {
    fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '2.5rem',
      letterSpacing: '-0.02em',
    },
    h2: {
      fontWeight: 700,
      fontSize: '2rem',
      letterSpacing: '-0.01em',
    },
    h3: {
      fontWeight: 600,
      fontSize: '1.5rem',
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.25rem',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.5,
    },
  },
  shape: {
    borderRadius: 8, // 角の丸みを減らす
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
          transition: 'all 0.2s ease',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05), 0 1px 3px rgba(0, 0, 0, 0.1)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 500,
          borderRadius: 4,
          transition: 'all 0.2s ease',
          '&:hover': {
            transform: 'translateY(-1px)',
          },
        },
        containedPrimary: {
          boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
          '&:hover': {
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.15)',
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: 'none',
          color: '#333333',
          transition: 'color 0.2s ease',
          '&:hover': {
            color: '#111111',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          fontWeight: 500,
        },
      },
    },
  },
});

// レスポンシブなタイポグラフィに
const responsiveTheme = responsiveFontSizes(theme);

// ダークモード対応
const darkTheme = createTheme({
  ...responsiveTheme,
  palette: {
    ...responsiveTheme.palette,
    mode: 'dark',
    primary: {
      main: '#e0e0e0', // ライトグレー
      light: '#f5f5f5',
      dark: '#cccccc',
      contrastText: '#111111',
    },
    secondary: {
      main: '#b0b0b0', // ミディアムグレー
      light: '#d0d0d0',
      dark: '#909090',
      contrastText: '#111111',
    },
    background: {
      default: '#121212', // ダークバックグラウンド
      paper: '#1a1a1a',
    },
    text: {
      primary: '#f5f5f5',
      secondary: '#b0b0b0',
    },
    divider: 'rgba(255, 255, 255, 0.08)',
  },
});

export { responsiveTheme as theme, darkTheme };