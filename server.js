const express = require('express')
const app = express();
require('dotenv').config();
const { connectDB } = require('./config/dbMySQL')
const productRoutes = require('./routes/productRoutes')

connectDB()

//middlewares => to handle post request

app.use(express.urlencoded({extended:true }))
app.use(express.json())

//route mapping
app.use('/api/products',productRoutes)

//routes would be here
app.get('/', (req,res) => {
    res.status(200).send(`API is running fine now`)
})


const PORT = process.env.PORT || 2000


app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);
})