const express = require('express');
const app = express();
const port = 3000;

// Middleware to log each request
app.use((req, res, next) => {
  console.log(`Request to ${req.path} with ${req.query.param} at ${new Date().toISOString()}`);
  next();
});

// Middleware to introduce a 200ms delay
const delayMiddleware = (req, res, next) => {
  setTimeout(() => {
    next();
  }, 600);
};

// Apply the delay middleware to all routes
app.use(delayMiddleware);

// Route for /left
app.get('/left', (req, res) => {
  res.json({ name: 'left' });
});

// Route for /center
app.get('/center', (req, res) => {
  res.json({ name: 'center' });
});

// Route for /right
app.get('/right', (req, res) => {
  res.json({ name: 'right' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
