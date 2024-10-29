import React, { useState } from 'react';
import { FaPen } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; // Updated import

const AddNote = () => {
    const [note, setNote] = useState({
        category: '',
        branch: '',
        year: '',
        subject: '',
        notesLink: '',
        author: ''
    });

    const navigate = useNavigate(); // Use useNavigate instead of useHistory

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNote({
            ...note,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await fetch('http://localhost:5000/notes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(note),
        });

        // Reset form
        setNote({
            category: '',
            branch: '',
            year: '',
            subject: '',
            notesLink: '',
            author: ''
        });

        // Navigate to the filter notes page
        navigate('/filter-notes'); // Adjust the path as needed
    };

    return (
        <div className="bg-gray-900 min-h-screen text-black flex items-center justify-center p-4">
            <div className="w-full max-w-md bg-gray-800 p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                    <FaPen className="text-lg mr-2" />
                    <h2 className="text-2xl font-bold">Add New Note</h2>
                </div>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <input 
                        type="text" 
                        name="category" 
                        placeholder="Category" 
                        value={note.category} 
                        onChange={handleChange} 
                        required 
                        className="p-2 rounded-lg bg-gray-700 border border-gray-600"
                    />
                    <input 
                        type="text" 
                        name="branch" 
                        placeholder="Branch" 
                        value={note.branch} 
                        onChange={handleChange} 
                        required 
                        className="p-2 rounded-lg bg-gray-700 border border-gray-600"
                    />
                    <input 
                        type="text" 
                        name="year" 
                        placeholder="Year" 
                        value={note.year} 
                        onChange={handleChange} 
                        required 
                        className="p-2 rounded-lg bg-gray-700 border border-gray-600"
                    />
                    <input 
                        type="text" 
                        name="subject" 
                        placeholder="Subject" 
                        value={note.subject} 
                        onChange={handleChange} 
                        required 
                        className="p-2 rounded-lg bg-gray-700 border border-gray-600"
                    />
                    <input 
                        type="text" 
                        name="notesLink" 
                        placeholder="Notes Link" 
                        value={note.notesLink} 
                        onChange={handleChange} 
                        required 
                        className="p-2 rounded-lg bg-gray-700 border border-gray-600"
                    />
                    <input 
                        type="text" 
                        name="author" 
                        placeholder="Author" 
                        value={note.author} 
                        onChange={handleChange} 
                        required 
                        className="p-2 rounded-lg bg-gray-700 border border-gray-600"
                    />
                    <button type="submit" className="bg-blue-500 p-2 rounded-lg hover:bg-blue-600 transition duration-200">
                        Add Note
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddNote;
AddNote;
