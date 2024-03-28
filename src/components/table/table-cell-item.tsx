import React from "react";
import { cn } from '@/lib/utils';

interface TableHeaderItemProps {
  children: React.ReactNode;
  className?: string;
}

function TableCellItem({ children, className }: TableHeaderItemProps) {
  return (
    <div className={cn("text-[16px] text-white font-medium truncate", className)}>
      {children}
    </div>
  );
}

export default TableCellItem;
