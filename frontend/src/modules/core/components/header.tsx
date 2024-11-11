import Link from 'next/link';
import { BookPlusIcon, LibraryBigIcon } from 'lucide-react';

import { buttonVariants } from '@/components/ui/button';

export function Header() {
  return (
    <header className="flex items-center justify-between px-4 py-2">
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
        <BookPlusIcon />
        <span className="font-semibold">Add Book</span>
      </Link>
    </header>
  );
}