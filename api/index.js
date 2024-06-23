
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const port = 8001;

// Connect to MongoDB
mongoose.connect( "mongodb+srv://ankitjha:ankitjha@cluster0.e3dwc7p.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(() => {
  console.log('MongoDB Connected');
})
.catch((err) => {
  console.error('MongoDB Connection Error:', err);
  process.exit(1); // Exit process with failure
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
