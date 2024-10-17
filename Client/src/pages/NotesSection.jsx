import React from 'react';
import { FaBook, FaStickyNote, FaQuestionCircle } from 'react-icons/fa';

const NotesSection = () => {
  return (
    <div className="mt-10 w-11/12 mx-auto max-w-maxContent grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
      {/* Notes Block */}
      <div className="flex flex-col items-center bg-richblack-800 p-6 rounded-lg text-center hover:scale-105 transition-transform duration-200">
        <FaStickyNote className="text-6xl mb-4 text-caribbeangreen-300" />
        <h3 className="text-xl font-semibold mb-2">Notes</h3>
        <p className="text-richblack-300">Access your course notes quickly and easily.</p>
      </div>

      {/* PYQ Block */}
      <div className="flex flex-col items-center bg-richblack-800 p-6 rounded-lg text-center hover:scale-105 transition-transform duration-200">
        <FaQuestionCircle className="text-6xl mb-4 text-caribbeangreen-300" />
        <h3 className="text-xl font-semibold mb-2">Previous Year Questions (PYQ)</h3>
        <p className="text-richblack-300">Review past exam papers and test your knowledge.</p>
      </div>

      {/* Books Block */}
      <div className="flex flex-col items-center bg-richblack-800 p-6 rounded-lg text-center hover:scale-105 transition-transform duration-200">
        <FaBook className="text-6xl mb-4 text-caribbeangreen-300" />
        <h3 className="text-xl font-semibold mb-2">Books</h3>
        <p className="text-richblack-300">Find important textbooks and study materials.</p>
      </div>
    </div>
  );
};

export default NotesSection;
