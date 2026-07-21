import { motion } from "motion/react";
import { useState } from "react";
import Input from "../components/Input";
import { User, Mail, Lock, Loader } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import PasswordStrengthMeter from "../components/PasswordStrengthMeter";
import { useAuthStore } from "../store/authStore";

const SignUpPage = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { signup, error, isLoading } = useAuthStore();
    const navigate = useNavigate();

    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            await signup(email, password, name);
            navigate("/verify-email");
        } catch (error) {
            console.error("Error creating account:", error);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-md w-full bg-gray-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-5 border border-gray-100"
        >
            <div className="p-8">
                <h2 className="text-3xl text-gray-100 font-bold mb-6 text-center p-4">
                    Welcome To Our Website
                </h2>
                <p className="text-center text-gray-100 mb-6">
                    Please Fill In The Form Below
                </p>

                <form onSubmit={handleSignUp}>
                    <Input
                        type="text"
                        placeholder="Full Name"
                        required
                        name="username"
                        autoComplete="off"
                        icon={User}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <Input
                        type="email"
                        placeholder="Email"
                        required
                        name="email"
                        autoComplete="off"
                        icon={Mail}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <Input
                        type="password"
                        placeholder="Password"
                        required
                        name="password"
                        autoComplete="off"
                        icon={Lock}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {error && (
                        <p className="text-red-500 text-center mt-2 font-semibold">
                            {error}
                        </p>
                    )}
                    {/* password strength meter */}
                    <PasswordStrengthMeter password={password} />

                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        disabled={isLoading}
                        className="w-full px-4 py-2 rounded-md bg-gray-100 text-gray-900 hover:bg-gray-200 transition-colors"
                    >
                        {isLoading ? (
                            <div className="flex items-center justify-center">
                                <Loader className="animate-spin rounded-full h-4 w-4 border-b-2 border-gray-900" />
                            </div>
                        ) : (
                            <span className="text-gray-900 font-bold">
                                Sign Up
                            </span>
                        )}
                    </motion.button>
                </form>
            </div>
            <div className="px-8 pb-4 pt-4 border-t border-black/30 bg-black/30 flex items-center justify-center gap-2 rounded-b-md">
                <p className="text-gray-100">Already have an account?</p>
                <Link
                    to="/login"
                    className="text-gray-100 hover:text-gray-200 transition-colors font-bold underline-offset-2 hover:underline"
                >
                    Login
                </Link>
            </div>
        </motion.div>
    );
};

export default SignUpPage;
