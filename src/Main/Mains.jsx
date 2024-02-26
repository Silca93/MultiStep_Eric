import React from 'react'
import { useState, useEffect, useRef } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import YourInfo from '../YourInfo/YourInfo'
import Plan from '../Plan/Plan'
import Addon from '../Addon/Addon'
import Finishing from '../Finishing/Finishing'
import Thankyou from '../Thankyou/Thankyou'
import Goback from '../Goback/Goback'


export default function Mains({textMatch, emailMatch, phoneMatch, email, phone, text, arcade, advanced, pro, thx}) {

    const [page, setPage] = useState("YourInfo")
    

    let clickNext = () => {
        setPage("Plan")
    }
    let clickNext2 = () => {
        setPage("Addon")
    }
    let clickNext3 = () => {
        setPage("Finishing")
    }
    let clickNext4 = () => {
        setPage("Thankyou")
    }

    let clickBack = () => {
        setPage("YourInfo")
    }   


  return (
    <div className="w-dvw h-dvh bg-[#ecf3fd] flex justify-center items-center">
        <div className="w-[50rem] h-[70%] rounded-lg flex">
            <div className="left w-[15rem] h-full bg-[#fffffe] rounded-l-xl flex flex-col justify-center items-center">
                <Sidebar/>
            </div>
            <div className="right w-[35rem] h-full bg-[#fffffe] rounded-r-xl relative flex flex-col pt-8">
                {page == "YourInfo" && <YourInfo textMatch={textMatch} emailMatch={emailMatch} phoneMatch={phoneMatch} text={text} phone={phone} email={email} page={page} clickNext={clickNext}/>}
                {page == "Plan" && <Plan arcade={arcade} advanced={advanced} pro={pro} page={page} clickNext2={clickNext2} clickBack={clickBack}/> }
                {page == "Addon" && <Addon page={page} clickNext3={clickNext3}/> }
                {page == "Finishing" && <Finishing page={page} clickNext4={clickNext4} />}
                {page == "Thankyou" && <Thankyou thx={thx} page={page}  /> }
                
                
                {/* <button onClick={() => clickNext()} className="nextButton bg-[#04264f] w-[6rem] h-[3rem] rounded-xl absolute bottom-1 right-12 text-white">Next Step</button> */}
                <Goback clickBack={clickBack}/>

            </div>
            <div>
                
            </div>

        </div>
    </div>
  )
}
