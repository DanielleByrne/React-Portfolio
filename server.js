const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("client/build"))


app.get("/api/config", (req, res) => {
  res.json({
    success: true,
  });
});

app.get("*",(req,res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
})

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
