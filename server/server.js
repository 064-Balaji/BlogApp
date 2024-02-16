const express = require("express");
const app = express();
const env = require("dotenv").config();
const port = process.env.PORT || 5000;
const { errorHandler } = require("./middleware/errorMiddleware");
const { connectDB } = require("./config/db");

connectDB();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(errorHandler);

app.use(express.static("dist"));

app.use("/api/user", require("./routes/user"));
app.use("/api/blog", require("./routes/blog"));

app.listen(port, () => console.log(`server listening on ${port}`));
