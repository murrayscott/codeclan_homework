import React from 'react';

const ChartItem = ({chart, index}) => {
  return (
    <div>
      <p><img src={chart['im:image'][2].label} alt=""/></p>
      <p>#{index+1}. {chart.title.label}</p>
      <audio controls src={chart.link[1].attributes.href} type="audio/m4a">
      </audio>
      <hr></hr>
    </div>
  )
}

export default ChartItem;