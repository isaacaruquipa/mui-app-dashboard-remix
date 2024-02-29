import * as React from 'react';
import { BarPlot } from '@mui/x-charts/BarChart';
import { LinePlot } from '@mui/x-charts/LineChart';
import { ChartContainer } from '@mui/x-charts/ChartContainer';

import { ChartsXAxis } from '@mui/x-charts/ChartsXAxis';
import { ChartsYAxis } from '@mui/x-charts/ChartsYAxis';

const series = [
  {
    type: 'bar',
    stack: '',
    yAxisKey: 'eco',
    data: [2, 5, 3, 4, 1],
  },
  {
    type: 'bar',
    stack: '',
    yAxisKey: 'eco',
    data: [5, 6, 2, 8, 9],
  },
  {
    type: 'line',
    yAxisKey: 'pib',
    color: 'red',
    data: [1000, 1500, 3000, 5000, 10000],
  },
];

export  const CombinandoBarChart=()=>{
  return (
    <ChartContainer
      series={series}
      width={500}
      height={400}
      xAxis={[
        {
          id: 'years',
          data: [2010, 2011, 2012, 2013, 2014],
          scaleType: 'band',
          valueFormatter: (value) => value.toString(),
        },
      ]}
      yAxis={[
        {
          id: 'eco',
          scaleType: 'linear',
        },
        {
          id: 'pib',
          scaleType: 'log',
        },
      ]}
    >
      <BarPlot />
      <LinePlot />
      <ChartsXAxis label="Years" position="bottom" axisId="years" />
      <ChartsYAxis label="Results" position="left" axisId="eco" />
      <ChartsYAxis label="PIB" position="right" axisId="pib" />
    </ChartContainer>
  );
}




import { LineChart } from '@mui/x-charts/LineChart';

export const AreaBasica=()=> {
  return (
    <LineChart
      xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
      series={[
        {
          data: [2, 5.5, 2, 8.5, 1.5, 5],
          area: true,
        },
      ]}
      width={500}
      height={300}
    />
  );
}



import { PieChart } from '@mui/x-charts/PieChart';

const data1 = [
  { label: 'Group A', value: 400 },
  { label: 'Group B', value: 300 },
  { label: 'Group C', value: 300 },
  { label: 'Group D', value: 200 },
];

const data2 = [
  { label: 'A1', value: 100 },
  { label: 'A2', value: 300 },
  { label: 'B1', value: 100 },
  { label: 'B2', value: 80 },
  { label: 'B3', value: 40 },
  { label: 'B4', value: 30 },
  { label: 'B5', value: 50 },
  { label: 'C1', value: 100 },
  { label: 'C2', value: 200 },
  { label: 'D1', value: 150 },
  { label: 'D2', value: 50 },
];

export const TwoLevelPieChart=()=>{
  return (
    <PieChart
      series={[
        {
          innerRadius: 0,
          outerRadius: 80,
          data: data1,
        },
        {
          innerRadius: 100,
          outerRadius: 120,
          data: data2,
        },
      ]}
      width={400}
      height={300}
      slotProps={{
        legend: { hidden: true },
      }}
    />
  );
}