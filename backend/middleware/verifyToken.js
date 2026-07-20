import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

export const verifyToken = async (req, res, next) => {
    const token = req.cookies.jwt;

    try {
        if (!token) {
            return res
                .status(401)
                .json({ success: false, message: "Unauthorized" });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        if (!decoded) {
            return res
                .status(401)
                .json({ success: false, message: "Unauthorized" });
        }

        req.userId = decoded.userId;
        next();
    } catch (error) {
        console.log("Verify token failed", error.message);
        res.status(500).json({ success: false, message: error.message });
    }
};
