import React from 'react';
import ReactDOM from 'react-dom/client';
import Kommunicate from "@kommunicate/kommunicate-chatbot-plugin";
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
Kommunicate.init("3c8d0ec6989a285a243e203b2fd79c7c1", {
  automaticChatOpenOnNavigation: true,
  popupWidget: true
});
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
