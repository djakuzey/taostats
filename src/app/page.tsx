import React from 'react';
import Image from 'next/image';

import HomeWidget from '@/components/home-components/home-widget';
import { BoxArrowUp } from '@/icons';
import ChartTradingView from '@/components/home-components/chart-trading-view';
import { widgets } from '@/mocks/widgets';
import SubnetTable from '@/components/home-components/subnet-table/indext';
import ValidatorsTable from '@/components/home-components/validators-table';
import ActiveAccountsChart from '@/components/home-components/active-accounts-chart';
import StackedChart from '@/components/home-components/stacked-chart';
import LatestBlocksTable from '@/components/home-components/latest-blocks-table';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="flex flex-col w-full bg-foreground mb-16">
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
            <div className="mb-3 text-[64px] text-white">$601.24</div>
            <div className="text-green flex items-center ml-3 mr-8 text-[16px]">
              <BoxArrowUp width={16} height={16} className="mr-3" />
              24.43%
            </div>
          </div>

          <div className="grid grid-cols-5 gap-x-10 gap-y-5 mt-5 mb-14">
            {widgets.map(({ label, value }, index) => (
              <HomeWidget label={label} value={value} key={index} />
            ))}
          </div>
        </div>
        <div className="mb-[-20px]">
          <ChartTradingView />
        </div>
      </div>
      <div className="grid grid-cols-2 mx-11 gap-x-16 gap-y-24">
        <SubnetTable />
        <ValidatorsTable />
        <ActiveAccountsChart />
        <StackedChart />
      </div>
      <div className="mx-11 mt-20 pb-10">
        <LatestBlocksTable />
      </div>
    </main>
  );
}
