const express = require('express')
const cors = require('cors')
const mysql = require('mysql2')
require('dotenv').config()

const app = express()

const connection = mysql.createConnection(process.env.DATABASE_URL)

app.get('/', function(req, res, next){
    res.json({msg: 'Hello World'})
})

app.get('/typeoil', function(req, res, next){
    connection.query(
        'SELECT * FROM typeOil',
        function(err, results, fields){
            res.json(results)
        }
    )
})

app.listen(process.env.PORT || 3000)