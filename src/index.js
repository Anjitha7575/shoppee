import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './configStore';
import App from './App';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { StyledEngineProvider } from "@mui/material";
import { ThemeProvider as ScThemeProvider } from "styled-components";
import './index.css';


const theme = createTheme({
  palette: {
    primary: { main: "#5263ff" },
    bgClr: { main: "#848ee81c" },
    fontColor: { main: "#282c3f" },
    white: "#FFFFFF",
    black: "#000000",
    secondary: { main: "#f16565" },
    teritary: { main: "#848ee81c" }
  },
  typography: {
    allVariants: {
      fontFamily: '"Poppins",sans-serif',
    }}
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StyledEngineProvider injectFirst>
          <ThemeProvider theme={theme}>
            <ScThemeProvider theme={theme}>
              <App />
            </ScThemeProvider>
          </ThemeProvider>
        </StyledEngineProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

