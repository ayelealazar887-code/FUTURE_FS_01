const dotenv = require('dotenv');
const mongoose = require('mongoose');
const Lead = require('../models/Lead.js');
const leads = require('./leads.json')

dotenv.config();

const seedDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);

        console.log("MongoDB connected");

        await Lead.deleteMany({});
        await Lead.insertMany(leads);

        console.log("Leads seeded successfully");

        await mongoose.connection.close()
    } catch (error) {
        console.error("Seed error:", error);

        process.exit(1);
    }
}

seedDatabase();