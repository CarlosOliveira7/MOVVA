import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Login from "./feature/auth/pages/Login";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Shop from './feature/shop/pages/shop';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/shop" element={<Shop />}/>
    </Routes>
          
    </BrowserRouter>
</QueryClientProvider>
    
  </StrictMode>,
);