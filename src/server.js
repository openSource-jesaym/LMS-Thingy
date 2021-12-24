const express = require('express')
const app = express()
const PORT = 2015 || process.env.PORT
// require('dotenv').config()
app.set('views', 'views')
app.set('view engine', 'ejs')
app.use(express.static('public'))


app.get('/', (req, res)=>{
    // res.json({"message": "Hello Clarice 😬"})
    res.render('index')
})

// ROUTES
const homeRoute = require('./routes/Home')
app.use('/home', homeRoute)

app.get('*', (req, res)=>{
    res.json({'message': '🙈 404!'})
})
app.listen(PORT, console.log(`✨ Live on port ${PORT}`))