import React from "react";
import Image from "next/image";

import HomeWidget from "@/components/home-widget";
import { BoxArrowUp } from "@/icons";
import ChartTradingView from "@/components/charts/chart-trading-view";
import TableComponent from "@/components/table";
import { Subnet, subnets } from "@/mocks/table";
import { widgets } from "@/mocks/widgets";

// const a = {
//   id: 1,
//   name: "Time Series Prediction",
//   createdAt: "2021-09-01",
//   owner: "5esfr297ga124124124",
//   emission: 9.24,
// }
// const subnetColumns = [
//   {
//     id: "id",
//     header: string;
//     accessor: keyof TableFormat;
//     cell: (info: any) => React.ReactNode;
//   }
// ];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="flex justify-between w-full max-w-[1600px] mx-auto mt-28 px-6">
        <div className="flex flex-col">
          <div className="flex mb-3">
            <Image
              src="/logo-small.svg"
              alt="small logo"
              width={18}
              height={19}
              priority
              className="mr-4"
            />
            <span className="text-secondaryText text-[20px]">
              Bittensor price (τao)
            </span>
          </div>
          <div className="mb-3 text-[64px] text-white">
            $601.24
          </div>
          <div className="text-green flex items-center ml-3 mr-8 text-[16px]">
            <BoxArrowUp width={16} height={16} className="mr-3"/>
            24.43%
          </div>
        </div>

        <div className="grid grid-cols-5 gap-x-10 gap-y-5 mt-5 mb-14">
          {widgets.map(({label, value}, index) => (
            <HomeWidget label={label} value={value} key={index}/>
          ))}
        </div>
      </div>
      <div>
        <ChartTradingView className=""/>
      </div>
      <div>
        {/*<TableComponent<Subnet>*/}
        {/*  data={subnets}*/}
        {/*  columns={}*/}
        {/*/>*/}
      </div>
    </main>
  );
}
