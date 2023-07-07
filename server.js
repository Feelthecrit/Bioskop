const express = require('express');
const app = express();
const path = require('path');

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Serve login.html as the main page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'login.html'));
});


// Startuje server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
