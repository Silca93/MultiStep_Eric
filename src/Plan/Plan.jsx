import React from 'react'

export default function Plan({arcade, advanced, pro, clickNext2}) {
  return (
    <div className="w-full h-[25rem] flex flex-col gap-5 rounded-t-xl">
        <div className="title w-full h-[7rem] flex  flex-col justify-center items-start pl-[4rem]">
            <h1 className="Title text-[2rem] text-[#04264f]">Select your Plan</h1>
            <p className="text-gray-400 ">You have the option of monthly or yearly billing.</p>
        </div>
        <div className="TEST field w-full h-[10rem] flex justify-start items-start pl-[4rem]  gap-3">
            <div className="name flex flex-col gap-2">
                
                <div className="BINGO w-[9rem] h-[9rem] flex flex-col items-start justify-between pl-5 pt-4 border-solid border-gray-400 border-[1px] rounded-2xl active:bg-gray-300 hover:border-purple-600 hover:outline-[3px]" type="text">
                    <img src={arcade} alt=""  />
                    <h1 className="text-[#04264f] pb-2">Arcade<br></br>$9/mo</h1 >
                </div>    
            
            </div>
            <div className="email flex flex-col gap-2">
                <div className="BINGO w-[9rem] h-[9rem] flex flex-col items-start justify-between pl-5 pt-4 border-solid border-gray-400 border-[1px] rounded-2xl active:bg-gray-300 hover:border-purple-600 hover:outline-[3px]" type="text">
                    <img src={advanced} alt=""  />
                    <h1 className="text-[#04264f] pb-2">Advanced<br></br>$12/mo</h1>
                </div>  
                
            </div>
            <div className="phone flex flex-col gap-2">
                <div className="BINGO w-[9rem] h-[9rem] flex flex-col items-start justify-between pl-5 pt-4 border-solid border-gray-400 border-[1px] rounded-2xl active:bg-gray-300 hover:border-purple-600 hover:outline-[3px]" type="text">
                    <img src={pro} alt=""  />
                    <h1 className="text-[#04264f] pb-2">Pro<br></br>$15/mo</h1>
                    
                </div>  
            <div className=""></div>    
            </div>

        </div>
        <div className="w-full h-[5rem]  flex justify-center items-center">
            <div className="w-5/6 h-4/6 ml-5 bg-[#ecf3fd] flex justify-between items-center px-[4rem]">
                <p>Monthly</p>
                <input  type="checkbox" className="toggle bg-black " unchecked />
                <p className="text-gray-400">Yearly</p>
            </div>
            <button onClick={() => clickNext2()} className="nextButton bg-[#04264f] w-[6rem] h-[3rem] rounded-xl absolute bottom-1 right-12 text-white">Next Step</button>
        </div>
    </div>
  )
}
