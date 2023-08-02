import { createTheme } from '@mui/material/styles';


const useTheme = (palette) => {
    const theme = createTheme({
        palette: palette,
        typography: {
            fontSize: 14,
            fontFamily: [
                '-apple-system',
                'BlinkMacSystemFont',
                '"Segoe UI"',
                'Roboto',
                '"Helvetica Neue"',
                'Arial',
                'sans-serif',
                '"Apple Color Emoji"',
                '"Segoe UI Emoji"',
                '"Segoe UI Symbol"',
            ].join(','),
            h1: {
                fontSize: 14,
                fontWeight: '600'
            },
            h2: {
                fontSize: '20px',
                fontWeight: '500',
            },
            h3: {
                fontSize: '14px',
                fontWeight: '500',
            },
            h4: {
                fontSize: '12px',
                fontWeight: '500'
            }
        },
          components: {
            MuiCssBaseline: {
                styleOverrides: `
                    @font-face {
                        font-family: '-apple-system';
                        font-style: normal;
                        font-display: swap;
                        font-weight: 400;          
                }
                `,
            },
            MuiTypography: {
                defaultProps: {
                    // variantMapping: {
                    //     h1: 'h2',
                    //     h2: 'h2',
                    //     h3: 'h2',
                    //     h4: 'h2',
                    //     h5: 'h2',
                    //     h6: 'h2',
                    //     subtitle1: 'h2',
                    //     subtitle2: 'h2',
                    //     body1: 'span',
                    //     body2: 'span',
                    // },
                },
            },
        },
    })

    return theme;
}


export default useTheme;