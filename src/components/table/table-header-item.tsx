import React from "react";

interface TableHeaderItemProps {
  children: React.ReactNode;
  [key: string]: any;
}

function TableHeaderItem({ children, ...props }: TableHeaderItemProps) {
  return (
    <span>
      {children}
    </span>
  );
}

export default TableHeaderItem;
