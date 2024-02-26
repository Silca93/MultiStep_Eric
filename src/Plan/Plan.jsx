import React from 'react'

export default function Plan({arcade, advanced, pro}) {
  return (
    <div className="w-full h-[25rem] flex flex-col gap-5 rounded-t-xl">
        <div className="title w-full h-[7rem] flex  flex-col justify-center items-start pl-[4rem]">
            <h1 className="Title text-[2rem] text-[#04264f]">Select your Plan</h1>
            <p className="text-gray-400 ">You have the option of monthly or yearly billing.</p>
        </div>
        <div className="field w-full h-[30rem] flex justify-start items-start pl-[4rem]  gap-3">
            <div className="name flex flex-col gap-2">
                
                <div className="BINGO w-[9rem] h-[10rem] flex flex-col items-start justify-between pl-5 border-solid border-gray-400 border-[1px] rounded-2xl" type="text">
                    <img src={arcade} alt=""  />
                    <h1 className="text-[#04264f]">Arcade<br></br>$9/mo</h1 >
                </div>    
            
            </div>
            <div className="email flex flex-col gap-2">
            <div className="BINGO w-[9rem] h-[10rem] flex flex-col items-start justify-between pl-5 border-solid border-gray-400 border-[1px] rounded-2xl" type="text">
                    <img src={advanced} alt=""  />
                    <h1 className="text-[#04264f]">Advanced<br></br>$12/mo</h1>
                </div>  
                
            </div>
            <div className="phone flex flex-col gap-2">
            <div className="BINGO w-[9rem] h-[10rem] flex flex-col items-start justify-between pl-5 border-solid border-gray-400 border-[1px] rounded-2xl" type="text">
                    <img src={pro} alt=""  />
                    <h1 className="text-[#04264f]">Pro<br></br>$15/mo</h1>
                </div>  
                
            </div>

        </div>
    </div>
  )
}
