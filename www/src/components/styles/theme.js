import { createTheme } from "@mui/material";

 const theme = createTheme({
    components: {
      MuiMenuItem: {
        styleOverrides: {
          root: {
            backgroundColor: '#ffffff ',
            opacity: '.8',
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            marginTop:10,
            backgroundColor: '#ffffff ',
            opacity: '.8',
          },
        },
      },
      MuiSelect: {
        styleOverrides: {
          root: {
            backgroundColor: '#ffffff ',
            opacity: '.8',
          },
        },
      },
    },
  });

  export default theme;