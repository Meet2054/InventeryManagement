const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRouter = require("./routes/user");
const path = require("path");
const app = express();

app.use(cors());
app.use(express.json());

app.use("/user", userRouter)

app.use(express.static("public"));
app.use("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/index.html"))
})

// Connect to MongoDB
// DONT MISUSE THIS THANKYOU!!
mongoose.connect('mongodb+srv://Meet_Parekh:meetparekh2003@cluster0.jimjnb8.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true, dbName: "Inventery" });

app.listen(3030, () => console.log('Server running on port 3030'));
