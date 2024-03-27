"use client";
import AreaChart from '@/components/charts/area-chart';
import { mockedData, MockedData } from '@/mocks/mocked-data';
import React, { useMemo, useState } from 'react';
import { formatAriaChartData } from '@/components/charts/chart-utils';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Plus, Minus } from "lucide-react";

const yKeys: (keyof MockedData)[] = ["stake", "trust"];
const xKey: keyof MockedData = "uid";

interface ChartTradingViewProps {
  className?: string;
}

const ChartTradingView = ({
  className,
}: ChartTradingViewProps) => {
  const [itemsRage, setItemsRange] = useState(180);

  const handleIncreaseRange = () => {
    if (itemsRage >= mockedData.length) {
      return;
    }

    setItemsRange((prev) => prev + 30);
  };

  const handleDecreaseRange = () => {
    if (itemsRage <= 30) {
      return;
    }
    setItemsRange((prev) => Math.max(30, prev - 30));
  };

  const formattedChartData = useMemo(() =>
    formatAriaChartData<MockedData>(mockedData.slice(0, itemsRage), yKeys, xKey),
  [itemsRage]
  );

  return (
    <div className={cn(className, "relative")}>
      <AreaChart<MockedData>
        autoWidth
        height={500}
        data={formattedChartData}
        xKey={xKey}
        yOptions={yKeys.map((key, index) => ({
          key,
          useGradient: index === 0
        }))}
      />
      <div className="flex justify-end items-center absolute bottom-10 w-full">
        <Button className="mr-2">
          Trading View
        </Button>
        <Button className="mr-0.5" onClick={handleIncreaseRange}>
          <Plus/>
        </Button>
        <Button className="mr-11" onClick={handleDecreaseRange}>
          <Minus/>
        </Button>
      </div>

    </div>
  );
};

export default ChartTradingView;
