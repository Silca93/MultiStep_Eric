import React from 'react'

export default function Sidebar() {
  return (
    <div className="Sidebar w-[90%] h-[95%] bg-green-200 flex flex-col justify-start items-center pt-[2rem] gap-6 rounded-2xl">
        <div className="one flex gap-4 justify-center">
            <div className="left w-[3rem] h-[3rem] border-solid border-2 border-white rounded-full flex justify-center items-center">
                <p className="text-white text-[1.5rem]">1</p>
            </div>
            <div className="right">
                <p className="text-white">Step 1<br></br>Your Info</p>
            </div>
        </div>
        <div className="two flex gap-4 ml-2">
            <div className="left w-[3rem] h-[3rem] border-solid border-2  border-white rounded-full flex justify-center items-center">
                <p className="text-white text-[1.5rem]">2</p>
            </div>
            <div className="right">
                <p className="text-white">Step 2<br></br>Select Plan</p>
            </div>
        </div>
        <div className="three flex gap-4 mr-2">
            <div className="left w-[3rem] h-[3rem] border-solid border-2 border-white rounded-full flex justify-center items-center">
                <p className="text-white text-[1.5rem]">3</p>
            </div>
            <div className="right">
                <p className="text-white">Step 3<br></br>Add ons</p>
            </div>
        </div>
        <div className="four flex gap-4">
        <div className="left w-[3rem] h-[3rem] border-solid border-2 border-white rounded-full flex justify-center items-center">
            <p className="text-white text-[1.5rem]">4</p>
            </div>
            <div className="right">
                <p className="text-white">Step 4<br></br>Summary</p>
            </div>
        </div>

    </div>
  )
}
