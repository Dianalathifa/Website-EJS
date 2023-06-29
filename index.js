const express = require('express');
const app = express()
const data = require('./data.json')
app.set('view engine', 'ejs')

const mahasiswa = [{
    nim: "V3922016",
    name: "Diana Lathifa"
},
{
    nim: "V3922014",
    name: "Deswinta"
},
{
    nim: "V3922015",
    name: "Diah Munica"
}]
app.get('/v1', (req, res) => {

    const address = req.query.address;
    const name = req.query.name
//   res.send('Hello World from Express')

    // res.sendFile('./index.html', { root: __dirname})
    res.render('index', {name, address})
})
 
app.get('/v1/profile', (req, res) => {
   
    res.render('profile', { mahasiswa })
    // res.sendFile('./profile.html', { root: __dirname})
})

app.get('/v1/listmahasiswa', (req, res) => {
        const newMahasiswa = data.data;
    
        console.log(newMahasiswa, 'HALO DATA NEW MAHASISWA???')
})
app.listen(3001, () => {
    console.log('Haloo I`m listening to port 3001')
})