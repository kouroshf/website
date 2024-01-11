const express = require('express');
const app = express();

// Serve static files from the public folder
app.use(express.static('public'));

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
