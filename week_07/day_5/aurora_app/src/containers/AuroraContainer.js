import React, { useState, useEffect } from 'react';
// import Cloud from '../components/Cloud';

const AuroraContainer = () => {
    const [clouds, setClouds] = useState([]);
    const [aurora, setAurora] = useState([]);

    useEffect(() => {
      getClouds();
    }, [])


    let _data = {
        "lat": 55.777184,
        "lon": -4.356719,
        "model": "iconeu",
        "parameters": ["lcloud", "mcloud", "hcloud"],
        "levels": ["surface"],
        "key": "shvLDmcVgqdNmiz2EiexzvY8grg5uHns"
    }

    const getClouds = function(){
        fetch('https://api.windy.com/api/point-forecast/v2',{
            method: 'POST',
            body: JSON.stringify(_data),
            headers: {"Content-type": "application/json; charset=UTF-8"}
            })
        .then(res => res.json())
        .then(clouds => setClouds(clouds))
    }

    useEffect(() => {
        getAurora();
      }, [])

    const getAurora = function(){
        fetch('http://aurorawatch-api.lancs.ac.uk/0.2/project/aurorawatchnet/lan1.xml')
        .then(res => new window.DOMParser().parseFromString(res, "text/xml"))
        .then(aurora => setAurora(aurora))
    }

    return (
        <div>
            <h1>Hello World</h1>
        </div>
    )
}

export default AuroraContainer;