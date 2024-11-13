import { Badge } from '@/components/ui/badge';

interface FilterBadgeProps {
  label: string;
  value: string;
  onClick?: () => void;
}

export function FilterBadge({
  label,
  value,
  onClick,
}: FilterBadgeProps) {
  return (
    <button onClick={onClick}>
      <Badge
        key={label}
        className="text-sm rounded-full flex items-center gap-1"
      >
        <span className="font-medium">{label}:</span>
        <span className="font-bold">{value}</span>
      </Badge>
    </button>
  );
}