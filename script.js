//constants
const express = require('express')
const cors = require('cors')
const appetizerController = require('./controllers/AppetizerController')
const entreeController = require('./controllers/EntreeController')
const dessertController = require('./controllers/DessertController')
const PORT = process.env.PORT || 3001

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.listen(PORT, () => {
    console.log(`listening to port ${PORT}`)
})

app.get('/', (req,res) => {
    res.send(`working!`)
})
 
//appitizers 
app.get('/appetizers', appetizerController.getAppetizers)
app.get('/appetizers/:id', appetizerController.getAppetizer)
app.get('/veggitarianappetizers', appetizerController.getVegitarianApps)

// entrees
app.get('/entrees', entreeController.getEntrees)
app.get('/entrees/:id', entreeController.getEntree)
app.get('/veggitarianentrees', appetizerController.getVegitarianApps)

//deserts 
app.get('/desserts', dessertController.getDesserts)
app.get('/desserts/:id', dessertController.getDessert)