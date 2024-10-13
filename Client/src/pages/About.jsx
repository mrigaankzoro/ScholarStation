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
    <div>
      <section className="bg-richblack-700">
        <div className="relative mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-center text-white">
          <motion.header className="mx-auto py-20 text-4xl font-semibold lg:w-[70%]">
            <motion.p
              variants={fadeIn("down", 0.1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.1 }}
            >
              {" "}
              Unlock knowledge, one note at a time – Welcome to
              <HighlightText text={"ScholarStation!"} />
            </motion.p>

            <motion.p
              variants={fadeIn("up", 0.1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.1 }}
              className="mx-auto mt-3 text-center text-base font-medium text-richblack-300 lg:w-[95%]"
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

          <div className=" absolute bottom-0 left-[50%] grid w-[100%] translate-x-[-50%] translate-y-[30%] grid-cols-3 gap-3 lg:gap-5">
            <Img src={BannerImage1} alt="" />
            <Img src={BannerImage2} alt="" />
            <Img src={BannerImage3} alt="" />
          </div>
        </div>
      </section>

      <section className="border-b border-richblack-700">
        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-richblack-500">
          <div className="h-[100px] "></div>
          <Quote />
        </div>
      </section>

      <section>
        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-richblack-500">
          <div className="flex flex-col items-center gap-10 lg:flex-row justify-between">
            <motion.div
              variants={fadeIn("right", 0.1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.1 }}
              className="my-24 flex lg:w-[50%] flex-col gap-10"
            >
              <h1 className="bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCB045] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%] ">
                Our Founding Story
              </h1>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                ScholarStation was born out of a shared vision and passion for
                revolutionizing the way notes and knowledge are shared. It all
                began with a group of students, technologists, and learners who
                recognized the need for a centralized, accessible, and
                user-friendly platform to capture and share notes in a
                fast-paced digital world.
              </p>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                As students ourselves, we experienced the challenges of
                disorganized notes and limited access to quality study
                materials. We believed that learning should be a collaborative,
                open experience—free from boundaries. With ScholarStation, we
                aim to bridge these gaps, empowering individuals from all
                backgrounds to enhance their knowledge and contribute to a
                global learning community.
              </p>
            </motion.div>

            <motion.div
              variants={fadeIn("left", 0.1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.1 }}
            >
              <Img
                src={FoundingStory}
                alt="FoundingStory"
                className="shadow-[0_0_20px_0] shadow-[#FC6767]"
              />
            </motion.div>
          </div>

          <div className="flex flex-col items-center lg:gap-10 lg:flex-row justify-between">
            <div className="my-24 flex lg:w-[40%] flex-col gap-10">
              <h1 className="bg-gradient-to-b from-[#FF512F] to-[#F09819] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%] ">
                Our Vision
              </h1>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                With this vision in mind, we embarked on a journey to create
                ScholarStation—an innovative notes-sharing platform that would
                transform the way students and learners interact with knowledge.
                Our team of dedicated students and technologists worked
                tirelessly to build a user-friendly, powerful platform that
                combines modern technology with seamless collaboration,
                fostering a vibrant and accessible learning community.
              </p>
            </div>

            <div className="my-24 flex lg:w-[40%] flex-col gap-10">
              <h1 className="bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text text-4xl font-semibold lg:w-[70%] ">
                Our Mission
              </h1>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                Our mission goes beyond just offering a platform for notes. We
                aim to build a thriving community of learners where individuals
                can connect, collaborate, and share their knowledge freely. We
                believe that learning is most effective in an environment of
                open exchange and discussion. Through ScholarStation, we promote
                this spirit of collaboration by enabling users to share notes,
                engage in discussions, and support one another’s learning
                journeys.
              </p>
            </div>
          </div>
        </div>
      </section>

      <StatsComponenet />

      <section className="mx-auto mt-20 flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-white">
        <LearningGrid />
        <ContactFormSection />
      </section>

      {/* Reviws from Other Learner */}
      <div className=" my-20 px-5 text-white ">
       
        <ReviewSlider />
      </div>

      {/* footer */}
      <Footer />
    </div>
  );
};

export default About;
