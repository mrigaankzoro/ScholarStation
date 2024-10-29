import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import NotesSection from "./NotesSection";
import HighlightText from "../components/core/HomePage/HighlightText";
import CTAButton from "../components/core/HomePage/Button";
import CodeBlocks from "../components/core/HomePage/CodeBlocks";
import TimelineSection from "../components/core/HomePage/TimelineSection";
import LearningLanguageSection from "../components/core/HomePage/LearningLanguageSection";
import InstructorSection from "../components/core/HomePage/InstructorSection";
import Footer from "../components/common/Footer";
import ExploreMore from "../components/core/HomePage/ExploreMore";
import ReviewSlider from "../components/common/ReviewSlider";
import Course_Slider from "../components/core/Catalog/Course_Slider";

import { getCatalogPageData } from "../services/operations/pageAndComponentData";

import { MdOutlineRateReview } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";

import { motion } from "framer-motion";
import { fadeIn } from "./../components/common/motionFrameVarients";

// background random images
import backgroundImg1 from "../assets/Images/random bg img/coding bg1.jpg";
import backgroundImg2 from "../assets/Images/random bg img/coding bg2.jpg";
import backgroundImg3 from "../assets/Images/random bg img/coding bg3.jpg";
import backgroundImg4 from "../assets/Images/random bg img/coding bg4.jpg";
import backgroundImg5 from "../assets/Images/random bg img/coding bg5.jpg";
import backgroundImg6 from "../assets/Images/random bg img/coding bg6.jpeg";
import backgroundImg7 from "../assets/Images/random bg img/coding bg7.jpg";
import backgroundImg8 from "../assets/Images/random bg img/coding bg8.jpeg";
import backgroundImg9 from "../assets/Images/random bg img/coding bg9.jpg";
import backgroundImg10 from "../assets/Images/random bg img/coding bg10.jpg";
import backgroundImg111 from "../assets/Images/random bg img/coding bg11.jpg";

const randomImges = [
  backgroundImg1,
  backgroundImg2,
  backgroundImg3,
  backgroundImg4,
  backgroundImg5,
  backgroundImg6,
  backgroundImg7,
  backgroundImg8,
  backgroundImg9,
  backgroundImg10,
  backgroundImg111,
];

// hardcoded

const Home = () => {
  // get background random images
  const [backgroundImg, setBackgroundImg] = useState(null);

  useEffect(() => {
    const bg = randomImges[Math.floor(Math.random() * randomImges.length)];
    setBackgroundImg(bg);
  }, []);

  // get courses data
  const [CatalogPageData, setCatalogPageData] = useState(null);
  const categoryID = "6506c9dff191d7ffdb4a3fe2"; // hard coded
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchCatalogPageData = async () => {
      const result = await getCatalogPageData(categoryID, dispatch);
      setCatalogPageData(result);
      // console.log("page data ==== ",CatalogPageData);
    };
    if (categoryID) {
      fetchCatalogPageData();
    }
  }, [categoryID]);

  // console.log('================ CatalogPageData?.selectedCourses ================ ', CatalogPageData)

  return (
    <React.Fragment>
      {/* background random image */}
      <div>
        <div className="w-full h-[450px] md:h-[650px] absolute top-0 left-0 opacity-[0.3] overflow-hidden object-cover ">
          <img
            src={backgroundImg}
            alt="Background"
            className="w-full h-full object-cover "
          />

          <div className="absolute left-0 bottom-0 w-full h-[250px] opacity_layer_bg "></div>
        </div>
      </div>

      <div className=" ">
        {/*Section1  */}
        <div className="relative h-[450px] md:h-[550px] justify-center mx-auto flex flex-col w-11/12 max-w-maxContent items-center text-white ">
          <Link to={"/filter-notes"}>
            <div
              className="z-0 group p-1 mx-auto rounded-full bg-gradient-to-r from-[#5189ff] to-caribbeangreen-300 font-bold text-white
                                        transition-all duration-200 hover:scale-95 w-fit"
            >
              <div
                className="flex flex-row items-center gap-2 rounded-full px-10 py-[5px]
                              transition-all duration-200 group-hover:bg-richblack-900"
              >
                <p className="">Become an Provider</p>
                <FaArrowRight className="stroke-1 stroke-black" />
              </div>
            </div>
          </Link>

          <motion.div
            variants={fadeIn("left", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.1 }}
            className="text-center text-3xl lg:text-4xl font-semibold mt-7  "
          >
            Empower Your Education with
            <HighlightText text={"Scholar Station"} />
          </motion.div>

          <motion.div
            variants={fadeIn("right", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.1 }}
            className=" mt-4 w-[90%] text-center text-base lg:text-lg font-bold text-richblack-300"
          ></motion.div>
        </div>
        <div>
          <NotesSection />
        </div>
        {/*Section 3 */}
        <div className="mt-14 w-11/12 mx-auto max-w-maxContent flex-col items-center justify-between gap-8 first-letter bg-richblack-900 text-white">
          <InstructorSection />

          {/* Reviws from Other Learner */}
        </div>

        {/*Footer */}
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Home;
