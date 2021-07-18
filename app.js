const mongoose = require('mongoose');
const express = require("express");
const db = require('./config/keys').mongoURI;
const users = require("./routes/api/users");
const twitter = require("./routes/api/twitter");
const User = require('./models/User');
const passport = require('passport');
require('./config/passport')(passport);
const app = express();

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('frontend/build'));
    app.get('/', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
    })
}

mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch(err => console.log(err));

app.use(passport.initialize());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/users", users);
app.use("/api/tweets", twitter);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));



