const express = require('express')
const app = express()
const PORT = 2015 || process.env.PORT
require('dotenv').config()
const { auth } = require('express-openid-connect')
const { requiresAuth } = require('express-openid-connect')


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
    res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
})

// ROUTES
const homeRoute = require('./routes/Home')
app.use('/home', homeRoute)

app.get('*', (req, res)=>{
    res.json({'message': '🙈 404!'})
})
app.listen(PORT, console.log(`✨ Live on http://localhost://${PORT}`))