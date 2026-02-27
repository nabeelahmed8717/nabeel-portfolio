'use client';

import type { ReactNode } from 'react';
import { useEffect, useState } from 'react';

interface AppShellProps {
  children: ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  const [isInitialLoading, setIsInitialLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsInitialLoading(false);
    }, 700); // small delay so loader is visible on refresh

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {isInitialLoading && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-neutral-950">
          <div className="h-10 w-10 animate-spin rounded-full border-2 border-neutral-700 border-t-transparent" />
        </div>
      )}
      <div className="flex min-h-screen flex-col">{children}</div>
    </>
  );
}

