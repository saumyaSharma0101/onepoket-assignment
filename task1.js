const express = require("express");

const PORT = 3000;
const app = express();

// Route to handle incoming requests
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
