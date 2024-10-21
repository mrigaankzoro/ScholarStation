const Contact = require('../models/Contact');

exports.sendMessage = async (req, res) => {
    try {
        const { name, email, message } = req.body;
        const contactMessage = new Contact({ name, email, message });
        await contactMessage.save();
        res.status(201).json({ message: 'Message sent successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};