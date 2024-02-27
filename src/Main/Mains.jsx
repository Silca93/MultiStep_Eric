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
//useState for the Monthyl/Yearly toggle//
    const [isChecked, setIsChecked] = useState(true)

    const toggleYearly = () => {
        setIsChecked(!isChecked);
        console.log(isChecked);
      };

//useSate for arcade //
    const [isArcadeClicked, setIsArcadeClicked] = useState(true)  

    const toggleClick1 = () => {
        setIsArcadeClicked(!isArcadeClicked)
    }
//usestate for advanced/
    const [isAdvanceClicked, setIsAdvanceClicked] = useState(true)  

    const toggleClick2 = () => {
        setIsAdvanceClicked(!isAdvanceClicked)
    }
//usestate for pro//
    const [isProClicked, setIsProClicked] = useState(true)  

    const toggleClick3 = () => {
        setIsProClicked(!isProClicked)
    }


// usestate for online option check//
    const [isOnlineChecked, setIsOnlineChecked] = useState(true)

    const toggleOnline = () => {
        setIsOnlineChecked(!isOnlineChecked);
        console.log(isOnlineChecked);
    };

    const [isProfileChecked, setIsProfileChecked] = useState(true)
  
    const toggleProfile = () => {
        setIsProfileChecked(!isProfileChecked);
        console.log(isProfileChecked);
    };

    const pageCircleColor = useRef(null)

    let switchColor = () => {
        pageCircleColor.current.className = "bg-blue-300 left w-[3rem] h-[3rem] border-solid border-2 border-white rounded-full flex justify-center items-center"
    }

  return (
    <div className="w-dvw h-dvh bg-[#ecf3fd] flex justify-center items-center">
        <div className="w-[50rem] h-[70%] rounded-xl flex max-[810px]:flex-col max-[810px]:justify-center max-[810px]:items-center">
            <div className="left w-[15rem] h-full bg-[#fffffe] rounded-l-3xl flex flex-col justify-center items-center max-[810px]:w-[35rem] max-[810px]:rounded-tl-3xl max-[810px]:rounded-l-none  max-[810px]:rounded-tr-3xl max-[810px]:pt-1 ">
                <Sidebar pageCircleColor={pageCircleColor} switchColor={switchColor}/>
            </div>
            <div className="right w-[35rem] h-full bg-[#fffffe] rounded-r-3xl relative flex flex-col pt-8 max-[810px]:rounded-tr-none max-[810px]:rounded-bl-3xl">
                {page == "YourInfo" && <YourInfo textMatch={textMatch} emailMatch={emailMatch} phoneMatch={phoneMatch} text={text} phone={phone} email={email} page={page} clickNext={clickNext} pageCircleColor={pageCircleColor} switchColor={switchColor}/>}
                {page == "Plan" && <Plan arcade={arcade} advanced={advanced} pro={pro} page={page} clickNext2={clickNext2} clickBack={clickBack} toggleYearly={toggleYearly} isChecked={isChecked} toggleClick1={toggleClick1} isArcadeClicked={isArcadeClicked} toggleClick2={toggleClick2} toggleClick3={toggleClick3} isAdvanceClicked={isAdvanceClicked} isProClicked={isProClicked}/> }
                {page == "Addon" && <Addon page={page} clickNext3={clickNext3} clickNext={clickNext} isOnlineChecked={isOnlineChecked} toggleOnline={toggleOnline} isProfileChecked={isProfileChecked} toggleProfile={toggleProfile} text={text}/> }
                {page == "Finishing" && <Finishing page={page} clickNext4={clickNext4} clickNext={clickNext} toggleYearly={toggleYearly} isChecked={isChecked} toggleClick1={toggleClick1} isArcadeClicked={isArcadeClicked}  toggleClick2={toggleClick2} isAdvanceClicked={isAdvanceClicked} isProClicked={isProClicked} toggleClick3={toggleClick3} isOnlineChecked={isOnlineChecked} toggleOnline={toggleOnline} isProfileChecked={isProfileChecked} toggleProfile={toggleProfile} text={text}/>}
                {page == "Thankyou" && <Thankyou thx={thx} page={page}  /> }
                {page == "YourInfo" ? "" : page == "Thankyou" ? "" : <Goback clickBack={clickBack}/>}
            </div>
            <div>
                
            </div>

        </div>
    </div>
  )
}
