import React, { useState } from "react";
import { Link } from "react-router-dom";
export default function Header() {
  const [profile, setProfile] = useState(false);
  return (
    <div className="absolute border-b  border-b-gray-700 pl-12 z-30 rounded bg-indigo-200 right-0  h-[8%] ml-[12%]  w-[90%] flex gap-2">
      <div className="flex p-2 bg-indigo-00 rounded-lg mx-3 my-3 gap-1 mr-[168px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 mt-1"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
          />
        </svg>
        <span className="font-semibold rounded-xl mb-1 text-2xl">
          Data Analytics
        </span>
      </div>
      <div className="flex items-center justify-center gap-2  w-[30%]">
      <input
        placeholder="search..."
        className="ml-6 my-2 outline-none rounded-xl px-4 text-lg"
        type="text"
        name=""
        id=""
      />
      <button className="border rounded-xl bg-indigo-400 py-2 px-4  hover:bg-indigo-300">
        search
      </button>
      </div>

      
      <div className="flex">
        <div
          onClick={() => setProfile(!profile)}
          className=" cursor-pointer  absolute rounded-xl p-2 right-0 mr-4 mb-1 mt-2 bg-indigo-400"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
            />
          </svg>
        </div>
      </div>
      {profile ? (
        <div className="absolute mt-[5%] right-0 mr-8 rounded-lg bg-indigo-300 gap-2 p-6 inline-flex flex-col">
          <Link to={'/register'}>
          <button className="text-xl flex gap-2 bg-white rounded-lg px-3 py-2">
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
                d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z"
              />
            </svg>
            Signup user
          </button>
          </Link>
          <Link to={'/'}>
          <button className="text-xl flex gap-2 bg-white rounded-lg px-5 py-2">
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
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
            Login user
          </button>
          </Link>
          <Link to={'/'}>
          <button className="text-xl flex gap-2 bg-white rounded-lg px-3 py-2">
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
                d="M22 10.5h-6m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM4 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 10.374 21c-2.331 0-4.512-.645-6.374-1.766Z"
              />
            </svg>
            Logout user
          </button>
          </Link>
        </div>
      ) : null}
    </div>
  );
}
