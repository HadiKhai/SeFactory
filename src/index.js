import React from 'react';
import ReactDOM from 'react-dom';
import {createTheme} from "@mui/material";
import {ThemeProvider} from "@emotion/react";
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import {GREEN} from "./components/utils/constants";

const Theme = createTheme({
    palette: {
        primary: {
            main: GREEN,
        },
    },
})

ReactDOM.render(
    <ThemeProvider theme={Theme}>
        <App />
    </ThemeProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
