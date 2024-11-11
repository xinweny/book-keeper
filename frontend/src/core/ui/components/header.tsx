import Link from 'next/link';
import { PlusIcon, LibraryBigIcon } from 'lucide-react';

import { buttonVariants } from '@/components/ui/button';

export function Header() {
  return (
    <header className="flex items-center justify-between p-4 shadow-md">
      <Link
        href="/"
        className="flex items-center gap-2"
      >
        <LibraryBigIcon size={36} />
        <h1 className="font-bold text-2xl">Book Keeper</h1>
      </Link>
      <Link
        href="/new"
        className={buttonVariants({ variant: 'default' })}
      >
        <PlusIcon />
        <span className="font-semibold">Add Book</span>
      </Link>
    </header>
  );
}