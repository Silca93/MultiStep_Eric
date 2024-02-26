import React from 'react'
import { useState, useEffect, useRef } from 'react'

export default function Plan({arcade, advanced, pro, page, clickNext2, toggleYearly, isChecked, isArcadeClicked, toggleClick1, toggleClick2, toggleClick3, isAdvanceClicked, isProClicked}) {
    
  return (
    <div className="w-full h-[25rem] flex flex-col gap-5 rounded-t-xl">
        <div className="title w-full h-[7rem] flex  flex-col justify-center items-start pl-[4rem]">
            <h1 className="Title text-[2rem] text-[#04264f]">Select your Plan</h1>
            <p className="text-gray-400 ">You have the option of monthly or yearly billing.</p>
        </div>
        <div className="TEST field w-full h-[10rem] flex justify-start items-start pl-[4rem]  gap-3">
            <div className="name flex flex-col gap-2">
                
                <div onClick={() => toggleClick1()}  className="BINGO w-[9rem] h-[9rem] flex flex-col items-start justify-between pl-5 pt-4 border-solid border-gray-400 border-[1px] rounded-2xl hover:ring-1 hover:ring-purple-600  focus:bg-gray-200 focus:ring-purple-600 focus:ring-2 "  tabIndex="0">
                    <img src={arcade} alt=""  />
                    <h1 className="text-[#04264f] pb-2">Arcade<br></br>{isChecked ? "$9/mo" : "$90/yr"}</h1 >
                </div>    
            
            </div>
            <div className="email flex flex-col gap-2">
                <div onClick={() => toggleClick2()} className="BINGO w-[9rem] h-[9rem] flex flex-col items-start justify-between pl-5 pt-4 border-solid border-gray-400 border-[1px] rounded-2xl hover:ring-1 hover:ring-purple-600  focus:bg-gray-200 focus:ring-purple-600 focus:ring-2"  tabIndex="0">
                    <img src={advanced} alt=""  />
                    <h1 className="text-[#04264f] pb-2">Advanced<br></br>{isChecked ? "$12/mo" : "$120/yr"}</h1>
                </div>  
                
            </div>
            <div className="phone flex flex-col gap-2">
                <div onClick={() => toggleClick3()} className="BINGO w-[9rem] h-[9rem] flex flex-col items-start justify-between pl-5 pt-4 border-solid border-gray-400 border-[1px] rounded-2xl hover:ring-1 hover:ring-purple-600 focus:bg-gray-200  focus:ring-purple-600 focus:ring-2"  tabIndex="0">
                    <img src={pro} alt=""  />
                    <h1 className="text-[#04264f] pb-2">Pro<br></br>{isChecked ? "$15/mo" : "$150/yr"}</h1>
                    
                </div>  
            <div className=""></div>    
            </div>

        </div>
        <div className="w-full h-[5rem]  flex justify-center items-center">
            <div className="w-5/6 h-4/6 ml-5 bg-[#ecf3fd] flex justify-between items-center px-[4rem]">
                <p className={!isChecked ? "text-gray-400" : "text-black"}>Monthly</p>
                
                <input onClick={() => toggleYearly()} type="checkbox" className="toggle [--tglbg:rgb(2,41,90)] bg-white hover:bg-white border-white " unchecked="unchecked" />
                <p className={isChecked ? "text-gray-400" : "text-black"}>Yearly</p>
            </div>
            <button onClick={() => clickNext2()} className="nextButton bg-[#04264f] w-[6rem] h-[3rem] rounded-xl absolute bottom-1 right-12 text-white">Next Step</button>
        </div>
    </div>
  )
}
