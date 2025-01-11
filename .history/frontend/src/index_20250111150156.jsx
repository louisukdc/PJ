import React from 'react';
import ReactDOM from 'react-dom/client'; // Correct import for ReactDOM
import './index.css';
import App from './App';
import App from './App_Buku';
import reportWebVitals from './reportWebVitals';
import 'bulma/css/bulma.css';

const root = ReactDOM.createRoot(document.getElementById('root')); // Use the correct method
root.render( 
    <React.StrictMode >
        <App_Buku />
    </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();