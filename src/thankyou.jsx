import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import ThankYou from './pages/ThankYou';
import './styles/global.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThankYou />
  </StrictMode>
);
