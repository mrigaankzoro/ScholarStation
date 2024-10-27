import React, { useState } from 'react';
import { data } from '../notesDemoData';
import { FaCaretDown, FaPen } from 'react-icons/fa';
import { GoPerson } from "react-icons/go";
import { MdKeyboardArrowRight } from 'react-icons/md'

function FilterNotes() {
    const [category, setCategory] = useState(["Engineering", "MCA", "Programming"]);
    const [presentCategory, setPresentCategory] = useState("Engineering");
    const [selectedBranch, setSelectedBranch] = useState("Electrical");
    const [selectedYear, setSelectedYear] = useState("1");
    const [showYears, setShowYears] = useState(true);

    // Get unique branches for the selected category
    const uniqueBranches = [...new Set(data
        .filter(note => note.category === presentCategory)
        .map(note => note.branch))];

    // Get unique years for the selected branch
    const yearsForBranch = [...new Set(data
        .filter(note => note.category === presentCategory && note.branch === selectedBranch)
        .map(note => note.year))];

    // Get subjects for the selected year
    const subjectsForYear = data
        .filter(note => note.category === presentCategory && note.branch === selectedBranch && note.year === selectedYear);

    // Toggle year visibility
    const handleBranchClick = (branch) => {
        setSelectedBranch(branch);
        setSelectedYear("1"); // Reset year when branch changes
    };

    return (
      <div className="mx-2 bg-gray-900 min-h-screen text-white">
      {/* Top section with title and category select */}
        <div className="w-full bg-gray-800 p-5 border-y m-0 gap-2 flex md:flex-row flex-col justify-start md:justify-between border-y text-white pb-6">
          <div className="flex gap-2 items-center md:text-xl text-xs">
            <FaPen className="text-lg md:text-xl" />
            <span className="text-xl md:text-2xl font-bold">Notes</span>
          </div>
          <select
            className="border-none outline-none rounded-lg p-2 pr-8 bg-black text-white"
            onChange={(e) => setPresentCategory(e.target.value)}
            defaultValue={presentCategory}
          >
            {category.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Main content section */}
        <div className="w-full h-full flex flex-col md:flex-row cursor-pointer">
          {/* Sidebar for branches */}
          <aside className="md:border-r border-none flex md:flex-col flex-row md:w-1/5 w-full overflow-x-auto h-full bg-gray-800 text-white">
            {uniqueBranches.map((branch) => (
              <div
                key={branch}
                className="border-b border-gray-600 m-2 p-4 hover:bg-blue-300 flex items-center justify-between rounded-lg transition-colors duration-200"
                onClick={() => handleBranchClick(branch)}
              >
                {branch}
                <FaCaretDown className="hidden md:block" />
              </div>
            ))}
          </aside>

          {/* Notes list */}
          <div className="flex-1 p-4">
            {subjectsForYear.length > 0 ? (
              subjectsForYear.map((note) => (
                <div
                  key={note.subject}
                  className="mx-10 flex justify-between items-center w-full p-4 border-2 border-gray-300 mb-2 rounded-lg shadow-md transition-transform transform hover:scale-105"
                >
                  <a
                    href={note.notesLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white font-semibold hover:underline"
                  >
                    {note.subject}
                  </a>
                  <p className="flex items-center text-gray-600 gap-2">
                    <GoPerson className="mt-1" />
                    {note.author}
                  </p>
                </div>
              ))
            ) : (
              <p className="text-gray-600">No subjects available for this year.</p>
            )}
          </div>
        </div>
      </div>
    );
}

export default FilterNotes;
