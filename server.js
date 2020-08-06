const express = require("express");
const mongoose = require("mongoose");
const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/api/config", (req, res) => {
  res.json({
    success: true,
  });
});

mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost/react-portfolio", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("connected to database :)");
  })
  .catch((err) => {
    console.log("couldn't connect :(");
    console.log(err);
  });

app.listen(PORT, () => {
  console.log(`express server running on http://localhost${PORT}`);
});
