import React from 'react'

export default function Goback({clickBack}) {
  return (
    <div className="mt-[15px] ml-2">
        <button onClick={() => clickBack()} className="text-[#04264f]">Go Back</button>
    </div>
  )
}
