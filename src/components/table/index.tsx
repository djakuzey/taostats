"use client";
import React, { useState } from 'react';
import {
  flexRender,
  getCoreRowModel,
  SortingState,
  useReactTable,
} from '@tanstack/react-table';
import { Column, tableData } from '@/lib/table-utils';
import { cn } from '@/lib/utils';

interface TableProps<T> {
  data: T[];
  title?: string;
  columns: Column<T>[];
  withFooter?: boolean;
  className?: string;
}

function Table<TableData>({
  data,
  title,
  columns,
  withFooter = false,
  className,
}: TableProps<TableData>) {
  const { columnHelper, tableColumns } = tableData<TableData>(columns);

  const [sorting, setSorting] = useState<SortingState>();
  const table = useReactTable<TableData>({
    data,
    state: {
      sorting,
    },
    columns: tableColumns,
    getCoreRowModel: getCoreRowModel(),
  });

  const headerRow = (
    table.getHeaderGroups().map(headerGroup => (
      <React.Fragment key={headerGroup.id}>
        {headerGroup.headers.map(header => (
          <div
            key={header.id}
            style={{
              width: header.column.columnDef.maxSize
                ? `${header.column.columnDef.maxSize}px`
                : "auto",
            }}
            className={
              cn("border-b pb-3 px-2", header.column.getCanSort()
                ? "cursor-pointer select-none"
                : "")
            }
            onClick={header.column.getToggleSortingHandler()}
          >
            {header.isPlaceholder
              ? null
              : flexRender(
                header.column.columnDef.header,
                header.getContext()
              )}
          </div>
        ))}
      </React.Fragment>
    ))
  );

  const tableBody = (
    table.getRowModel().rows.map(row => (
      <React.Fragment key={row.id}>
        {row.getVisibleCells().map(cell => (
          <div
            key={cell.id}
            className="border-b pb-4 pt-3 px-2"
            style={{
              width: cell.column.columnDef.maxSize
                ? `${cell.column.columnDef.maxSize}px`
                : "auto",
            }}
          >
            {flexRender(cell.column.columnDef.cell, cell.getContext())}
          </div>
        ))}
      </React.Fragment>
    ))
  );

  const footer = (
    table.getFooterGroups().map(footerGroup => (
      <React.Fragment key={footerGroup.id}>
        {footerGroup.headers.map(header => (
          <div key={header.id}>
            {header.isPlaceholder
              ? null
              : flexRender(
                header.column.columnDef.footer,
                header.getContext()
              )}
          </div>
        ))}
      </React.Fragment>
    ))
  );

  return (
    <div className={cn(className)}>
      {title && (
        <h1 className="text-[20px] font-medium text-white mb-12">
          {title}
        </h1>
      )}
      <div
        className={`grid`}
        style={{ gridTemplateColumns: `repeat(${columns.length}, minmax(0, auto))`}}
      >
        {headerRow}

        {tableBody}

        {withFooter && footer}
      </div>
    </div>
  );
}

export default Table;
