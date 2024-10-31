import React, { useState, useEffect } from 'react';
import { FaCaretDown, FaPen } from 'react-icons/fa';
import { GoPerson } from 'react-icons/go';
import { Link } from 'react-router-dom';
import Modal from './modal'; // Import the Modal component

function FilterNotes() {
    const [notes, setNotes] = useState([]);
    const [category, setCategory] = useState(["Engineering", "MCA", "Programming"]);
    const [presentCategory, setPresentCategory] = useState("Engineering");
    const [selectedBranch, setSelectedBranch] = useState("Electrical");
    const [selectedYear, setSelectedYear] = useState("1");
    const [error, setError] = useState(''); // State to hold error messages
    const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

    const fetchNotes = async () => {
        try {
            const response = await fetch('https://scholarstation.onrender.com/notes'); // Corrected endpoint URL
            if (!response.ok) {
                throw new Error('Failed to fetch notes');
            }
            const data = await response.json();
            setNotes(data);

            // Extract unique categories from notes data and update category state
            const uniqueCategories = Array.from(new Set(data.map(note => note.category)));
            setCategory(uniqueCategories);
            setError('');
        } catch (err) {
            setError(err.message);
            setIsModalOpen(true); // Open the modal when there's an error
        }
    };

    useEffect(() => {
        fetchNotes();
    }, []);

    const uniqueBranches = [...new Set(notes
        .filter(note => note.category === presentCategory)
        .map(note => note.branch))];

    const subjectsForYear = notes
        .filter(note => note.category === presentCategory && note.branch === selectedBranch && note.year === selectedYear);

    const handleBranchClick = (branch) => {
        setSelectedBranch(branch);
        setSelectedYear("1");
    };

    const closeModal = () => {
        setIsModalOpen(false); // Close the modal
    };

    return (
        <div className="mx-2 bg-gray-900 min-h-screen text-white">
            {/* Top section with title and category select */}
            <div className="w-full bg-gray-800 p-5 border-y m-0 gap-2 flex md:flex-row flex-col justify-start md:justify-between border-y text-white pb-6">
                <div className="flex gap-2 items-center md:text-xl text-xs">
                    <FaPen className="text-lg md:text-xl" />
                    <span className="text-xl md:text-2xl font-bold">Notes</span>
                </div>
                <div className="flex items-center">
                    <select
                        className="border-none outline-none rounded-lg p-2 pr-8 bg-black text-white mr-4"
                        onChange={(e) => setPresentCategory(e.target.value)}
                        value={presentCategory}
                    >
                        {category.map((cat) => (
                            <option key={cat} value={cat}>{cat}</option>
                        ))}
                    </select>
                    <Link to="/add-note">
                        <button className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition duration-200">
                            Add Note
                        </button>
                    </Link>
                </div>
            </div>

            {/* Modal for error message */}
            {isModalOpen && <Modal message={error} onClose={closeModal} />}

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
                                className="mx-10 flex md:flex-row flex-col justify-between items-start md:items-center w-full p-4 border-2 border-gray-300 mb-2 rounded-lg shadow-md transition-transform transform hover:scale-105"
                            >
                                <a
                                    href={note.notesLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white font-semibold hover:underline text-base md:text-lg"
                                >
                                    {note.subject}
                                </a>
                                <p className="flex items-center text-gray-400 gap-2 mt-2 md:mt-0 text-sm md:text-base">
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
