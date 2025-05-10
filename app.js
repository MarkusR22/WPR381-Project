// app.js

const express = require("express");
const path = require("path");
const pageRoutes = require("./routes/pageRoutes");

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true}));
app.use("/", pageRoutes);

app.use((req, res) => {
  res.status(404).render('404', {url: req.originalUrl});
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500);
  res.render('error', { error: err });
})

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
