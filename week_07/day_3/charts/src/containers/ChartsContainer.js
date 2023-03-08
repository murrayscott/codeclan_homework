import React, { useState, useEffect } from 'react';
import ChartList from '../components/ChartList';

const ChartContainer = () => {
    const [charts, setCharts] = useState([]);

    useEffect(() => {
      getCharts();
    }, [])

    const getCharts = function(){
        fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
        .then(res => res.json())
        .then(charts => setCharts(charts.feed.entry))
    }

    return (
        <div>
            <ChartList charts={charts}/>
        </div>
    )
}

export default ChartContainer;