import React from "react";


const StatsComponenet = () => {
  return (
    <div className="bg-richblack-700">
      {/* Stats */}
      <div className="flex flex-col gap-10 justify-between w-11/12 max-w-maxContent text-white mx-auto ">
        <div className=" text-center">
        <div className="bg-richblack-700">
      <marquee className="text-5xl p-8 font-bold text-white">
        "Join <span className='font-bold text-richblue-200 gradient_color'>ScholarStation</span> and transform your learning journey today!"
      </marquee>
    </div>
        </div>
      </div>
    </div>
  );
};

export default StatsComponenet;