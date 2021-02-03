const express = require('express')
const path = require('path')

app = express()

const publicDirectoryPath = path.join(__dirname,'../public')

app.use(express.static(publicDirectoryPath))

app.get('/' ,(req,res) => {
       res.send('Welcome to Express!')
})


app.get('/weather',(req,res) => {
    res.send('weather Page ')
})

app.listen(3000, () =>{
    console.log('Server Started on Port 3000')
})