const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const userRoutes = require("./routes/user");

const app = express();
const url = "mongodb+srv://root:dice123@dice-crm.a05cqpn.mongodb.net/?retryWrites=true&w=majority&appName=dice-crm"

// mongodb+srv://<username>:<password>@dice-crm.a05cqpn.mongodb.net/?retryWrites=true&w=majority&appName=dice-crm
const PORT = 8000;

app.use(express.json({ extended: true, limit: "5mb" }))
app.use(bodyParser.json({ extended: true, limit: "5mb" }))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());


// CORS stands for cross origin reference policies;






// { useNewUrlParser: true, useUnifiedTopology: true }
mongoose.connect(url)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is up and running on port ${PORT}`)
            console.log(`Connected to Database`)
        })
    })
    .catch((err) => {
        console.log(err)
    })


// express



app.use("/user", userRoutes);
// app.use("/user", userRoutes);

app.use('/', (req, res, next) => {
    res.send(`Server is up and runnig on port ${PORT}`)
})




// app.use('/about', (req, res) => {
//     res.send('Welcome to Server side about page')
// })