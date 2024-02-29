import * as React from 'react';
import { ScatterChart } from '@mui/x-charts/ScatterChart';


export const DispersionDatos=({datos})=>{
    console.log("Datos de dispersion",datos)
  return (
    <ScatterChart
      width={600}
      height={300}
      series={[
        {
          label: 'Series A',
          data: datos.map((v) => ({ x: v.x1, y: v.y1, id: v.id })),
        },
        {
          label: 'Series B',
          data: datos.map((v) => ({ x: v.x1, y: v.y2, id: v.id })),
        },
      ]}
    />
  );
}