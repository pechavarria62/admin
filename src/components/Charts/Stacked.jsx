import React from 'react';
// import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, StackingColumnSeries, Tooltip } from '@syncfusion/ej2-react-charts';
import { stackedCustomSeries, stackedPrimaryXAxis, stackedPrimaryYAxis } from '../../data/dummy'
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';


const Stacked = ({ width, height }) => {
    const data = [
  { name: 'Jan', uv: 400 },
  { name: 'Feb', uv: 300 },
  { name: 'Mar', uv: 500 },
];
    return (
        <LineChart width={400} height={300} data={data}>
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    </LineChart>
        // <ChartComponent
        //     width={width}
        //     height={height}
        //     id='charts'
        //     primaryXAxis={stackedPrimaryXAxis}
        //     primaryYAxis={stackedPrimaryYAxis}
        //     chartArea={{border: {width: 0}}}
        //     tooltip={{enable:true}}
        //     legendSettings={{background: 'white'}}
        // >
        //     <Inject services={[Legend, Category, StackingColumnSeries, Tooltip]}/>
        //     <SeriesCollectionDirective>
        //         {stackedCustomSeries.map((item , index) => <SeriesDirective key={index} {...item}/>)}
        //     </SeriesCollectionDirective>
        // </ChartComponent>
    )
}

export default Stacked
