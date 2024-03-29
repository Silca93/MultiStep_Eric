import React from 'react'

export default function YourInfo({textMatch, emailMatch, phoneMatch, phone, email, text, clickNext, switchColor, pageCircleColor}) {
  return (
    <div className="w-full h-[25rem] flex flex-col gap-5 rounded-t-xl">
        <div className="title w-full h-[7rem] flex  flex-col justify-center items-start pl-[4rem]">
            <h1 className="Title text-[2rem] text-[#04264f]">Personal Info</h1>
            <p className="text-gray-400 ">Please provide your name, email address and phone number</p>
        </div>
        <div className="field w-full h-[30rem] flex flex-col justify-start items-start pl-[4rem]  gap-4">
            <div className="name flex flex-col gap-2">
                <p className="text-[#04264f]">Your name is : {text}</p>
                <input onChange={(e) => textMatch(e)} className="w-[27rem] h-[3rem] border-solid border-gray-400 border-[1px] rounded-xl" type="text"/>
            </div>
            <div className="email flex flex-col gap-2">
                <p className="text-[#04264f]">Your email is : {email}</p>
                <input onChange={(e) => emailMatch(e)} className="w-[27rem] h-[3rem] rounded-xl border-solid border-gray-400 border-[1px]" type="text"/>
            </div>
            <div className="phone flex flex-col gap-2">
                <p className="text-[#04264f]">Your phone number is : {phone}</p>
                <input onChange={(e) => phoneMatch(e)} className='w-[27rem] h-[3rem] rounded-xl border-solid border-gray-400 border-[1px]' type="number"/>
            </div>

        </div>
        <button onClick={() => {(text.length&&email.length&&phone.length >= 1? clickNext() :"" ), switchColor()}} className="nextButton bg-[#04264f] w-[6rem] h-[3rem] rounded-xl absolute bottom-1 right-12 text-white">Next Step</button>
    </div>
  )
}
