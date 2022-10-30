import React from "react";
import "../index.css";
import { Outlet, Link } from "react-router-dom";
function Navbar() {
  return (
    <section className="flex justify-around  mt-10 font-Tajawal itemCard   items-center    ">
      <div className="leftSection flex space-x-4 ">
        <div className="menu bg-gray w-fit p-2 flex  items-center space-x-1   rounded-full ">
          <svg
            className="w-6 h-6"
            fill="#797E87"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 7a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 13a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <h1 className="text-lg">Menu</h1>
        </div>
        <div className="search bg-gray w-36 px-3 justify-start  p-2 flex items-center  rounded-full ">
          <svg
            className="w-5 h-5 mr-1 "
            xmlns="http://www.w3.org/2000/svg"
            data-name="Layer 1"
            viewBox="0 0 64 64"
          >
            <line
              x1="1.49"
              x2="27.81"
              y1="62.45"
              y2="36.13"
              fill="#797E87"
              stroke="#797E87"
              stroke-miterlimit="10"
              stroke-width="4"
            />
            <circle
              cx="42.22"
              cy="21.85"
              r="20.3"
              fill="none"
              stroke="#797E87"
              stroke-miterlimit="10"
              stroke-width="4"
            />
          </svg>
          <h1 className="text-lg">Search</h1>
        </div>
      </div>
      <div className="midSection  ">
        <h1 className="text-2xl">Nike store</h1>
      </div>

      <div className="flex lg:block md:block hidden ">
        <div className="rightSection flex space-x-6  content-center ">
          <div className="icons flex space-x-8 mr-5 items-center  ">
            <Link to="/login">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path d="M15.71,12.71a6,6,0,1,0-7.42,0,10,10,0,0,0-6.22,8.18,1,1,0,0,0,2,.22,8,8,0,0,1,15.9,0,1,1,0,0,0,1,.89h.11a1,1,0,0,0,.88-1.1A10,10,0,0,0,15.71,12.71ZM12,12a4,4,0,1,1,4-4A4,4,0,0,1,12,12Z" />
              </svg>
            </Link>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
              <path fill="none" d="M0 0h24v24H0V0z" />
              <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
              <g
                fill="none"
                fill-rule="evenodd"
                stroke="#000"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                transform="translate(1 1)"
              >
                <circle cx="7" cy="20" r="2" />
                <circle cx="19" cy="20" r="2" />
                <path d="M4.67 5H22l-1.68 8.39a2 2 0 0 1-2 1.61H7.75a2 2 0 0 1-2-1.74L4.23 1.74A2 2 0 0 0 2.25 0H0" />
              </g>
            </svg>
          </div>

          <div className="TranstionSection flex space-x-4 ">
            <div className="bg-gray w-fit p-2 flex items-center rounded-full ">
              <svg
                class="w-6 h-6"
                fill="#797E87"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <h1>ENG</h1>
            </div>
            <div className="bg-gray w-fit p-2 flex  items-center rounded-full ">
              <svg
                class="w-6 h-6"
                fill="#797E87"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <h1>USD</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Navbar;
