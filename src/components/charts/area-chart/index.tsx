"use client";
import React, { useMemo, useCallback } from "react";
import { AreaClosed } from "@visx/shape";
import { AxisBottom } from '@visx/axis';
import { curveMonotoneX } from "@visx/curve";
import { scaleTime, scaleLinear } from "@visx/scale";
import { LinearGradient } from "@visx/gradient";
import { max, extent, bisector } from "@visx/vendor/d3-array";
import { useScreenSize } from "@visx/responsive";
// import { timeFormat } from '@visx/vendor/d3-time-format';

export const accentColor = '#00DBBCCC';
export const accentColorDark = '#FF8B25';

interface YOption<T> {
  key: keyof T;
  color?: string;
}

interface ChartOptions {
  showXAxis?: boolean;
}

export interface AreaProps<T>  {
  width?: number;
  autoWidth: boolean;
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

  const xScale = scaleLinear({
    domain: extent(xValues) as [number, number],
    nice: true,
    range: [0, innerWidth],
  });

  const renderYData = useCallback(() => {
    return (
      yOptions.map(({ key, color }, index) => {
        const yScale = scaleLinear({
          domain: [0, max(getYValues(key) as number[]) || 0],
          nice: true,
          range: [innerHeight, 0],
        });
        const gradientColor = index === 0 ? accentColorDark : accentColor;

        return (
          <React.Fragment key={index}>
            <LinearGradient
              id={`area-gradient-${index}`}
              from={color || gradientColor}
              to={color || gradientColor}
              toOpacity={0.2}
            />
            <AreaClosed<T>
              data={data}
              x={(d) => xScale(d[xKey] as number) ?? 0}
              y={(d) => yScale(d[key] as number) ?? 0}
              yScale={yScale}
              strokeWidth={1}
              stroke={gradientColor}
              fill={`url(#area-gradient-${index})`}
              curve={curveMonotoneX}
            />
          </React.Fragment>
        );
      })
    );
  }, [yOptions, getYValues, innerHeight, data, xScale, xKey]);

  return (
    <div>
      <svg width={chartWidth} height={height + 20}>
        <rect
          x={0}
          y={0}
          width={chartWidth}
          height={height}
          fill="transparent"
          rx={14}
        />
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
    </div>
  );
}

export default AreaChart;
