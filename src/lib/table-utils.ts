import { createColumnHelper, ColumnHelper, ColumnDef } from "@tanstack/react-table";
import React from "react";

export interface Column<TableFormat> {
  id: string;
  header: string;
  accessor: keyof TableFormat;
  cell: (info: any) => React.ReactNode;
  footer: (info: any) => React.ReactNode;
}

export interface ReturnType<TableFormat> {
  columnHelper: ColumnHelper<TableFormat>;
  tableColumns: ColumnDef<TableFormat, TableFormat[keyof TableFormat]>[];
}

export function tableData<TableFormat>(columns: Column<TableFormat>[]): ReturnType<TableFormat> {
  const columnHelper: ColumnHelper<TableFormat> = createColumnHelper<TableFormat>();

  const tableColumns: ColumnDef<TableFormat, TableFormat[keyof TableFormat]>[] = columns?.map(({ accessor, ...rest}) => {
    return columnHelper.accessor((row: TableFormat) => row[accessor], {
      ...rest,
    });
  });

  return { columnHelper, tableColumns };
}
