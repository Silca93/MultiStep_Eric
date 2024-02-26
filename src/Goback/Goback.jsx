import React from 'react'

export default function Goback({clickBack}) {
  return (
    <div>
        <button onClick={() => clickBack()} className="text-[#04264f]">Go Back</button>
    </div>
  )
}
