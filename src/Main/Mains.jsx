import React from 'react'
import { useState, useEffect, useRef } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import YourInfo from '../YourInfo/YourInfo'
import Plan from '../Plan/Plan'
import Addon from '../Addon/Addon'
import Goback from '../Goback/Goback'


export default function Mains({textMatch, emailMatch, phoneMatch, email, phone, text, arcade, advanced, pro}) {

    const [page, setPage] = useState("YourInfo")

    let clickNext = () => {
        setPage("Plan")
    }


  return (
    <div className="w-dvw h-dvh bg-[#ecf3fd] flex justify-center items-center">
        <div className="w-[50rem] h-[70%] rounded-lg flex">
            <div className="left w-[15rem] h-full bg-[#fffffe] rounded-l-xl flex flex-col justify-center items-center">
                <Sidebar/>
            </div>
            <div className="right w-[35rem] h-full bg-[#fffffe] rounded-r-xl relative flex flex-col pt-8">
                {/* {page == "YourInfo" && <YourInfo textMatch={textMatch} emailMatch={emailMatch} phoneMatch={phoneMatch} text={text} phone={phone} email={email} page={page}/>}
                {page == "Plan" && <Plan arcade={arcade} advanced={advanced} pro={pro} /> }
                {page == "Addon" && <Addon/> } */}
                <Addon/> 
                
                <button onClick={() => clickNext()} className="nextButton bg-[#04264f] w-[6rem] h-[3rem] rounded-xl absolute bottom-1 right-12 text-white">Next Step</button>
                <Goback/>

               

            </div>
            <div>
                
            </div>

        </div>
    </div>
  )
}
