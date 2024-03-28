"use client";
import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from "lucide-react";

import { Column } from '@/lib/table-utils';
import { Validator, validators } from '@/mocks/table';
import TableHeaderItem from '@/components/table/table-header-item';
import TableCellItem from '@/components/table/table-cell-item';
import TableComponent from '@/components/table';

const subnetColumns: Column<Validator>[] = [
  {
    id: "name",
    header: () => <TableHeaderItem>Name</TableHeaderItem>,
    accessor: "name",
    cell: (info: any) => <TableCellItem>{info.row.original.name}</TableCellItem>,
  },
  {
    id: "total",
    header: () => <TableHeaderItem>Total τ</TableHeaderItem>,
    accessor: "total",
    cell: (info: any) => <TableCellItem>{info.row.original.total}τ</TableCellItem>,
  },
  {
    id: "owner",
    header: () => <TableHeaderItem>Owner</TableHeaderItem>,
    accessor: "owner",
    cell: (info: any) => <TableCellItem className="text-secondaryText">{info.row.original.owner}</TableCellItem>,
  },
  {
    id: "network",
    header: () => <TableHeaderItem className="text-teal">Network</TableHeaderItem>,
    accessor: "network",
    cell: (info: any) => <TableCellItem>{info.row.original.network}%</TableCellItem>,
    enableSorting: true,
  }
];

const ValidatorsTable = () => {
  return (
    <div className="flex flex-col">
      <TableComponent<Validator>
        data={validators.slice(0, 5)}
        title="Validators"
        columns={subnetColumns}
      />
      <Link href={"/validators"} className="text-secondaryText flex items-center mt-4 text-[16px]">
        View All Validators <ArrowUpRight width={20} height={20}/>
      </Link>
    </div>
  );
};

export default ValidatorsTable;
