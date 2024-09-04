const express = require('express')

const app = express()

app.get("/",function(req,res){
    res.send("Hello Bro, I am starting")
})

app.listen(3000)