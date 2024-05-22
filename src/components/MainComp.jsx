import React, { useContext, useEffect } from 'react'
import { UserContext } from '../context/ContextProvider';
import BarData from "../components/BarData"
import Header from './Header';
import {Link, Navigate} from "react-router-dom"
import PieData from './PieData';
import ImpactBarData from './ImpactBarData';
export default function MainComp() {
    const { setShow, show, Impact } = useContext(UserContext);
useEffect(()=>{
  setShow(true)
},[])
  return (
    <>
    <Header/>
    <div className="block relative p-1 ml-[12%] mt-[4%]  w-full h-full">
        <div className='grid grid-flow-row gap-8 p-6 mr-[40%] h-full w-full bg-indigo-400 rounded-xl overflow-y-scroll no-scrollbar '>
            <card className=' border flex  pt-6 justify-center bg-white border-zinc-500 rounded-xl'>
            {show ? <BarData   /> : null}
            </card>
            <card className='border-  flex justify-center bg-white border-zinc-500 rounded-xl' >
            {show ? <PieData   /> :  null}
            </card>
        </div>
        
      </div>
    </>
    
  )
}