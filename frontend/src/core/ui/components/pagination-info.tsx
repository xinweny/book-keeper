interface PaginationInfoProps {
  page?: number;
  pageSize?: number | null;
  currentCount?: number;
  totalCount: number;
}

export function PaginationInfo({
  page = 1,
  pageSize,
  currentCount = 0,
  totalCount,
}: PaginationInfoProps) {
  return (
    <div className="text-right">
      <span className="text-sm text-right py-2">
        <span className="font-bold">
          {pageSize
            ? ((page - 1) * pageSize) + 1
            : 1
          }
        </span>
        <span> - </span>
        <span className="font-bold">
          {pageSize
            ? ((page - 1) * pageSize) + currentCount
            : totalCount
          }
        </span>
        <span> of </span>
        <span className="font-bold">{totalCount}</span>
        <span> items</span>
      </span>
    </div>
  );
}