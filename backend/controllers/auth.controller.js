import bcrypt from "bcryptjs";
import User from "../models/user.model.js";
import { genereateTokenAndSetCookie } from "../utils/genereateTokenAndSetCookie.js";

export const signup = async (req, res) => {
    const { email, name, password } = req.body;

    try {
        if (!email || !password || !name) {
            throw new Error("Please provide all the required fields");
        }

        const userAreadyExists = await User.findOne({ email });

        if (userAreadyExists) {
            throw new Error("User already exists");
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const verificationToken = Math.floor(
            100000 + Math.random() * 900000,
        ).toString();
        const verificationTokenExpireAt = new Date(Date.now() + 10 * 60 * 1000);

        const user = await User.create({
            email,
            password: hashedPassword,
            name,
            verificationToken,
            verificationTokenExpireAt,
        });

        await user.save();

        //jwt
        genereateTokenAndSetCookie(res, user._id);

        res.status(201).json({
            success: true,
            message: "User created successfully",
            user: {
                ...user._doc,
                password: "undefined",
            },
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};
export const login = async (req, res) => {
    res.send("Login route");
};
export const logout = async (req, res) => {
    res.send("Logout route");
};
