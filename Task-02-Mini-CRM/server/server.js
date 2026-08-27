const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRouter = require('./routes/authRoutes');
const leadRouter = require('./routes/leadRoutes');


dotenv.config()
const port = process.env.PORT || 3000;

const app = express();

app.use(express.json())
app.use(cors({
    origin: "http://localhost:5173"
}))


app.use('/api', authRouter);
app.use('/api', leadRouter);

connectDB()

app.listen(port, () => {
    console.log(`server running on port ${port}`)
})