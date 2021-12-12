const express = require('express')
const app = express()
const PORT = 2015 || process.env.PORT
const {conn} = require('./Config/DB/Connection')

app.get('/', (req, res)=>{
    res.json({"message": "Hello Clarice 😬"})
})


app.get('*', (req, res)=>{
    res.json({'message': '🙈 404!'})
})
app.listen(PORT, console.log(`✨ Live on http://localhost://${PORT}`))