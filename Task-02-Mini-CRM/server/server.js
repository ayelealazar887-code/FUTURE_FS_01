const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRouter = require('./routes/authRoutes');


dotenv.config()
const port = process.env.PORT || 3000;

const app = express();

connectDB()


app.use(express.json())
app.use(cors())
app.use('/api', authRouter)

app.listen(port, () => {
    console.log(`server running on port ${port}`)
})