import jwt from "jsonwebtoken";

export const genereateTokenAndSetCookie = (res, userId) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: "15d",
    });

    res.cookie("jwt", token, {
        httpOnly: true, // to prevent XSS attacts
        secure: process.env.NODE_ENV === "production", // https only in production
        sameSite: "strict", // prevent CSRF attacks
        maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days
    });

    return token;
};
