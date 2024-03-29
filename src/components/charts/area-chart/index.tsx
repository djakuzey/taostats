"use client";
import React, { useMemo, useCallback } from "react";
import { AreaClosed } from "@visx/shape";
import { AxisBottom } from '@visx/axis';
import { curveMonotoneX } from "@visx/curve";
import { scaleTime, scaleLinear } from "@visx/scale";
import { LinearGradient } from "@visx/gradient";
import { max, extent, reverse } from "@visx/vendor/d3-array";
import { useScreenSize } from "@visx/responsive";
import { parse } from "date-fns";

export interface YOption<T> {
  key: keyof T;
  color: string;
}

interface ChartOptions {
  showXAxis?: boolean;
}

export interface AreaProps<T>  {
  width?: number;
  autoWidth?: boolean;
  height: number;
  margin?: { top: number; right: number; bottom: number; left: number };
  data: T[];
  xKey: keyof T;
  yOptions: YOption<T>[];
  options?: ChartOptions;
}

function AreaChart<T>({
  width,
  height,
  autoWidth = false,
  margin = { top: 0, right: 0, bottom: 0, left: 0 },
  data,
  xKey,
  yOptions,
  options,
}: AreaProps<T>) {
  const { width: fullWidth, height: fullHeight } = useScreenSize({ debounceTime: 150 });

  const chartWidth = autoWidth || !width ? fullWidth : width;

  // bounds
  const innerWidth = chartWidth - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  const xValues: any[] = useMemo(() => data.map(d => d[xKey]), [data, xKey]);
  const getYValues = useCallback((key: keyof T) => data.map((item: T) => item[key]), [data]);
  const getDate = (d: any) => parse(d?.date, "dd-MM-yyyy", new Date());

  const xScale = xKey !== "date" ? scaleLinear({
    domain: [max(xValues) || 0, 0],
    nice: true,
    range: [innerWidth, 0],
  }) : scaleTime({
    range: [innerWidth, 0],
    domain: reverse(extent(data, getDate)) as [Date, Date],
  });

  const renderYData = useCallback(() => {
    return (
      yOptions.map(({ key, color }, index) => {
        console.log("color", color);
        const yScale = scaleLinear({
          domain: [0, max(getYValues(key) as number[]) || 0],
          nice: true,
          range: [innerHeight, 0],
        });

        const gradientId = `area-gradient-${index}-${color}`;

        return (
          <React.Fragment key={index}>
            <LinearGradient
              id={gradientId}
              from={color + "DE"}
              to={color + "DE"}
              toOpacity={0.2}
            />
            <AreaClosed<T>
              data={data}
              x={(d) => xKey !== "date" ? xScale(d[xKey] as number) ?? 0 : xScale(getDate(d)) ?? 0}
              y={(d) => yScale(d[key] as number) ?? 0}
              yScale={yScale}
              strokeWidth={1}
              stroke={color}
              fill={`url(#${gradientId})`}
              curve={curveMonotoneX}
            />
          </React.Fragment>
        );
      })
    );
  }, [yOptions, getYValues, innerHeight, data, xScale, xKey]);

  return (
    <svg width={chartWidth} height={height + 20}>
      <AxisBottom
        scale={xScale}
        top={height}
        numTicks={5}
        tickLength={6}
        tickStroke="transparent"
        // stroke={"#fff"}
        tickLabelProps={() => ({
          fill: "#303030",
          fontSize: 13,
          textAnchor: "middle",
          fontWeight: 500,
        })}
      />
      {renderYData()}
    </svg>
  );
}

export default AreaChart;
