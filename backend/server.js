require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const connectDB = require("./config/dbConn");
const cors = require("cors");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 3500;

connectDB();

// Cross Origin Resource Sharing
const whitelist = [
    "http://localhost:" + PORT,
    "https://www.google.com.ua",
    "http://localhost:3000",
    "http://192.168.0.100:3000",
];
const corsOptions = {
    origin: (origin, callback) => {
        if (whitelist.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    optionsSuccessStatus: 200,
    credentials: true,
};

app.use(cors(corsOptions));

app.use(bodyParser.json({ limit: "20mb" }));
app.use(bodyParser.urlencoded({ limit: "20mb", extended: true }));

app.use(express.urlencoded({ extended: false }));

// built-in middleware for json
app.use(express.json());

app.use("/api/superheroes", require("./routes/api/superHero"));

app.all("*", (req, res) => {
    res.status(404);
    res.json({ error: "404 Not Found" });
});

mongoose.connection.once("open", () => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});
