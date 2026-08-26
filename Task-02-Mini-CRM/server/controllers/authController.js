const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User.js');
const dotenv = require('dotenv');

dotenv.config()

const register = async (req, res) => {
    try {
        const { fullName, email, password } = req.body;

        if (!fullName || !email || !password) {
            return res.status(400).json({
                message: "Full name, email and password are required"
            });
        }
        const existingUser = await User.findOne({email});

        if (existingUser) {
            return res.status(409).json({
                message: "User already exists",
            })
        }
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            fullName,
            email,
            password: hashedPassword,
        })
        const token = jwt.sign(
            { userId: user._id },
            process.env.JWT_SECRET,
            { expiresIn: "7d" }
        )

        res.status(201).json({
            message: "User registered successfully",
            token,
            user: {
            id: user._id,
            fullName: user.fullName,
            email: user.email,
            },
        })
    } catch (error) {
        console.error("Registration error:", error)

        res.status(500).json({
            message: "server error",
        });
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if(!email || !password) {
            return res.status(400).json({
                message: "Email and password are required",
            })
        }
        const user = await User.findOne({ email }).select("+password");

        if (!user) {
            return res.status(401).json({
                message: "Invalid email or password",
            })
        }

        const isPasswordCorrect = await bcrypt.compare(
            password,
            user.password
        )

        if (!isPasswordCorrect) {
            return res.status(401).json({
                message: "Invalid email or password",
            })
        }

        const token = jwt.sign(
            { userId: user._id },
            process.env.JWT_SECRET,
            { expiresIn: "7d" }
        )

        res.status(200).json({
            message: "Login successful",
            token,
            user: {
            id: user._id,
            fullName: user.fullName,
            email: user.email,
      },
        })
    } catch (error) {
        console.log("LOgin error:". error);

        res.status(500).json({
            message: "server error"
        });
    }
};

module.exports = [
    login,
    register
]