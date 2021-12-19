const express = require('express')
const app = express()
const PORT = 2015 || process.env.PORT
require('dotenv').config()
const { auth } = require('express-openid-connect')
const { requiresAuth } = require('express-openid-connect')
app.set('views', 'views')
app.set('view engine', 'ejs')
app.use(express.static('public'))

const config = {
    authRequired: false,
    auth0Logout: true,
    secret: process.env.SECRET,
    baseURL: process.env.BASEURL,
    clientID: process.env.CLIENTID,
    issuerBaseURL: process.env.ISSUERBASEURL
}


app.use(auth(config));
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
app.listen(PORT, console.log(`✨ Live on http://localhost://${PORT}`))