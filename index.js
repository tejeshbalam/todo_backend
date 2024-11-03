const express = require('express')
const dbConnect = require("./config/database");
const app = express();
const todo = require("./routes/todo");

require("dotenv").config();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/api/v1", todo);

app.listen(PORT , () =>{
    console.log(`server started at ${PORT} Successfully`);
})

dbConnect();

app.get("/" , (request,responce) => {
    responce.send("<h1>welcome to home page</h1>")
})