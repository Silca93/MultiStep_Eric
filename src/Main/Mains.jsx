import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Pagecontent from '../Pagecontent/Pagecontent'


export default function Mains({textMatch, emailMatch, phoneMatch, email, phone, text}) {
  return (
    <div className="w-dvw h-dvh bg-[#ecf3fd] flex justify-center items-center">
        <div className="w-[50rem] h-[70%] rounded-lg flex">
            <div className="left w-[15rem] h-full bg-[#fffffe] rounded-l-xl flex flex-col justify-center items-center">
                <Sidebar/>
            </div>
            <div className="right w-[35rem] h-full bg-[#fffffe] rounded-r-xl relative flex flex-col pt-8">
                <Pagecontent textMatch={textMatch} emailMatch={emailMatch} phoneMatch={phoneMatch} text={text} phone={phone} email={email}/>
                <button className="nextButton bg-[#04264f] w-[6rem] h-[3rem] rounded-xl absolute bottom-1 right-12 text-white">Next Step</button>
               

            </div>
            <div>
                
            </div>

        </div>
    </div>
  )
}
