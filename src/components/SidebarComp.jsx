import React, { useState } from "react";
import Sidebar from "./Sidebar"; // Ensure this path is correct
import { Link } from "react-router-dom";
export default function SidebarComp() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="bg-indigo-200 inline-flex flex-col absolute left-0  h-full border-r  md:content-none border-r-zinc-600 z-40 mr-8 p-2">
      <Link to={'/home'} className="flex gap-4 mt-1 mb-4 ml-1 rounded-xl bg-indigo-400 hover:bg-indigo-500 p-2 ">
            <div className="pt-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
            </div>
            <div className="">
              <h2 className="text-2xl text-zinc-800 font-bold">Home</h2>
            </div>
          </Link>
      <div
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="flex w-full relative items-center cursor-pointer gap-2 hover:bg-indigo-500 justify-start p-2 border-b bg-indigo-400 rounded-xl"
      >
        <div className="px-1 mb-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="md:w-6 md:h-6 sm:w-3 sm:h-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
        <div className="flex gap-3">
          <div className="pt-[2px] pl-1 ">
            <p className="text-xl font-semibold">Dashboard</p>
          </div>
          <div className="px-1 py-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 hover:bg-indigo-500  rounded-full"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
        </div>
      </div>
      {isSidebarOpen ? (
        <div>
          <Sidebar />
          <div className="flex">
            <h2 className="text-zinc-600">Apps & Pages</h2>
          </div>
          
        </div>
      ) : null}
    </div>
  );
}
