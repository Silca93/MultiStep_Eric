import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import YourInfo from '../YourInfo/YourInfo'
import Plan from '../Plan/Plan'


export default function Mains({textMatch, emailMatch, phoneMatch, email, phone, text, arcade, advanced, pro}) {
  return (
    <div className="w-dvw h-dvh bg-[#ecf3fd] flex justify-center items-center">
        <div className="w-[50rem] h-[70%] rounded-lg flex">
            <div className="left w-[15rem] h-full bg-[#fffffe] rounded-l-xl flex flex-col justify-center items-center">
                <Sidebar/>
            </div>
            <div className="right w-[35rem] h-full bg-[#fffffe] rounded-r-xl relative flex flex-col pt-8">
                {/* <YourInfo textMatch={textMatch} emailMatch={emailMatch} phoneMatch={phoneMatch} text={text} phone={phone} email={email}/> */}
                <Plan arcade={arcade} advanced={advanced} pro={pro} />
                <button className="nextButton bg-[#04264f] w-[6rem] h-[3rem] rounded-xl absolute bottom-1 right-12 text-white">Next Step</button>

               

            </div>
            <div>
                
            </div>

        </div>
    </div>
  )
}
