import React, { lazy, Suspense } from 'react';
import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const IndexPage = lazy(() => import('./pages/Index'));
const SobrePage = lazy(() => import('./pages/Sobre'));
const ContatoPage = lazy(() => import('./pages/Contato'));
const DeliveryPage = lazy(() => import('./pages/Delivery'));
const NotFoundPage = lazy(() => import('./pages/NotFound'));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense
          fallback={
            <div className="flex justify-center items-center h-screen">
              Carregando...
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<IndexPage />} />
            <Route path="/sobre" element={<SobrePage />} />
            <Route path="/contato" element={<ContatoPage />} />
            <Route path="/delivery" element={<DeliveryPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
