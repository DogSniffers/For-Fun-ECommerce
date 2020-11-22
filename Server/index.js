require('dotenv').config()
const express = require('express')
const session = require('express-session')
const massive = require('massive')
const {SERVER_PORT,CONNECTION_STRING,SESSION_SECRET} = process.env

const app = express()
app.use(express.json())
app.use(
    session({
        resafe:false,
        saveUninitialized:true,
        rejectUnauthorized:false,
        secret:SESSION_SECRET
    })
)
massive({
    connectionString:CONNECTION_STRING,
    ssl:{
        rejectUnauthorized:false
    }
}).then(db => {
    const port = SERVER_PORT
    app.set('db',db)
    app.listen(port || 6542, () => {
        console.log(`Connected to ${port}`)
    })
})