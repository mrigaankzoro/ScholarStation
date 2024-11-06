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

// Import background images
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
  backgroundImg1, backgroundImg2, backgroundImg3, backgroundImg4, backgroundImg5,
  backgroundImg6, backgroundImg7, backgroundImg8, backgroundImg9, backgroundImg10, backgroundImg111,
];

const Home = () => {
  const [backgroundImg, setBackgroundImg] = useState(null);
  const [CatalogPageData, setCatalogPageData] = useState(null);
  const categoryID = "6506c9dff191d7ffdb4a3fe2";
  const dispatch = useDispatch();

  useEffect(() => {
    const bg = randomImges[Math.floor(Math.random() * randomImges.length)];
    setBackgroundImg(bg);
  }, []);

  useEffect(() => {
    const fetchCatalogPageData = async () => {
      const result = await getCatalogPageData(categoryID, dispatch);
      setCatalogPageData(result);
    };
    if (categoryID) {
      fetchCatalogPageData();
    }
  }, [categoryID]);

  return (
    <div className="relative min-h-screen bg-richblack-900">
      {/* Hero Section Background */}
      <div className="absolute top-0 left-0 w-full h-[700px] overflow-hidden">
        <div className="relative w-full h-full">
          <img
            src={backgroundImg}
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-richblack-900/60 to-richblack-900"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative">
        {/* Hero Section */}
        <section className="relative pt-20 pb-16 sm:pt-32 sm:pb-24 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center space-y-8">
              {/* CTA Button */}
              <Link to="/filter-notes" className="inline-block">
                <div className="group relative inline-flex items-center justify-center overflow-hidden rounded-full p-[2px] transition-all duration-300 ease-in-out hover:scale-105 bg-gradient-to-r from-blue-500 to-green-400">
                  <div className="relative rounded-full bg-richblack-900 px-6 py-2 transition-all duration-300 group-hover:bg-opacity-0">
                    <div className="flex items-center gap-2 text-white">
                      <span className="font-semibold">Become a Provider</span>
                      <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Link>

              {/* Hero Text */}
              <motion.div
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.2 }}
                className="space-y-4"
              >
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
                  Empower Your Education with{" "}
                  <HighlightText text="Scholar Station" />
                </h1>
                <p className="text-lg sm:text-xl text-richblack-200 max-w-3xl mx-auto">
                  Transform your learning journey with comprehensive study materials
                  and expert guidance.
                </p>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                variants={fadeIn("up", 0.3)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.2 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8"
              >
                <button className="px-6 py-3 rounded-lg bg-blue-500 text-white font-semibold hover:bg-blue-600 transition-colors duration-300">
                  Explore Courses
                </button>
                <button className="px-6 py-3 rounded-lg border-2 border-richblack-300 text-white font-semibold hover:bg-richblack-700 transition-colors duration-300">
                  View Notes
                </button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Notes Section with Enhanced Spacing */}
        <section className="relative py-16 sm:py-24">
          <div className="container mx-auto max-w-7xl px-4">
            <NotesSection />
          </div>
        </section>

        {/* Instructor Section with Enhanced Styling */}
        <section className="relative py-16 sm:py-24 bg-richblack-900">
          <div className="container mx-auto max-w-7xl px-4">
            <InstructorSection />
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default Home;