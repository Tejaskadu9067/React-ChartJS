import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import {Chart as ChartJS} from "chart.js/auto"
import {Bar, Doughnut, Line, Pie} from "react-chartjs-2"
import { UserContext } from '../context/ContextProvider';

export default function BarData() {

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


        setIntensity(newIntensity)
        setLikelihood(newLikelihood)
        setPestle(newPestle)

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
   
    // console.log("Sectors",TheLength.map((data) => data))



      // const data = {
      //   labels: SectorArr.map((data) => data),
      //   datasets: [
      //     {
      //       label: newdata.map((data) => data),
      //       data: lengths,
      //       backgroundColor: [
      //         'rgba(255, 99, 132, 0.2)',
      //         'rgba(54, 162, 235, 0.2)',
      //         'rgba(255, 206, 86, 0.2)',
      //       ],
      //       borderColor: [
      //         'rgba(255, 99, 132, 1)',
      //         'rgba(54, 162, 235, 1)',
      //         'rgba(255, 206, 86, 1)',
      //       ],
      //       borderWidth: 1,
      //     },
      //   ],
      // };
      
















let valueArr = []
for(let i=0; i<SectorArr.length; i++){
    
    let newarr = userdata
  .filter(data => data.sector === SectorArr[i].toString())
  .map(data => ({ sector: data.sector, intensity: data.intensity, relevance: data.relevance }));
  let sumarray = newarr.map((data) => data.intensity)
  let sumarrayRel = newarr.map((data) => data.relevance)
  let sum = sumarray.reduce((acc,currval) => acc+currval, 0)
  let sumRel = sumarrayRel.reduce((acc,currval) => acc+currval, 0)

const sumValue = sum / sumarray.length
const sumValueRel = sumRel / sumarrayRel.length
valueArr.push({[SectorArr[i]]:{"intensitySum": sumValue, "relevanceSum": sumValueRel}})

}

let keys = [];
let intensitySum = [];
let relevanceSum = [];

for (let item of valueArr) {
    let key = Object.keys(item)[0];
    keys.push(key);
    intensitySum.push(item[key].intensitySum);
    relevanceSum.push(item[key].relevanceSum);
}

// console.log(keys);
// console.log(intensitySum);
// console.log(relevanceSum);


  
    const DoughnutData = {
    labels: keys.map((data) => data),
    

    datasets: [
      {
        label: "Intensity",
        data: intensitySum,
        backgroundColor: "rgb(40,199,111)", // Example background color
        borderColor: 'rgba(255, 99, 132, 1)', // Example border color
        borderWidth: 1,
      },
      {
        label: 'Relevance',
        data: relevanceSum.map((data) => data),
        backgroundColor: 'rgb(115,103,240)', // Example background color
        borderColor: 'rgba(54, 162, 235, 1)', // Example border color
        borderWidth: 1,
      },
    ],
  };
 
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Relevance and Intensity of Sectors',
      },
    },
  };
  

  
  return (
      
        <Bar
          data={DoughnutData}

          options={options}
        />
       

     
)
}
