// import React from "react";
import ShoesSilder from "../../Assets/Images/shoesSilder.png";

// function FirstPage() {
//   return (
//     <section className="mt-5 mb-5 bg-[#FFE2B5] rounded-3xl test   m-auto  ">
//       <div className="flex items-center justify-around ">
//         <div className="space-y-2">
//           <p className="text-5xl font-medium">Are you ready to</p>
//           <h1 className="text-6xl font-extrabold">lead the way</h1>
//           <p className="text-xl font-normal text-[#262C26]">
//             Luxury meets ultimate sitting comfort
//           </p>
//           <div className="bg-black flex w-fit rounded-full px-3 py-2 items-center  ">
//             <h1 className="text-[#72683F] text-lg ">Discover</h1>

//             <svg
//               className="ml-2"
//               xmlns="http://www.w3.org/2000/svg"
//               width="18"
//               height="14"
//             >
//               <path
//                 fill="none"
//                 fill-rule="evenodd"
//                 stroke="#72683F"
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//                 stroke-width="2"
//                 d="M1 7h16M11 1l6 6-6 6"
//               />
//             </svg>
//           </div>
//         </div>
//         <div className="">
//           <img src={ShoesSilder} alt="" />
//         </div>
//       </div>
//     </section>
//   );
// }

// export default FirstPage;

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper "
      >
        <SwiperSlide className="">
          <section className="mt-5 mb-5 bg-[#FFE2B5] rounded-3xl test basis-4/5  m-auto  ">
            <div className="flex items-center justify-around ">
              <div className="lg:space-y-2">
                <p className="lg:text-5xl text-3xl font-normal lg:font-medium">
                  Are you ready to
                </p>
                <h1 className="lg:text-6xl text-3xl font-semibold   lg:font-extrabold">
                  lead the way
                </h1>
                <p className="text-xl font-normal text-[#262C26]">
                  Luxury meets ultimate sitting comfort
                </p>
                <div className="bg-black flex w-fit rounded-full lg:px-3 px-1 py-1 lg:py-2 items-center  ">
                  <h1 className="text-[#72683F] text-lg ">Discover</h1>

                  <svg
                    className="ml-2"
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="14"
                  >
                    <path
                      fill="none"
                      fill-rule="evenodd"
                      stroke="#72683F"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 7h16M11 1l6 6-6 6"
                    />
                  </svg>
                </div>
              </div>
              <div className="">
                <img src={ShoesSilder} alt="" />
              </div>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide className="">
          <section className="mt-5 mb-5 bg-[#FFE2B5] rounded-3xl test basis-4/5  m-auto  ">
            <div className="flex items-center justify-around ">
              <div className="space-y-2">
                <p className="text-5xl font-medium">Are you ready to</p>
                <h1 className="text-6xl font-extrabold">lead the way</h1>
                <p className="text-xl font-normal text-[#262C26]">
                  Luxury meets ultimate sitting comfort
                </p>
                <div className="bg-black flex w-fit rounded-full px-3 py-2 items-center  ">
                  <h1 className="text-[#72683F] text-lg ">Discover</h1>

                  <svg
                    className="ml-2"
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="14"
                  >
                    <path
                      fill="none"
                      fill-rule="evenodd"
                      stroke="#72683F"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 7h16M11 1l6 6-6 6"
                    />
                  </svg>
                </div>
              </div>
              <div className="">
                <img src={ShoesSilder} alt="" />
              </div>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className="mt-5 mb-5 bg-[#FFE2B5] rounded-3xl test basis-4/5  m-auto  ">
            <div className="flex items-center justify-around ">
              <div className="space-y-2">
                <p className="text-5xl font-medium">Are you ready to</p>
                <h1 className="text-6xl font-extrabold">lead the way</h1>
                <p className="text-xl font-normal text-[#262C26]">
                  Luxury meets ultimate sitting comfort
                </p>
                <div className="bg-black flex w-fit rounded-full px-3 py-2 items-center  ">
                  <h1 className="text-[#72683F] text-lg ">Discover</h1>

                  <svg
                    className="ml-2"
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="14"
                  >
                    <path
                      fill="none"
                      fill-rule="evenodd"
                      stroke="#72683F"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 7h16M11 1l6 6-6 6"
                    />
                  </svg>
                </div>
              </div>
              <div className="">
                <img src={ShoesSilder} alt="" />
              </div>
            </div>
          </section>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
