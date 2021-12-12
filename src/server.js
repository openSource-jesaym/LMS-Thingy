const express = require('express')
const app = express()
const PORT = 2015 || process.env.PORT

app.get('/', (req, res)=>{
    res.json({"message": "Hello Clarice 😬"})
})

// ROUTES
const homeRoute = require('./routes/Home')
app.use('/home', homeRoute)

app.get('*', (req, res)=>{
    res.json({'message': '🙈 404!'})
})
app.listen(PORT, console.log(`✨ Live on http://localhost://${PORT}`))