require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;
const contactEmail = process.env.CONTACT_EMAIL || 'contact@alucard-hosting.com';

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  console.log('New contact request:', { name, email, message });
  console.log(`Contact email destination: ${contactEmail}`);

  res.json({ success: true, message: 'Thanks! Your request has been received.' });
});

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

app.listen(port, () => {
  console.log(`Alucard Hosting is running at http://localhost:${port}`);
});
