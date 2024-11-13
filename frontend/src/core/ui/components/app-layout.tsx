import { NuqsAdapter } from 'nuqs/adapters/next/app';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
import { Suspense } from 'react';

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
    <Suspense>
      <NuqsAdapter>
        <QueryClientProvider client={queryClient}>
          <div className="flex flex-col min-h-screen max-w-screen overflow-auto">
            <Header />
            <main className="flex-grow p-4">
              <Toaster />
              {children}
            </main>
            <Footer />
          </div>
        </QueryClientProvider>
      </NuqsAdapter>
    </Suspense>
  );
}