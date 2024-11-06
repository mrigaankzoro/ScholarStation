import React, { useState, useEffect } from 'react';
import { FaPen, FaTrash, FaBook } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const NotesManager = () => {
    const [note, setNote] = useState({
        category: '',
        branch: '',
        year: '',
        subject: '',
        notesLink: '',
        author: ''
    });
    const [notes, setNotes] = useState([]);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNote((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://scholarstation.onrender.com/notes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(note),
            });
            if (!response.ok) throw new Error('Failed to add note');
            await fetchNotes();
            setNote({ category: '', branch: '', year: '', subject: '', notesLink: '', author: '' });
            navigate('/filter-notes');
        } catch (err) {
            setError(err.message);
            console.error(err);
        }
    };

    const fetchNotes = async () => {
        try {
            const response = await fetch('https://scholarstation.onrender.com/notes');
            if (!response.ok) throw new Error('Failed to fetch notes');
            const data = await response.json();
            setNotes(data);
        } catch (err) {
            setError(err.message);
            console.error(err);
        }
    };

    const handleDelete = async (id) => {
        if (!id) {
            console.error('Invalid note ID.');
            setError('Invalid note ID.');
            return;
        }
        try {
            const response = await fetch(`https://scholarstation.onrender.com/notes/${id}`, { method: 'DELETE' });
            if (!response.ok) throw new Error('Failed to delete note');
            await fetchNotes();
        } catch (err) {
            setError(err.message);
            console.error(err);
        }
    };

    useEffect(() => {
        fetchNotes();
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-gray-100 py-8 px-4">
            <div className="max-w-4xl mx-auto">
                {/* Form Section */}
                <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl shadow-2xl p-8 mb-8 border border-gray-700">
                    <div className="flex items-center mb-6 space-x-3">
                        <div className="p-3 bg-blue-600 rounded-lg">
                            <FaPen className="text-xl text-white" />
                        </div>
                        <h2 className="text-3xl font-bold text-gray-800">
                            Add New Note
                        </h2>

                    </div>

                    {error && (
                        <div className="mb-6 p-4 bg-red-900/30 border border-red-500/50 rounded-lg">
                            <p className="text-red-400">{error}</p>
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-5">
                        {['category', 'branch', 'year', 'subject', 'notesLink', 'author'].map((field) => (
                            <div key={field} className="relative">
                                <input
                                    type="text"
                                    name={field}
                                    placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                                    value={note[field]}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-100 placeholder-gray-500"
                                />
                            </div>
                        ))}
                        <button
                            type="submit"
                            className="w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 rounded-lg text-white font-semibold shadow-lg transform transition-all duration-200 hover:scale-[1.02] focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900"
                        >
                            Add Note
                        </button>
                    </form>
                </div>

                {/* Notes List Section */}
                <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl shadow-2xl p-8 border border-gray-700">
                    <div className="flex items-center mb-6 space-x-3">
                        <div className="p-3 bg-purple-600 rounded-lg">
                            <FaBook className="text-xl text-white" />
                        </div>
                        <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                            Existing Notes
                        </h2>
                    </div>

                    <div className="space-y-4">
                        {notes.length > 0 ? (
                            notes.map((note) => (
                                <div
                                    key={note.id || note._id}
                                    className="group flex justify-between items-center p-4 bg-gray-900/50 border border-gray-700 rounded-lg hover:bg-gray-800/70 transition-all duration-200"
                                >
                                    <div className="flex-1">
                                        <h3 className="text-lg font-semibold text-gray-100">{note.subject}</h3>
                                        <div className="flex items-center space-x-2 mt-1">
                                            <span className="text-sm text-gray-400">{note.author}</span>
                                            <span className="text-gray-600">•</span>
                                            <span className="text-sm text-gray-400">{note.category}</span>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => handleDelete(note.id || note._id)}
                                        className="p-2 text-gray-400 hover:text-red-400 focus:outline-none focus:ring-2 focus:ring-red-400 rounded-lg transition-colors duration-200"
                                    >
                                        <FaTrash className="text-lg" />
                                    </button>
                                </div>
                            ))
                        ) : (
                            <div className="text-center py-8">
                                <p className="text-gray-400">No notes available.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotesManager;