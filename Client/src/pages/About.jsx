import React from "react";
import FoundingStory from "../assets/Images/FoundingStory.png";
import BannerImage1 from "../assets/Images/aboutus1.webp";
import BannerImage2 from "../assets/Images/aboutus2.webp";
import BannerImage3 from "../assets/Images/aboutus3.webp";
import Footer from "../components/common/Footer";
import ContactFormSection from "../components/core/AboutPage/ContactFormSection";
import LearningGrid from "../components/core/AboutPage/LearningGrid";
import Quote from "../components/core/AboutPage/Quote";
import StatsComponenet from "../components/core/AboutPage/Line";
import HighlightText from "../components/core/HomePage/HighlightText";
import Img from "../components/common/Img";
import ReviewSlider from "./../components/common/ReviewSlider";
import { motion } from "framer-motion";
import { fadeIn } from "../components/common/motionFrameVarients";

const About = () => {
  return (
    <div className="bg-richblack-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-richblack-700 to-richblack-900">
        <div className="relative mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-center text-white py-20">
          <motion.header className="mx-auto lg:w-[70%]">
            <motion.h1
              variants={fadeIn("down", 0.1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              Unlock knowledge, one note at a time – Welcome to
              <span className="block mt-2">
                <HighlightText text={"ScholarStation!"} />
              </span>
            </motion.h1>

            <motion.p
              variants={fadeIn("up", 0.1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.1 }}
              className="mx-auto mt-6 text-lg md:text-xl text-richblack-100 lg:w-[85%] leading-relaxed"
            >
              ScholarStation is at the forefront of transforming the way
              knowledge is captured and shared. We're passionate about
              empowering learners with a dynamic platform for creating,
              organizing, and collaborating on notes. By leveraging modern
              technology, we aim to nurture a thriving community of students and
              educators, making learning accessible and efficient for everyone.
            </motion.p>
          </motion.header>

          <div className="sm:h-[70px] lg:h-[150px]"></div>

          <div className="absolute bottom-0 left-[50%] w-full translate-x-[-50%] translate-y-[30%]">
            <div className="grid grid-cols-3 gap-3 lg:gap-5 px-4">
              <motion.div
                variants={fadeIn("up", 0.1)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.1 }}
                className="rounded-xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300"
              >
                <Img src={BannerImage1} alt="" className="w-full h-full object-cover" />
              </motion.div>
              <motion.div
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.1 }}
                className="rounded-xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300"
              >
                <Img src={BannerImage2} alt="" className="w-full h-full object-cover" />
              </motion.div>
              <motion.div
                variants={fadeIn("up", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.1 }}
                className="rounded-xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300"
              >
                <Img src={BannerImage3} alt="" className="w-full h-full object-cover" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="border-b border-richblack-700 bg-richblack-900">
        <div className="mx-auto w-11/12 max-w-maxContent py-20">
          <Quote />
        </div>
      </section>

      {/* Founding Story Section */}
      <section className="py-20">
        <div className="mx-auto w-11/12 max-w-maxContent">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div
              variants={fadeIn("right", 0.1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.1 }}
              className="lg:w-1/2 space-y-8"
            >
              <h2 className="bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCB045] bg-clip-text text-4xl md:text-5xl font-bold text-transparent">
                Our Founding Story
              </h2>
              <div className="space-y-6">
                <p className="text-richblack-300 text-lg leading-relaxed">
                  ScholarStation was born out of a shared vision and passion for
                  revolutionizing the way notes and knowledge are shared. It all
                  began with a group of students, technologists, and learners who
                  recognized the need for a centralized, accessible, and
                  user-friendly platform to capture and share notes in a
                  fast-paced digital world.
                </p>
                <p className="text-richblack-300 text-lg leading-relaxed">
                  As students ourselves, we experienced the challenges of
                  disorganized notes and limited access to quality study
                  materials. We believed that learning should be a collaborative,
                  open experience—free from boundaries. With ScholarStation, we
                  aim to bridge these gaps, empowering individuals from all
                  backgrounds to enhance their knowledge and contribute to a
                  global learning community.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeIn("left", 0.1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.1 }}
              className="lg:w-1/2"
            >
              <div className="rounded-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <Img
                  src={FoundingStory}
                  alt="FoundingStory"
                  className="w-full shadow-[0_0_20px_0] shadow-[#FC6767] rounded-2xl"
                />
              </div>
            </motion.div>
          </div>

          {/* Vision and Mission */}
          <div className="mt-32 grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              variants={fadeIn("up", 0.1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.1 }}
              className="space-y-6"
            >
              <h2 className="bg-gradient-to-b from-[#FF512F] to-[#F09819] bg-clip-text text-4xl font-bold text-transparent">
                Our Vision
              </h2>
              <p className="text-richblack-300 text-lg leading-relaxed">
                With this vision in mind, we embarked on a journey to create
                ScholarStation—an innovative notes-sharing platform that would
                transform the way students and learners interact with knowledge.
                Our team of dedicated students and technologists worked
                tirelessly to build a user-friendly, powerful platform that
                combines modern technology with seamless collaboration,
                fostering a vibrant and accessible learning community.
              </p>
            </motion.div>

            <motion.div
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.1 }}
              className="space-y-6"
            >
              <h2 className="bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text text-4xl font-bold">
                Our Mission
              </h2>
              <p className="text-richblack-300 text-lg leading-relaxed">
                Our mission goes beyond just offering a platform for notes. We
                aim to build a thriving community of learners where individuals
                can connect, collaborate, and share their knowledge freely. We
                believe that learning is most effective in an environment of
                open exchange and discussion. Through ScholarStation, we promote
                this spirit of collaboration by enabling users to share notes,
                engage in discussions, and support one another's learning
                journeys.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsComponenet />

      {/* Learning Grid and Contact Form */}
      <section className="mx-auto py-20 w-11/12 max-w-maxContent">
        <div className="space-y-20">
          <LearningGrid />
          <ContactFormSection />
        </div>
      </section>

      {/* <section className="py-20 bg-richblack-800">
        <div className="mx-auto w-11/12 max-w-maxContent">
          <ReviewSlider />
        </div>
      </section> */}

      <Footer />
    </div>
  );
};

export default About;