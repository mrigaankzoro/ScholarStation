import React from "react";
import { Link } from "react-router-dom";

const BottomFooter = ["Privacy Policy", "Cookie Policy", "Terms"];
const Plans = ["Paid memberships", "For students", "Business solutions"];
const Community = ["Forums", "Chapters", "Events"];

const Footer = () => {
  return (
    <div className="bg-richblack-800 mx-auto max-w-[95%] rounded-3xl mb-10 overflow-hidden transform hover:shadow-2xl transition-all duration-300">
      <div className="max-w-maxContent mx-auto p-8 lg:p-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 pb-8 border-b border-richblack-700">
          {/* Section 1 - Social Links */}
          <div className="space-y-6">
            <h3 className="text-white text-xl font-semibold mb-4">Connect With Us</h3>
            <div className="flex gap-4">
              {/* Social Icons with Enhanced Hover Effects */}
              <div className="social-icons flex space-x-4">
                <a href="#" className="transform transition-transform hover:-translate-y-1 hover:opacity-80">
                  <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="facebook">
                    <path fill="#1976D2" d="M14 0H2C.897 0 0 .897 0 2v12c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V2c0-1.103-.897-2-2-2z"></path>
                    <path fill="#FAFAFA" fillRule="evenodd" d="M13.5 8H11V6c0-.552.448-.5 1-.5h1V3h-2a3 3 0 0 0-3 3v2H6v2.5h2V16h3v-5.5h1.5l1-2.5z" clipRule="evenodd"></path>
                  </svg>
                </a>
                <a href="#" className="transform transition-transform hover:-translate-y-1 hover:opacity-80">
                  <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" id="google">
                    <path fill="#fbbb00" d="M113.47 309.408 95.648 375.94l-65.139 1.378C11.042 341.211 0 299.9 0 256c0-42.451 10.324-82.483 28.624-117.732h.014L86.63 148.9l25.404 57.644c-5.317 15.501-8.215 32.141-8.215 49.456.002 18.792 3.406 36.797 9.651 53.408z"></path>
                    <path fill="#518ef8" d="M507.527 208.176C510.467 223.662 512 239.655 512 256c0 18.328-1.927 36.206-5.598 53.451-12.462 58.683-45.025 109.925-90.134 146.187l-.014-.014-73.044-3.727-10.338-64.535c29.932-17.554 53.324-45.025 65.646-77.911h-136.89V208.176h245.899z"></path>
                    <path fill="#28b446" d="m416.253 455.624.014.014C372.396 490.901 316.666 512 256 512c-97.491 0-182.252-54.491-225.491-134.681l82.961-67.91c21.619 57.698 77.278 98.771 142.53 98.771 28.047 0 54.323-7.582 76.87-20.818l83.383 68.262z"></path>
                    <path fill="#f14336" d="m419.404 58.936-82.933 67.896C313.136 112.246 285.552 103.82 256 103.82c-66.729 0-123.429 42.957-143.965 102.724l-83.397-68.276h-.014C71.23 56.123 157.06 0 256 0c62.115 0 119.068 22.126 163.404 58.936z"></path>
                  </svg>
                </a>
                <a href="#" className="transform transition-transform hover:-translate-y-1 hover:opacity-80">
                  <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 126.24 102.59" id="twitter">
                    <path fill="#1da1f2" d="M40.58,115.3c47.64,0,73.69-39.47,73.69-73.69,0-1.12,0-2.24-.07-3.35a52.7,52.7,0,0,0,12.92-13.41,51.7,51.7,0,0,1-14.87,4.08A26,26,0,0,0,123.63,14.6a51.9,51.9,0,0,1-16.45,6.29A25.92,25.92,0,0,0,63.05,44.51,73.53,73.53,0,0,1,9.67,17.45a25.92,25.92,0,0,0,8,34.58A25.71,25.71,0,0,1,6,48.78c0,.11,0,.22,0,.33A25.91,25.91,0,0,0,26.73,74.5a25.86,25.86,0,0,1-11.7.44,25.93,25.93,0,0,0,24.2,18A52,52,0,0,1,7.06,104a52.72,52.72,0,0,1-6.18-.36,73.32,73.32,0,0,0,39.7,11.63"></path>
                  </svg>
                </a>
                <a href="#" className="transform transition-transform hover:-translate-y-1 hover:opacity-80">
                  <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="youtube">
                    <g fillRule="evenodd" clipRule="evenodd">
                      <path fill="#F44336" d="M15.32 4.06c-.434-.772-.905-.914-1.864-.968C12.498 3.027 10.089 3 8.002 3c-2.091 0-4.501.027-5.458.091-.957.055-1.429.196-1.867.969C.23 4.831 0 6.159 0 8.497v.008c0 2.328.23 3.666.677 4.429.438.772.909.912 1.866.977.958.056 3.368.089 5.459.089 2.087 0 4.496-.033 5.455-.088.959-.065 1.43-.205 1.864-.977.451-.763.679-2.101.679-4.429v-.008c0-2.339-.228-3.667-.68-4.438z"></path>
                      <path fill="#FAFAFA" d="M6 11.5v-6l5 3z"></path>
                    </g>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Section 2 - Quick Links */}
          <div className="space-y-6">
            <h3 className="text-white text-xl font-semibold">Quick Links</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="text-richblack-50 font-medium mb-2">Plans</h4>
                <ul className="space-y-2">
                  {Plans.map((plan, index) => (
                    <li key={index} className="text-richblack-400 hover:text-white transition-colors duration-200">
                      <Link to="#" className="hover:pl-2 transition-all duration-200">{plan}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-richblack-50 font-medium mb-2">Community</h4>
                <ul className="space-y-2">
                  {Community.map((item, index) => (
                    <li key={index} className="text-richblack-400 hover:text-white transition-colors duration-200">
                      <Link to="#" className="hover:pl-2 transition-all duration-200">{item}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Section 3 - Call to Action */}
          <div className="space-y-6">
            <h3 className="text-white text-xl font-semibold">Ace Your Grade</h3>
            <div className="bg-richblack-700 p-6 rounded-xl transform hover:scale-105 transition-all duration-300">
              <p className="text-richblack-100 mb-4">Join our community of successful students and excel in your studies.</p>
              <button className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors duration-200">
                Get Started
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            {/* Policy Links */}
            <div className="flex flex-wrap gap-4">
              {BottomFooter.map((item, index) => (
                <Link
                  key={index}
                  to={item.split(" ").join("-").toLowerCase()}
                  className="text-richblack-400 hover:text-white transition-colors duration-200"
                >
                  {item}
                </Link>
              ))}
            </div>

            {/* Credits */}
            <div className="text-richblack-400 flex flex-col sm:flex-row items-center gap-2">
              <div className="flex items-center gap-1">
                <span>Made with</span>
                <span className="text-red-500 animate-pulse">❤️</span>
                <Link to="delete-note" target="_blank" className="text-white hover:underline">
                  TEAM
                </Link>
              </div>
              <span className="hidden sm:inline">|</span>
              <span>© 2024 ScholarStation</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;