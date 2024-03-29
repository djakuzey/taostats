"use client";
import React from 'react';
import AreaChart from '@/components/charts/area-chart';
import { usersCount, UserCount } from '@/mocks/mocked-data';
import { formatAriaChartData } from '@/components/charts/chart-utils';
import { cn } from '@/lib/utils';
import { useResizeDetector } from 'react-resize-detector';
import { parse, format } from "date-fns";
import { chartColors } from '@/constants/chart-colors';

const yKeys: (keyof UserCount)[] = ["activeUsers"];
const xKey: keyof UserCount = "date";

interface ChartTradingViewProps {
  className?: string;
}

const StackedChart = ({
  className,
}: ChartTradingViewProps) => {
  const formattedChartData = formatAriaChartData<UserCount>(usersCount, yKeys, xKey);
  const { width, ref } = useResizeDetector();

  return (
    <div className={cn("w-full", className)} ref={ref}>
      <div className="text-[20px] font-medium text-white">
        Staked Issuance
      </div>
      <div className="relative">
        <div className="flex flex-col absolute">
          <div className="text-[36px] text-white mb-3">
            6,246,404τ
          </div>
          <div className="text-[16px] text-secondaryText">
            {format(parse(usersCount[usersCount.length - 1].date, "dd-MM-yyyy", new Date()), "dd/MM/yyyy")}
          </div>
        </div>
        <AreaChart<UserCount>
          width={width}
          height={500}
          data={formattedChartData}
          xKey={xKey}
          yOptions={yKeys.map((key, index) => ({
            key,
            color: chartColors.white,
          }))}
        />
      </div>
    </div>
  );
};

export default StackedChart;
