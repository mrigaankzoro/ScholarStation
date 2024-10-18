import React, { useState } from 'react';
import { data } from '../notesDemoData';
import { FaCaretDown } from 'react-icons/fa';
import { GoPerson } from "react-icons/go";

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
    };

    return (
        <div className="p-6 bg-gray-100">
            <div className="text-black mb-4">
                <div className="relative inline-block">
                    <select 
                        className="border rounded p-2 pr-8"
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
            </div>
            <div className="flex flex-col md:flex-row">
                <div className="flex-1 mb-4 md:mb-0">
                    {uniqueBranches.length === 0 ? (
                        <p>No data present for selected category.</p>
                    ) : (
                        uniqueBranches.map((branch) => (
                            <div 
                                key={branch} 
                                className="relative w-full p-4 border-2 border-gray-300 mb-2 cursor-pointer hover:bg-gray-200" 
                                onClick={() => handleBranchClick(branch)}
                            >
                                <h3 className="font-semibold">
                                    {branch}
                                    <FaCaretDown className="absolute right-2 top-2 text-gray-500" />
                                </h3>
                                
                                {showYears && selectedBranch === branch && (
                                    <div className="mt-2">
                                        {yearsForBranch.length > 0 ? (
                                            <ul>
                                                {yearsForBranch.map((year, index) => (
                                                    <li 
                                                        key={index} 
                                                        className="cursor-pointer hover:text-blue-500"
                                                        onClick={() => setSelectedYear(year)}
                                                    >
                                                        {year} year
                                                    </li>
                                                ))}
                                            </ul>
                                        ) : (
                                            <p>No years available.</p>
                                        )}
                                    </div>
                                )}
                            </div>
                        ))
                    )}
                </div>
                <div className="flex-1">
                    {/* {subjectsForYear.length === 0 ? (
                        <p>No subjects available for the selected category, branch, and year.</p>
                    ) : ( */}
                        {subjectsForYear.map((note) => (
                            <div key={note.subject} className="flex justify-between items-center w-full p-4 border-2 border-gray-300 mb-2">
                                <a 
                                    href={note.notesLink} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="text-white hover:underline"
                                >
                                    {note.subject}
                                </a>
                                <p className="flex items-center text-gray-600 gap-2">
                                    <GoPerson className='mt-1' /> 
                                    {note.author}
                                </p>
                            </div>
                        ))}
                    {/* )} */}
                </div>
            </div>
        </div>
    );
}

export default FilterNotes;
