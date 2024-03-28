"use client";
import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from "lucide-react";

import { Column } from '@/lib/table-utils';
import { Subnet, subnets } from '@/mocks/table';
import TableHeaderItem from '@/components/table/table-header-item';
import TableCellItem from '@/components/table/table-cell-item';
import TableComponent from '@/components/table';

const subnetColumns: Column<Subnet>[] = [
  {
    id: "id",
    header: () => <TableHeaderItem>ID</TableHeaderItem>,
    accessor: "id",
    cell: (info: any) => <TableCellItem>{info.row.original.id}</TableCellItem>,
    // maxSize: 60,
  },
  {
    id: "name",
    header: () => <TableHeaderItem>Name</TableHeaderItem>,
    accessor: "name",
    cell: (info: any) => <TableCellItem>{info.row.original.name}</TableCellItem>,
  },
  {
    id: "createdAt",
    header: () => <TableHeaderItem>Created At</TableHeaderItem>,
    accessor: "createdAt",
    cell: (info: any) => <TableCellItem>{info.row.original.createdAt}</TableCellItem>,
  },
  {
    id: "owner",
    header: () => <TableHeaderItem>Owner</TableHeaderItem>,
    accessor: "owner",
    cell: (info: any) => <TableCellItem  className="text-secondaryText">{info.row.original.owner}</TableCellItem>,
  },
  {
    id: "emission",
    header: () => <TableHeaderItem className="text-teal">Emission</TableHeaderItem>,
    accessor: "emission",
    cell: (info: any) => <TableCellItem>{info.row.original.emission}%</TableCellItem>,
    enableSorting: true,
  }
];

const SubnetTable = () => {
  return (
    <div className="flex flex-col">
      <TableComponent<Subnet>
        data={subnets.slice(0, 5)}
        title="Subnets"
        columns={subnetColumns}
      />
      <Link href={"/subnets"} className="text-secondaryText flex items-center mt-4 text-[16px]">
        View All Subnets <ArrowUpRight width={20} height={20}/>
      </Link>
    </div>
  );
};

export default SubnetTable;
