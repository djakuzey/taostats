import React from 'react';
import { cn } from '@/lib/utils';

interface TableHeaderItemProps {
  children: React.ReactNode;
  className?: string;
}

function TableHeaderItem({ children, className }: TableHeaderItemProps) {
  return (
    <div
      className={cn(
        'text-secondaryText font-medium text-[16px] truncate',
        className,
      )}
    >
      {children}
    </div>
  );
}

export default TableHeaderItem;
