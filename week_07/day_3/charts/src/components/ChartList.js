import React from 'react';
import ChartItem from './ChartItem';

const ChartList = ({charts}) => {

  const chartItems = charts.map((chart, index) => {
    return <ChartItem chart={chart} index={index} key={index}/>
    });

    return (
      <div>
      <ul>
        {chartItems}
      </ul>
    </div>
    )
};

export default ChartList;