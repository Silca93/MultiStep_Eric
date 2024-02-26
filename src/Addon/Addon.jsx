import React from 'react'

export default function Addon() {
  return (
    <div className="w-full h-[25rem] flex flex-col gap-5 rounded-t-xl">
        <div className="title w-full h-[7rem] flex  flex-col justify-center items-start pl-[4rem]">
            <h1 className="Title text-[2rem] text-[#04264f]">Pick add-ons</h1>
            <p className="text-gray-400 ">Add-ons help enhance your gaming experience</p>
        </div>
        <div className="field w-full h-[30rem] flex flex-col justify-start items-start pl-[4rem]  gap-4">
            <div className="name flex flex-col gap-2">

                <div className="w-[27rem] h-[4rem] border-solid border-gray-400 border-[1px] rounded-xl flex flex-col relative">
                    <input className="absolute left-2 top-6 accent-purple-600" type="checkbox" checked="checked"/>
                    <div className="flex flex-col ml-9 justify-center pt-2">
                        <h1 className="text-[#04264f]">Online Service</h1>
                        <p className="text-gray-400">Access to multiplayer Games</p>
                    </div>
                    
                    <p className="text-purple-600 absolute right-1  top-5">+$10/year</p>

                </div>
            </div>
            <div className="email flex flex-col gap-2">
                <div className="w-[27rem] h-[4rem] border-solid border-gray-400 border-[1px] rounded-xl flex flex-col relative">
                    <input className="absolute left-2 top-6 accent-purple-600" type="checkbox" checked="checked"/>
                    <div className="flex flex-col ml-9 justify-center pt-2">
                        <h1 className="text-[#04264f]">Larger Storage</h1>
                        <p className="text-gray-400">Extra 1TB of cloud space</p>
                    </div>
                    <p className="text-purple-600 absolute right-1  top-5">+$10/year</p>
                </div>
                   
            </div>
            <div className="phone flex flex-col gap-2">
                <div className="w-[27rem] h-[4rem] border-solid border-gray-400 border-[1px] rounded-xl flex flex-col relative">
                    <input className="absolute left-2 top-6 accent-purple-600" type="checkbox" checked="checked"/>
                    <div className="flex flex-col ml-9 justify-center pt-2">
                        <h1 className="text-[#04264f]">Customizable profile</h1>
                        <p className="text-gray-400">Custom theme on your profile</p>
                    </div>
                    <p className="text-purple-600 absolute right-1  top-5">+$10/year</p>
                </div>
               
            </div>

        </div>
    </div>
  )
}
