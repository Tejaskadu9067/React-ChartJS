import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import {Chart as ChartJS} from "chart.js/auto"
import {Bar, Bubble, Doughnut, Line, Pie} from "react-chartjs-2"
import { UserContext } from '../context/ContextProvider';
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js/auto';


Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);



export default function ImpactBarData() {

    let {
        sector,
        setSector,
        region,
        setRegion,
        impact,
        setImpact,
     } = useContext(UserContext)



    useEffect(()=>{
        const handleGetdada = async() =>{
          let {data} = await axios.get('http://localhost:3000/energy-data')
          const newSector = data.map((data)=> data.sector)
          const newImpact = data.map((data)=> data.impact)
          const newRegion = data.map((data)=> data.region)
  

          setSector(newSector)
          setImpact(newImpact)
          setRegion(newRegion)
         }
         handleGetdada();
  
      },[])






      let ImpactRegionArray = [];

for (let i = 0; i < 1000; i++) {
    const combined = {
        Impact: impact[i],
        Region: region[i],
        Sector: sector[i]
    };

    ImpactRegionArray.push(combined);
}

      

    
    const newArray = ImpactRegionArray

    const newData = newArray.filter(data => data.Impact !== '' && data.Region !== '' && data.Sector !== '');






  const regions = [...new Set(newData.map(item => item.Region))];
  const sectors = [...new Set(newData.map(item => item.Sector))];
  
  
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const dataset = sectors.map(sector => {
    const sectorData = regions.map(region => {
      const items = newData.filter(item => item.Sector === sector && item.Region === region);
      const totalImpact = items.reduce((sum, item) => sum + parseInt(item.Impact), 0);
      return totalImpact;
    });

    return {
      label: sector,
      data: sectorData,
      backgroundColor: getRandomColor(), // Function to generate random color
    };
  });

  const chartData = {
    labels: regions,
    datasets: dataset,
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Impact Levels by Region and Sector',
      },
    },
  };




  
  return (
      <>
         <Bar data={chartData} options={options} />
      </>
       

     
)


}
