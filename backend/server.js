
const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT;

const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");

// Connect to the database
connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.status(200).send("Hello World!");
});

// Routes
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/tickets", require("./routes/ticketRoutes"));

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
