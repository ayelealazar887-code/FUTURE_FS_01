const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv');
const { default: connectDB } = require('./config/db');

dotenv.config()

const app = express();

connectDB();
app.use(express.json())
app.use(cors())


const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`server running on port ${port}`)
})