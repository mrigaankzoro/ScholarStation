require("dotenv").config()

const express = require("express")
const app = express();

const PORT = process.env.PORT

app.get('/', (req, res)=>{
    res.send("Hello I am Scholar Station API")
})

app.listen(PORT, (err)=>{
    console.log("App is listening on PORT: ", PORT)

})


