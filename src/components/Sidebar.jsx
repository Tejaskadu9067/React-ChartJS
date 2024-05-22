import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../context/ContextProvider'
import { Link } from 'react-router-dom'

export default function Sidebar() {
  const [isSelected, setIsSelected] = useState(false);
  const [isSelectedImpact, setIsSelectedImpact] = useState(false);
  
  const {setShow, setGraphImpact} = useContext(UserContext)
 const handleClick = () => {
    setShow(true)
    setIsSelected(true);
    setIsSelectedImpact(false); // Ensure only one item is selected
  }

  const handleImpactClick = () => {
    setIsSelectedImpact(true);
    setGraphImpact(true)
    setIsSelected(false); // Ensure only one item is selected
  }

  return (
    
          <div className="">
            <Link to={'/sector'} onClick={handleClick} className={`text-md cursor-pointer text-black flex my-3 mx-2 text-start items-center gap-5 justify-start p-1 rounded-xl 
        ${isSelected ? 'bg-indigo-400' : 'hover:bg-zinc-200'}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <span>Sector</span> 
            </Link>
            <Link to={'/impact'} onClick={handleImpactClick} className={`text-md cursor-pointer text-black flex my-3 mx-2 text-start items-center gap-5 justify-start p-1 rounded-xl 
        ${isSelectedImpact ? 'bg-indigo-400' : 'hover:bg-zinc-200'}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <span>Impact</span> 
            </Link>
            <div className="text-md cursor-pointer text-black flex my-3 mx-2 text-start items-center gap-5 hover:bg-zinc-200 justify-start p-1 rounded-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <span>Geographic</span> 
            </div>
            <div className="text-md cursor-pointer text-black flex my-3 mx-2 text-start items-center gap-5 hover:bg-zinc-200 justify-start p-1 rounded-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <span>Trend</span> 
            </div>
            <div className="text-md cursor-pointer text-black flex my-3 mx-2 text-start items-center gap-5 hover:bg-zinc-200 justify-start p-1 rounded-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <span>Additional</span> 
            </div>
          </div>
       
  )
}
