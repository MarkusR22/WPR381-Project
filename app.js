// Import required modules
const express = require("express");
const path = require("path");
const pageRoutes = require("./routes/pageRoutes");

// Create an instance of the Express application
const app = express();

// Define the port the server will listen on
const port = 3000;

// Serve static files (like CSS, JS, images) from the "public" directory
app.use(express.static(path.join(__dirname, "public")));

// Set the view engine to EJS (Embedded JavaScript Templates)
app.set("view engine", "ejs");

// Set the directory where the view templates are stored
app.set("views", path.join(__dirname, "views"));

// Middleware to parse incoming form data (URL-encoded bodies)
app.use(express.urlencoded({ extended: true}));

// Use the routes defined in pageRoutes for all root-level paths
app.use("/", pageRoutes);


// Handle 404 errors (page not found)
app.use((req, res) => {
  res.status(404).render('errors/404', {url: req.originalUrl});
});

// Error-handling middleware for catching all other server errors
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500);
  res.render('errors/error', { error: err });
})

// Start the server and listen on the defined port
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});


