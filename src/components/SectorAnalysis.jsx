import React, { useContext, useEffect, useState } from 'react'
import SidebarComp from './SidebarComp'
import MainComp from './MainComp'




export default function SectorAnalysis() {

  return (
    <div className="flex bg-indigo-400 h-screen fixed w-screen mr-[60%] pb-[5%] pr-[3%]">
        <SidebarComp/>
        <MainComp/>
  </div>
  )
}
