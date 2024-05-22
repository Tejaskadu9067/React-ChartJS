import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import {Chart as ChartJS} from "chart.js/auto"
import {Bar, Doughnut, Line, Pie, PolarArea} from "react-chartjs-2"
import { UserContext } from '../context/ContextProvider';

export default function PieData() {

  let {end_year,
    setEnd_year,
    intensity,
    setIntensity,
    sector,
    setSector,
    topic,
    setTopic,
    insight,
    setInsight,
    url,
    setUrl,
    region,
    setRegion,
    impact,
    setImpact,
    added,
    setAdded,
    published,
    setPublished,
    country,
    setCountry,
    relevance,
    setRelevance,
    pestle,
    setPestle,
    source,
    setSource,
    title,
    setTitle,
    likelihood,
    setLikelihood} = useContext(UserContext)
    const [userdata, setUserdata] = useState([])
  
    useEffect(()=>{
      const handleGetdada = async() =>{
        let {data} = await axios.get('http://localhost:3000/energy-data')
        const newIntensity = data.map((data)=> data.intensity)
        const newLikelihood = data.map((data)=> data.likelihood)
        const newPestle = data.map((data)=> data.pestle)
        const newSector = data.map((data)=> data.sector)
        const newRelevance = data.map((data)=> data.relevance)
        setIntensity(newIntensity)
        setLikelihood(newLikelihood)
        setPestle(newPestle)
        setSector(newSector)
        setRelevance(newRelevance)
        setUserdata(data)
       }
       handleGetdada();

    },[])
    const SectorArr = []
    for(let i=0; i<sector.length; i++ ){
      let currentValue = `${sector[i]}`
      if(!SectorArr.includes(currentValue)) SectorArr.push(sector[i])
    }
    // console.log(sector)
    // console.log(SectorArr)


let newdata = []
    for(let i = 0; i<SectorArr.length; i++){
      
       const data = sector.filter(data => data === SectorArr[i].toString()).map(data => (data))
       newdata.push(data)
    }
    let lengthArray = []
    for(let i=0; i<newdata.length; i++){
      const newLength = newdata.map((data) => data.length)
      lengthArray.push(newLength)
    }
      const TheLength  = lengthArray[0]


      const data = {
        labels: SectorArr.map((data) => data),
        datasets: [
          {
            data: TheLength, // Example data values
            backgroundColor: [
              'red',
              'blue',
              'yellow',
              'green',
              'purple',
              'orange',
              'red',
              'blue',
              'yellow',
              'green',
              'purple',
              'orange'

            ],
            hoverBackgroundColor: [
              'rgba(255, 99, 132, 0.8)',
              'rgba(54, 162, 235, 0.8)',
              'rgba(255, 206, 86, 0.8)',
              'rgba(75, 192, 192, 0.8)',
              'rgba(153, 102, 255, 0.8)',
              'rgba(255, 159, 64, 0.8)'
            ],
          }
        ]
      };
      const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Weightage of the Sectors',
          },
        },
      };

  
  return (
      
        <Pie
        data={data} options={options}
        />

     
)
}
