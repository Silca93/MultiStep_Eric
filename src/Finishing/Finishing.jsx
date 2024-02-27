import React from 'react'

export default function Finishing({clickNext4, clickNext, isChecked, toggleYearly, isArcadeClicked, isAdvanceClicked, isProClicked, isOnlineChecked, isProfileChecked, toggleClick1, toggleClick2, toggleClick3, toggleOnline, toggleProfile}) {

    let price = 120;
    if (isChecked) {
       price = price/10;
    }

    let price2 = 100;
    if (isChecked) {
       price2 = price2/10;
    }
    let price3 = 110;
    if (isChecked) {
       price3 = price3/10;
    }
    let price4 = 90;
    if (isChecked) {
       price4 = price4/10;
    }
    let price5 = 150;
    if (isChecked) {
       price5 = price5/10;
    }

    let price6 = 130;
    if (isChecked) {
       price6 = price6/10;
    }
    let price7 = 140;
    if (isChecked) {
       price7 = price7/10;
    }
    let price8 = 120;
    if (isChecked) {
       price8 = price8/10;
    }
    let price9 = 180;
    if (isChecked) {
       price9 = price9/10;
    }

    let price10 = 160;
    if (isChecked) {
       price10 = price10/10;
    }
    let price11 = 170;
    if (isChecked) {
       price11 = price11/10;
    }
    let price12 = 150;
    if (isChecked) {
       price12 = price12/10;
    }

    let arc; 
    if (isChecked) {
        arc = "Arcade(Monthly)"

    }else {
        arc = "Arcade(Yearly)"
    }

    let arcPrice; 

    if (isChecked) {
        arcPrice = "$9"

    }else {
        arcPrice = "$90"
    }

    let adv; 
    if (isChecked) {
        adv = "Advanced(Monthly)"

    }else {
        adv = "Advanced(Yearly)"
    }

    let advPrice; 

    if (isChecked) {
        advPrice = "$12"

    }else {
        advPrice = "$120"
    }

    let pro; 
    if (isChecked) {
        pro = "Pro(Monthly)"

    }else {
        pro = "Pro(Yearly)"
    }

    let proPrice; 

    if (isChecked) {
        proPrice = "$15"

    }else {
        proPrice = "$150"
    }

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
                                {!isArcadeClicked && isAdvanceClicked && isProClicked && arc}
                                {!isAdvanceClicked && isArcadeClicked && isProClicked && adv}
                                {!isProClicked && isAdvanceClicked && isArcadeClicked && pro}
                                </h1>
                            <p onClick={() => clickNext()} className="underline cursor-pointer text-gray-400">Change</p>
                        </div>
                        <div className="right">
                            {!isArcadeClicked && isAdvanceClicked && isProClicked && arcPrice}
                            {!isAdvanceClicked && isArcadeClicked && isProClicked && advPrice}
                            {!isProClicked && isAdvanceClicked && isArcadeClicked && proPrice}                                
                            
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

                        {!isArcadeClicked && isAdvanceClicked && isProClicked && !isOnlineChecked && !isProfileChecked && price + "$"}
                        {!isArcadeClicked && isAdvanceClicked && isProClicked && !isOnlineChecked && isProfileChecked && price2 + "$"}
                        {!isArcadeClicked && isAdvanceClicked && isProClicked && isOnlineChecked && !isProfileChecked && price3 + "$"}
                        {!isArcadeClicked && isAdvanceClicked && isProClicked && isOnlineChecked && isProfileChecked && price4 + "$"}
                        {isArcadeClicked ? "" : (!isArcadeClicked && !isProClicked && !isOnlineChecked && !isProfileChecked ? "$90" : null)}

                        {!isAdvanceClicked && isArcadeClicked && isProClicked && !isOnlineChecked && !isProfileChecked && price5 + "$"}
                        {!isAdvanceClicked && isArcadeClicked && isProClicked && !isOnlineChecked && isProfileChecked && price6 + "$" }
                        {!isAdvanceClicked && isArcadeClicked && isProClicked && isOnlineChecked && !isProfileChecked && price7 + "$"}
                        {!isAdvanceClicked && isArcadeClicked && isProClicked && isOnlineChecked && isProfileChecked && price8 + "$"}
                        {isAdvanceClicked ? "" : (!isArcadeClicked && !isProClicked && !isOnlineChecked && !isProfileChecked ? "$120" : null)}
                                                            
                        {!isProClicked && isArcadeClicked && isAdvanceClicked && !isOnlineChecked && !isProfileChecked && price9 + "$"}
                        {!isProClicked && isArcadeClicked && isAdvanceClicked && !isOnlineChecked && isProfileChecked && price10 + "$"}
                        {!isProClicked && isArcadeClicked && isAdvanceClicked && isOnlineChecked && !isProfileChecked && price11 + "$"}
                        {!isProClicked && isArcadeClicked && isAdvanceClicked && isOnlineChecked && isProfileChecked && price12 + "$"}
                        {isProClicked ? "" : (!isArcadeClicked && !isProClicked && !isOnlineChecked && !isProfileChecked ? "$150" : null)}
                            
                        </div>
                </div>
            </div>
        </div>
        <button onClick={() => clickNext4()} className="nextButton bg-[#04264f] w-[6rem] h-[3rem] rounded-xl absolute bottom-1 right-12 text-white">Next Step</button>
    </div>
    
  )
}
