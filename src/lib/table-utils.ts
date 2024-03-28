import { createColumnHelper, ColumnHelper, ColumnDef } from "@tanstack/react-table";
import React from "react";

export interface Column<TableFormat> {
  id?: string;
  header?: () => React.ReactNode;
  accessor: keyof TableFormat;
  cell?: (info: any) => React.ReactNode;
  footer?: (info: any) => React.ReactNode;
  enableSorting?: boolean;
  maxSize?: number;
}

export interface ReturnType<TableFormat> {
  columnHelper: ColumnHelper<TableFormat>;
  tableColumns: ColumnDef<TableFormat, TableFormat[keyof TableFormat]>[];
}

export function tableData<TableFormat>(columns: Column<TableFormat>[]): ReturnType<TableFormat> {
  const columnHelper: ColumnHelper<TableFormat> = createColumnHelper<TableFormat>();

  const tableColumns: ColumnDef<TableFormat, TableFormat[keyof TableFormat]>[] = columns?.map(({ accessor, ...rest}) => {
    return columnHelper.accessor((row: TableFormat) => row[accessor], {
      id: rest?.id || "",
      header: rest?.header,
      cell: rest?.cell,
      footer: rest?.footer,
      enableSorting: rest?.enableSorting,
      maxSize: rest?.maxSize,
    });
  });

  return { columnHelper, tableColumns };
}
