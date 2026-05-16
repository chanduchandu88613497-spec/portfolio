const express = require('express');
const cors = require('cors');
const db = require('./db');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  const query = `INSERT INTO messages (name, email, message) VALUES (?, ?, ?)`;
  
  db.run(query, [name, email, message], function(err) {
    if (err) {
      console.error('Error inserting message:', err.message);
      return res.status(500).json({ error: 'Failed to send message.' });
    }
    
    console.log(`New message received from ${email}. ID: ${this.lastID}`);
    res.status(201).json({ success: true, message: 'Message sent successfully!', id: this.lastID });
  });
});

app.get('/api/messages', (req, res) => {
  const query = `SELECT * FROM messages ORDER BY created_at DESC`;
  
  db.all(query, [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to retrieve messages.' });
    }
    res.json({ messages: rows });
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
