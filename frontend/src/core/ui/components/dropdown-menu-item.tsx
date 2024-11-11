import { LucideIcon } from 'lucide-react';

import { cn } from '@/lib/cn';

import { DropdownMenuItem as DropdownItem } from '@/components/ui/dropdown-menu';

interface DropdownMenuItemProps {
  onClick?: () => void;
  icon: LucideIcon;
  label: string;
  className?: string;
}

export function DropdownMenuItem({
  onClick,
  icon,
  label,
  className,
}: DropdownMenuItemProps) {
  const Icon = icon;

  return (
    <DropdownItem
      onClick={onClick}
      className={cn('flex items-center gap-4 cursor-pointer', className)}
    >
      <Icon width={16} />
      <span className="text-sm font-medium">{label}</span>
    </DropdownItem>
  );
}