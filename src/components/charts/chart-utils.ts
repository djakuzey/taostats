export function formatAriaChartData<DataType>(
  data: DataType[],
  yKeys: (keyof DataType)[],
  xKey: keyof Partial<DataType>,
) {
  // const formattedData: AreaChartData<DataType>[] = [];
  const formattedData: any = [];

  data.forEach((item) => {
    const yValues: any = {};
    yKeys.forEach((key) => {
      yValues[key] = item[key];
    });

    formattedData.push({
      [xKey]: item[xKey],
      ...yValues,
    });
  });

  return formattedData;
}
