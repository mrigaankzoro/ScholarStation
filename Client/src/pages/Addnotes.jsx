import React, { useState, useEffect } from 'react';
import { FaPen, FaTrash } from 'react-icons/fa';
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
            await fetchNotes(); // Refresh notes after adding
            setNote({ category: '', branch: '', year: '', subject: '', notesLink: '', author: '' });
            navigate('/filter-notes');
        } catch (err) {
            setError(err.message);
            console.error(err);
        }
    };

    const fetchNotes = async () => {
        try {
            const response = await fetch('https://scholarstation.onrender.com/notes'); // Corrected endpoint URL
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
            await fetchNotes(); // Refresh notes after deletion
        } catch (err) {
            setError(err.message);
            console.error(err);
        }
    };

    useEffect(() => {
        fetchNotes(); // Fetch notes when component mounts
    }, []);

    return (
        <div className="bg-gray-900 min-h-screen text-black flex flex-col items-center p-4">
            <div className="w-full max-w-md bg-gray-800 p-6 rounded-lg text-white shadow-lg">
                <div className="flex items-center mb-4">
                    <FaPen className="text-lg text-white mr-2" />
                    <h2 className="text-2xl font-bold text-white">Add New Note</h2>
                </div>
                {error && <p className="text-red-500 mb-4">{error}</p>}
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    {['category', 'branch', 'year', 'subject', 'notesLink', 'author'].map((field) => (
                        <input
                            key={field}
                            type="text"
                            name={field}
                            placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                            value={note[field]}
                            onChange={handleChange}
                            required
                            className="p-2 rounded-lg bg-gray-700 border border-gray-600"
                        />
                    ))}
                    <button type="submit" className="bg-blue-500 p-2 rounded-lg hover:bg-blue-600 transition duration-200">Add Note</button>
                </form>
            </div>

            <div className="w-full max-w-md bg-gray-800 p-6 rounded-lg shadow-lg mt-4">
                <h2 className="text-2xl font-bold mb-4">Existing Notes</h2>
                {notes.length > 0 ? (
                    notes.map((note) => (
                        <div key={note.id || note._id} className="flex justify-between items-center w-full p-4 bg-gray-700 border border-gray-600 rounded-lg mb-2">
                            <div>
                                <h3 className="text-lg font-semibold">{note.subject}</h3>
                                <p className="text-gray-400">{note.author}</p>
                            </div>
                            <button onClick={() => handleDelete(note.id || note._id)} className="text-red-500 hover:text-red-700">
                                <FaTrash /> Delete
                            </button>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-400">No notes available.</p>
                )}
            </div>
        </div>
    );
};

export default NotesManager;
