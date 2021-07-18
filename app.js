const mongoose = require('mongoose');
const express = require("express");
const db = require('./config/keys').mongoURI;
const users = require("./routes/api/users");
const User = require('./models/User');
const passport = require('passport');
require('./config/passport')(passport);
const app = express();

mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch(err => console.log(err));

app.use(passport.initialize());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/users", users);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));



