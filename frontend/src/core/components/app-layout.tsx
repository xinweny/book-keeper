'use client';

import { NuqsAdapter } from 'nuqs/adapters/next/app';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { Header } from './header';
import { Footer } from './footer';

interface AppLayoutProps {
  children: React.ReactNode;
}

const queryClient = new QueryClient();

export function AppLayout({
  children,
}: AppLayoutProps) {
  return (
    <NuqsAdapter>
      <QueryClientProvider client={queryClient}>
        <div className="flex flex-col min-h-screen w-screen">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </QueryClientProvider>
    </NuqsAdapter>
  );
}