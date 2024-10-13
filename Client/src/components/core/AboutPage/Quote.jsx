import React from 'react'
import HighlightText from '../HomePage/HighlightText'

const Quote = () => {
  return (
    <div className=" text-xl md:text-4xl font-semibold mx-auto py-5 pb-20 text-center text-white">
         <HighlightText text={"Scholar Station"} />{" "}
          Where every note sparks the journey to deeper
          <span className="bg-gradient-to-b from-[#FF512F] to-[#F09819] text-transparent bg-clip-text font-bold">
            {"  "}
             knowledge
        </span> 
         <span> and</span>
        <span className="bg-gradient-to-b from-[#FF512F] to-[#F09819] text-transparent bg-clip-text font-bold">
            {" "}
            collective growth
        </span>
           
    </div>
  )
}

export default Quote