const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

let notes = []; // In-memory storage for notes

// Endpoint to get all notes
app.get('/notes', (req, res) => {
    res.json(notes);
});

// Endpoint to add a new note
app.post('/notes', (req, res) => {
    const newNote = req.body;
    notes.push(newNote);
    res.status(201).json(newNote); // Respond with the created note
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
