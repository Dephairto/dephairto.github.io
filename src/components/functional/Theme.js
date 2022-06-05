import {createTheme, CssBaseline, responsiveFontSizes, ThemeProvider} from '@mui/material';

import "@ibm/plex/css/ibm-plex.css";

const theme = responsiveFontSizes(createTheme({
    palette: {
        type: 'light',
        primary: {
            main: '#d5eadc',
        },
        secondary: {
            main: '#74a369',
        },
        background: {
            default: "#F8F8F5",
        },
    },
    typography: {
        fontFamily: 'IBM Plex Serif',
    },
}));

export default function Theme({children}) {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline enableColorScheme/>
            {children}
        </ThemeProvider>
    );
}