import React from 'react'

export default function Thankyou({thx}) {
  return (
    <div className="w-full h-[25rem]  flex flex-col justify-center items-center gap-5 rounded-t-xl">
            <img src={thx} alt="" />
            <h1 className="Title text-[2rem] text-[#04264f]">Thank you!</h1>
            <p className="text-gray-400 text-center ">Thank you for confirming your subscription! We hope you have <br></br>
            fun using our platform. If you ever need support, please<br></br> feel free to email us at support@loremgaming.com</p>
        
        

    </div>
  )
}
