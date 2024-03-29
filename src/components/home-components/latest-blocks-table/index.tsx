"use client";
import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from "lucide-react";

import { Column } from '@/lib/table-utils';
import { LatestBlock, latestBlocksMock } from '@/mocks/table';
import TableHeaderItem from '@/components/table/table-header-item';
import TableCellItem from '@/components/table/table-cell-item';
import TableComponent from '@/components/table';

const latestBlockColumns: Column<LatestBlock>[] = [
  {
    id: "height",
    header: () => <TableHeaderItem className="text-teal">Height</TableHeaderItem>,
    accessor: "height",
    cell: (info: any) => <TableCellItem>{info.row.original.height}</TableCellItem>,
    // maxSize: 60,
  },
  {
    id: "speckVersion",
    header: () => <TableHeaderItem>Speck Version</TableHeaderItem>,
    accessor: "speckVersion",
    cell: (info: any) => <TableCellItem>{info.row.original.speckVersion}</TableCellItem>,
  },
  {
    id: "events",
    header: () => <TableHeaderItem>Events</TableHeaderItem>,
    accessor: "events",
    cell: (info: any) => <TableCellItem>{info.row.original.events}</TableCellItem>,
  },
  {
    id: "hash",
    header: () => <TableHeaderItem>Hash</TableHeaderItem>,
    accessor: "hash",
    cell: (info: any) => <TableCellItem  className="text-secondaryText">{info.row.original.hash}</TableCellItem>,
  },
  {
    id: "extrinsics",
    header: () => <TableHeaderItem>Extrinsics</TableHeaderItem>,
    accessor: "extrinsics",
    cell: (info: any) => <TableCellItem>{info.row.original.extrinsics}</TableCellItem>,
  },
  {
    id: "time",
    header: () => <TableHeaderItem>Time</TableHeaderItem>,
    accessor: "time",
    cell: (info: any) => <TableCellItem>{info.row.original.time}</TableCellItem>,
  },
  {
    id: "viewBlock",
    accessor: "viewBlock",
    cell: (info: any) => (
      <TableCellItem  className="text-secondaryText">
        <Link href={info.row.original.viewBlock} className="text-secondaryText flex items-center text-[16px]">
          View Block <ArrowUpRight width={20} height={20}/>
        </Link>
      </TableCellItem>
    ),
  },
];

const LatestBlocksTable = () => {
  return (
    <div className="flex flex-col relative mb-10">
      <TableComponent<LatestBlock>
        className="relative z-1"
        data={latestBlocksMock.slice(0, 8)}
        title={
          <span className="flex items-center">
            Latest Blocks
            <Link href={"/blocks"} className="text-secondaryText flex items-center ml-10 text-[16px]">
              View Recent Blocks <ArrowUpRight width={20} height={20}/>
            </Link>
          </span>
        }
        columns={latestBlockColumns}
      />
      <div
        className="absolute bottom-0 w-full left-0 z-2 h-[150px]"
        style={{
          background: "linear-gradient(0deg, rgba(23,23,23,1) 0%, rgba(23,23,23,0.5) 80%, rgba(23,23,23,0) 100%)"
        }}
      />
    </div>
  );
};

export default LatestBlocksTable;
