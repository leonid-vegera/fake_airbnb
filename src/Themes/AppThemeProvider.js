import { createTheme, ThemeProvider } from '@mui/material';
// import Circular from '../fonts/Circular/CircularStd-Medium.otf';
import { grey, pink } from '@mui/material/colors';

export function AppThemeProvider({ children }) {
  const theme = createTheme({
    typography: {
      allVariants: {
        fontFamily: [
          'Roboto',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ].join(','),
        textTransform: 'none',
        fontSize: 15,
      }
    },
    palette: {
      primary: {
        main: grey[700]
      },
      secondary: {
        main: pink[500]
      }
    },
    components: {
      MuiTypography: {
        defaultProps: {
          sx: {
            px: 1
          },
          variant: 'subtitle2',
          textTransform: 'capitalize'
        }
      },
      MuiStack: {
        defaultProps: {
          sx: {
            px: 2,
            py: 1,
          },
          spacing: 2,
          direction: 'row',
        }
      },
      MuiPaper: {
        defaultProps: {
          elevation: 0
        }
      },
      MuiLink: {
        defaultProps: {
          sx: {
            color: theme => theme.palette.primary.main,
          },
          underline: 'none',
        }
      },
      MuiButton: {
        defaultProps: {
          size: 'small',
          disableRipple: true,
          p: 0,
          variant: 'text',
        },
      },
      MuiTab: {
        defaultProps: {
          disableRipple: true,
        }
      }
    }
  })

  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}