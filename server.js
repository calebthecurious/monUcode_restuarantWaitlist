const express = require('express')  //gets the package from express tod o server things
const path = require('path')
const app = express(); //tells node we are creating express server

const port = 8080//sets port

const reservedarray = [], waitingarray = []

app.use(express.urlencoded({ extended: true }));//sets up the express app to handle the data parsing
app.use(express.json());

app.get('/', (req,res)=> res.sendFile(path.join(__dirname,'home.html')))
app.get('/reservations', (req,res)=> res.sendFile(path.join(__dirname,'reservations.html')))
app.get('/table', (req,res)=> res.sendFile(path.join(__dirname,'table.html')))


app.get('/api/reserved', (req,res)=> res.json(reservedarray))
app.get('/api/waiting', (req,res)=> res.json(waitingarray))

app.listen(port, () => {
    console.log(`App listening on PORT: ${port}`);
  });

