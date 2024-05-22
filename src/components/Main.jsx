import React, { useContext } from "react";
import BarData from "../components/BarData";
import Sidebar from "./Sidebar";
import { UserContext } from "../context/ContextProvider";
import SidebarComp from "./SidebarComp";
import MainComp from "./MainComp";
import Header from "./Header";

export default function Main() {
  const { show } = useContext(UserContext);

  return (
    <>
    
    <div className="flex bg-indigo-400 h-screen fixed w-screen pb-[5%] pr-[3%]">
      <SidebarComp/>
      <Header/>
      <div className="ml-[16%] mt-[20%] inline-flex flex-col">
        <h1 className="text-8xl text-zinc-800 font-semibold text-center mb-4">Welcome to Data Analytics</h1>
        <h2 className="font-semibold text-zinc-700 text-center mr-12">The data provides projections from the 2017 Annual Energy Outlook by the U.S. Energy Information Administration, highlighting anticipated trends in U.S. natural gas consumption, crude oil production recovery, and petroleum consumption levels.</h2>
      </div>
    </div>
    </>
  );
}
