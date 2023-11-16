import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/App';

// const router = createBrowserRouter([
//   {
//     path: "/" , 
//     element: <Login/>
//   },
//   {
//     path: "Avaliacoes" , 
//     element: <Avaliacoes/>
//   },
//   {
//     path: "Recomendados" , 
//     element: <Recomendados/>
//   },
//   {
//     path: "Home" , 
//     element: <Home/>
//   },
//   {
//     path: "Gerenciar" , 
//     element: <GerenciarConta/>
//   },
// ])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
