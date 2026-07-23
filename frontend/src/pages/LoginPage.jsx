import { motion } from "motion/react";
import { useState } from "react";
import { useAuthStore } from "../store/authStore.js";
import Input from "../components/Input";
import { Mail, Lock, Loader } from "lucide-react";
import { Link } from "react-router-dom";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login, isLoading, error } = useAuthStore();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await login(email, password);
        } catch (error) {
            console.log(error);
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
                    Welcome Back
                </h2>
                <p className="text-center text-gray-100 mb-6">
                    Please Fill In The Form Below
                </p>

                <form onSubmit={handleLogin}>
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
                    <div className="flex items-center mb-4">
                        <Link
                            to="/forgot-password"
                            className="text-gray-100 hover:text-gray-200 transition-colors underline-offset-2 hover:underline"
                        >
                            Forgot Password?
                        </Link>
                    </div>
                    {error && (
                        <p className="text-red-500 text-center mb-4">{error}</p>
                    )}

                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        className="w-full px-4 py-2 rounded-md bg-gray-100 text-gray-900 hover:bg-gray-200 transition-colors"
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <div className="flex items-center justify-center">
                                <Loader className="size-5 text-gray-900 animate-spin" />
                            </div>
                        ) : (
                            <span className="text-gray-900 font-bold">
                                Login
                            </span>
                        )}
                    </motion.button>
                </form>
            </div>
            <div className="px-8 pb-4 pt-4 flex items-center justify-center gap-2 border-t border-black/30 bg-black/30 rounded-b-md">
                <div className="flex items-center gap-1">
                    <p className="text-gray-100">Don't have an account?</p>
                    <Link
                        to="/signup"
                        className="text-gray-100 hover:text-gray-200 transition-colors font-bold underline-offset-2 hover:underline"
                    >
                        Sign Up
                    </Link>
                </div>
            </div>
        </motion.div>
    );
};

export default LoginPage;
