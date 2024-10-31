require('dotenv').config();  // Load environment variables

const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;  // Use PORT from .env or default to 5000

app.use(cors());
app.use(express.json());

let notes = [];

// Categories and Branches for frontend dropdowns
const categories = ["Engineering", "MCA", "Programming"];
const branches = ["Electrical", "Computer Science", "Mechanical"];

// Endpoint to get all notes
app.get('/notes', (req, res) => {
    console.log("Fetching all notes");
    res.json(notes);
});

// Endpoint to add a new note
app.post('/notes', (req, res) => {
    const newNote = { id: Date.now(), ...req.body };
    notes.push(newNote);
    console.log("Note added:", newNote);
    res.status(201).json(newNote);
});

// Endpoint to delete a note by ID
app.delete('/notes/:id', (req, res) => {
    const noteId = parseInt(req.params.id);
    if (isNaN(noteId)) return res.status(400).json({ error: 'Invalid note ID' });

    const noteIndex = notes.findIndex(note => note.id === noteId);
    if (noteIndex !== -1) {
        notes.splice(noteIndex, 1);
        console.log("Note deleted with ID:", noteId);
        res.status(200).json({ message: 'Note deleted successfully' });
    } else {
        res.status(404).json({ error: 'Note not found' });
    }
});

// Endpoint to get categories
app.get('/categories', (req, res) => {
    console.log("Fetching categories");
    res.json(categories);
});

// Endpoint to get branches
app.get('/branches', (req, res) => {
    console.log("Fetching branches");
    res.json(branches);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
