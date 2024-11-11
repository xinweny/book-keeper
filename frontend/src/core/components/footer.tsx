import Image from 'next/image';

import githubIconSrc from '@/assets/icons/github.svg';

export function Footer() {
  return (
    <footer className="flex items-center justify-center gap-2 font-medium text-sm py-1">
      <span>Made by <a className="font-bold" href="https://github.com/xinweny">xinweny</a> in 2024</span>
      <a
        className="flex items-center gap-1"
        href="https://github.com/xinweny/book-keeper"
      >
        <Image
          src={githubIconSrc}
          alt="Source Code"
          width={16}
          height={16}
        />
      </a>
    </footer>
  );
}