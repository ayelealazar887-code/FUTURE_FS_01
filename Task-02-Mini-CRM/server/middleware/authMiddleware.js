const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

const protect = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        message: "Not authorized, no token provided",
      });
    }

    const token = authHeader.split(" ")[1];

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    req.user = {
      _id: decoded.userId,
    };

    next();

  } catch (error) {
    console.error("JWT ERROR:", error.message);

    return res.status(401).json({
      message: "Not authorized, invalid token",
    });
  }
};

module.exports = protect;