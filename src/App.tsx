import React, { lazy, Suspense } from 'react';
import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

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
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
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
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
