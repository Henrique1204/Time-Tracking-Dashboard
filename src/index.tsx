import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { AtividadeProvider } from './Context/Atividade.context';

ReactDOM.render(
  <React.StrictMode>
    <AtividadeProvider>
      <App />
    </AtividadeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
