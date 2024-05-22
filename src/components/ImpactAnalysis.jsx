import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import {Chart as ChartJS} from "chart.js/auto"
import {Bar, Doughnut, Line, Pie} from "react-chartjs-2"
import { UserContext } from '../context/ContextProvider'
import SidebarComp from './SidebarComp';
import MainComp from './MainComp';
import ImpactBarData from './ImpactBarData';
import MainImpactComp from './MainImpactComp';

export default function ImpackAnalysis() {

  return (
    <div className="flex bg-indigo-400 h-screen fixed w-screen mr-[60%] pb-[5%] pr-[3%]">
    <SidebarComp/>
    <MainImpactComp/>
   </div>  

     
)
}
