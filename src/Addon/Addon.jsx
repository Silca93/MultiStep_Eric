import React from 'react'

export default function Addon({text, clickNext3, toggleOnline, toggleProfile, isOnlineChecked, isProfileChecked, clickNext}) {
  return (
    <div className="w-full h-[25rem] flex flex-col gap-5 rounded-t-xl">
        <div className="title w-full h-[7rem] flex  flex-col justify-center items-start pl-[4rem]">
            <h1 className="Title text-[2rem] text-[#04264f]">Pick add-ons</h1>
            <p className="text-gray-400 ">Add-ons help enhance your gaming experience</p>
        </div>
        <div className="field w-full h-[30rem] flex flex-col justify-start items-start pl-[4rem]  gap-4">
            <div className="name flex flex-col gap-2">

            <label  className="w-[27rem] h-[4rem] border-solid border-gray-400 border-[1px] rounded-xl flex flex-col relative hover:ring-1 hover:ring-purple-600 cursor-pointer " htmlFor="onlineServiceCheckbox" tabIndex="0">
                 <input onClick={() => toggleOnline()} id="onlineServiceCheckbox" className="absolute left-2 top-6 accent-purple-600 focus:bg-gray-200 focus:ring-purple-600 focus:ring-2" type="checkbox" unchecked="unchecked" tabIndex="0" />
                 <div  className="flex flex-col ml-9 justify-center pt-2 focus:bg-gray-200 focus:ring-purple-600 focus:ring-2" tabIndex="0">
                    <h1 className="text-[#04264f]">Online Service</h1>
                    <p className="text-gray-400">Access to multiplayer Games</p>
                 </div>
                     <p className="text-purple-600 absolute right-1  top-5">+$10/year</p>
            </label>

            </div>
            <div className="email flex flex-col gap-2">
            <label className="w-[27rem] h-[4rem] border-solid border-gray-400 border-[1px] rounded-xl flex flex-col relative hover:ring-1 hover:ring-purple-600 focus:bg-gray-200 focus:ring-purple-600 focus:ring-2 cursor-pointer" htmlFor="cloudStorageCheckbox" tabIndex="0">
                 <input  id="cloudStorageCheckbox" className="absolute left-2 top-6 accent-purple-600" type="checkbox" unchecked="unchecked" />
                 <div className="flex flex-col ml-9 justify-center pt-2">
                    <h1 className="text-[#04264f]">Larger storage</h1>
                    <p className="text-gray-400">Extra 1TB of cloud space</p>
                 </div>
                     <p className="text-purple-600 absolute right-1  top-5">+$20/year</p>
            </label>
                   
            </div>
            <div className="phone flex flex-col gap-2">
            <label className="w-[27rem] h-[4rem] border-solid border-gray-400 border-[1px] rounded-xl flex flex-col relative hover:ring-1 hover:ring-purple-600 cursor-pointer" htmlFor="customProfileCheckbox">
                 <input onClick={() => toggleProfile()} id="customProfileCheckbox" className="absolute left-2 top-6 accent-purple-600" type="checkbox" unchecked="unchecked" />
                 <div className="flex flex-col ml-9 justify-center pt-2">
                    <h1 className="text-[#04264f]">Customizable profile</h1>
                    <p className="text-gray-400">Custom theme on your profile</p>
                 </div>
                     <p className="text-purple-600 absolute right-1  top-5">+$20/year</p>
            </label>
               
            </div>

            <button onClick={() => clickNext3()} className="nextButton bg-[#04264f] w-[6rem] h-[3rem] rounded-xl absolute bottom-1 right-12 text-white">Next Step</button>

        </div>
    </div>
  )
}
