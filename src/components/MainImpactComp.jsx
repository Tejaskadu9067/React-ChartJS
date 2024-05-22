import React, { useContext, useEffect } from 'react'
import { UserContext } from '../context/ContextProvider';
import BarData from "../components/BarData"
import Header from './Header';
import {Link, Navigate} from "react-router-dom"
import PieData from './PieData';
import ImpactBarData from './ImpactBarData';
import ImpactBarData2 from './ImpactBarData2';
export default function MainImpactComp() {
    const {setGraphImpact, show, Impact } = useContext(UserContext);
    useEffect(()=>{
        setGraphImpact(true)
    },[])

  return (
    <>
    <Header/>
    <div className="block relative p-1 ml-[12%] mt-[4%]  w-full h-full">

        <div className='grid grid-flow-row gap-8 p-6 mr-[60%] h-full w-full bg-indigo-400 rounded-xl overflow-y-scroll no-scrollbar '>
            <div  className=' border flex justify-center pt-6 pr-4 bg-white border-zinc-500 rounded-xl'>
            {Impact ? <ImpactBarData/> : null}
            </div>
            <div className='border-  flex justify-center bg-white border-zinc-500 rounded-xl' >
            {Impact ? <ImpactBarData2/> :  null}
            </div>
        </div>
        
      </div>
      </>
  )
}