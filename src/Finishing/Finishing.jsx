import React from 'react'

export default function Finishing({clickNext4, isChecked, toggleYearly, isArcadeClicked, isAdvanceClicked, isProClicked, isOnlineChecked, isProfileChecked, toggleClick1, toggleClick2, toggleClick3, toggleOnline, toggleProfile}) {
  return (
    <div className="top w-full h-[25rem] flex flex-col gap-5 rounded-t-xl">
        <div className="title w-full h-[7rem] flex  flex-col justify-center items-start pl-[4rem]">
            <h1 className="Title text-[2rem] text-[#04264f]">Finishing up</h1>
            <p className="text-gray-400 ">Double-check everything looks Ok before confirming</p>
        </div>
        <div className="field w-full h-[30rem] flex flex-col justify-start items-start pl-[4rem]  gap-4">
            <div className="name flex flex-col gap-2">
                
                <div className="w-[27rem] h-[12rem] bg-[#ecf3fd] border-solid border-gray-400 border-[1px] rounded-xl" type="text">
                    <div className="top w-full h-[5rem] flex justify-between px-2 pt-2">
                        <div className="left flex flex-col">
                            <h1>
                                {!isArcadeClicked && isAdvanceClicked && isProClicked && "Arcade(Yearly)"}
                                {!isAdvanceClicked && isArcadeClicked && isProClicked && "Advanced(Yearly)"}
                                {!isProClicked && isAdvanceClicked && isArcadeClicked && "Pro(Yearly)"}
                                </h1>
                            <p className="underline text-gray-400">Change</p>
                        </div>
                        <div className="right">
                            {!isArcadeClicked && isAdvanceClicked && isProClicked && "$90"}
                            {!isAdvanceClicked && isArcadeClicked && isProClicked && "$120"}
                            {!isProClicked && isAdvanceClicked && isArcadeClicked && "$150"}                                
                            
                        </div>

                    </div>
                    <hr/>
                    <div className="bot w-full h-[8rem]">
                      <div className="top w-full h-[3rem] flex justify-between px-2 pt-2">
                        <div className="left flex flex-col">
                            <h1>Online Service</h1>
                        </div>
                        <div className="right">
                           {!isOnlineChecked ? "+$10/yr" : "0"} 
                        </div>

                      </div>
                      <div className="bot w-full h-[3rem] flex justify-between px-2 pt-2">
                        <div className="left flex flex-col">
                            <h1>Customizable Profile</h1>
                        </div>
                        <div className="right">
                            {!isProfileChecked ? "+$20/yr" : "+0$"}
                            
                        </div>
                      </div>
                    </div>
                </div>  
                <div className="bot w-full h-[3rem] flex justify-between px-2 pt-2">
                        <div className="left flex flex-col">
                            <h1>Total per year</h1>
                        </div>
                        <div className="right text-[1.5rem] text-blue-400">

                        {!isArcadeClicked && isAdvanceClicked && isProClicked && !isOnlineChecked && !isProfileChecked && "$120"}
                        {!isArcadeClicked && isAdvanceClicked && isProClicked && !isOnlineChecked && isProfileChecked && "$100"}
                        {!isArcadeClicked && isAdvanceClicked && isProClicked && isOnlineChecked && "$110"}
                        {isArcadeClicked ? "" : (!isArcadeClicked && !isProClicked && !isOnlineChecked && !isProfileChecked ? "$90" : null)}

                        
                        {!isAdvanceClicked && isArcadeClicked && isProClicked && !isOnlineChecked && !isProfileChecked && "$150"}
                        {!isAdvanceClicked && isArcadeClicked && isProClicked && !isOnlineChecked && isProfileChecked && "$130"}
                        {!isAdvanceClicked && isArcadeClicked && isProClicked && isOnlineChecked && "$140"}
                        {isAdvanceClicked ? "" : (!isArcadeClicked && !isProClicked && !isOnlineChecked && !isProfileChecked ? "$120" : null)}
                                                            
                        {!isProClicked && isArcadeClicked && isAdvanceClicked && !isOnlineChecked && !isProfileChecked && "$180"}
                        {!isProClicked && isArcadeClicked && isAdvanceClicked && !isOnlineChecked && isProfileChecked && "$160"}
                        {!isProClicked && isArcadeClicked && isAdvanceClicked && isOnlineChecked && "$170"}
                        {isProClicked ? "" : (!isArcadeClicked && !isProClicked && !isOnlineChecked && !isProfileChecked ? "$150" : null)}


                        
                        {/* {
                        !isAdvanceClicked && isArcadeClicked && isProClicked ? (
                            "$120"
                        ) : (
                            !isProfileChecked && !isOnlineChecked ? (
                            "$150"
                            ) : !isOnlineChecked ? (
                            "$130"
                            ) : !isProfileChecked ? (
                            "$1140"
                            ) : (
                            "120"
                            )
                        )
                        } */}


                        {/* {
                        !isProClicked && !isAdvanceClicked && !isArcadeClicked ? (
                            "$150"
                        ) : (
                            !isProfileChecked && !isOnlineChecked ? (
                            "$180"
                            ) : !isOnlineChecked ? (
                            "$160"
                            ) : !isProfileChecked ? (
                            "$170"
                            ) : (
                            "150"
                            )
                        )
                        } */}




                        
                            
                            
                        </div>
                </div>
            </div>

        </div>
        <button onClick={() => clickNext4()} className="nextButton bg-[#04264f] w-[6rem] h-[3rem] rounded-xl absolute bottom-1 right-12 text-white">Next Step</button>
    </div>
    
  )
}
