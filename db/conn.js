// database connections
const mongoose = require("mongoose");
require("dotenv").config();

// const uri = "mongodb://localhost:27017/automatic-email-sender";
const uri = "mongodb+srv://jwtuser:pass@11@cluster0.vzhly.mongodb.net/automatic-email-sender?";
// const uri = "mongodb+srv://darshan123:darshan123@cluster0.bqisf.mongodb.net/automatic-email-sender?"
mongoose.connect(uri, {
    useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false
}).then((data) => {
    console.log("DB is connected..");
}).catch((err) => {
    console.log(err);
});
const connection = mongoose.connection;
connection.once("open", () => {
    console.log("Database connected sucessfully");
})