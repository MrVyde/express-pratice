const express = require("express");
const authorRouter = require('./routes/authorRouter');

const app = express();

// Example middleware: logging
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Use the author router
app.use("/authors", authorRouter);

// Error-handling middleware (special 4-arg signature)
app.use((err, req, res, next) => {
  console.error("Error caught by middleware:", err.stack);
  res.status(500).send("Internal Server Error");
});


app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});

