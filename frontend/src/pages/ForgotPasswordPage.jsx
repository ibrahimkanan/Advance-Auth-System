import { motion } from "motion/react";
import { useState } from "react";
import { Mail, ArrowLeft, Loader } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuthStore } from "../store/authStore";
import Input from "../components/Input.jsx";

const ForgotPasswordPage = () => {
    const [email, setEmail] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);

    const { forgotPassword, isLoading, error } = useAuthStore();

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            await forgotPassword(email);
            setIsSubmitted(true);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className="flex min-h-screen items-center justify-center p-4">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-md w-full bg-gray-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-5 border border-gray-100 flex flex-col"
            >
                <div className="p-8">
                    <h1 className="text-3xl text-gray-100 font-bold mb-4 text-center">
                        Forgot Password
                    </h1>
                    {!isSubmitted ? (
                        <form className="space-y-6">
                            <p className="text-center text-gray-300 mb-6 text-sm">
                                Enter your email address and we will send you a
                                link to reset your password.
                            </p>
                            <Input
                                icon={Mail}
                                placeholder="Email Address"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            {error && (
                                <p className="text-red-500 text-center text-sm">
                                    {error}
                                </p>
                            )}

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={handleSubmit}
                                type="button"
                                className="w-full flex justify-center items-center gap-2 px-4 py-2 rounded-md bg-gray-100 text-gray-900 hover:bg-gray-200 transition-colors"
                            >
                                {isLoading ? (
                                    <Loader className="size-5 text-gray-900 animate-spin" />
                                ) : (
                                    <>
                                        <span className="text-gray-900 font-bold">
                                            Send Reset Link
                                        </span>
                                    </>
                                )}
                            </motion.button>
                        </form>
                    ) : (
                        <div className="space-y-6 flex flex-col items-center justify-center">
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className="h-20 w-20 rounded-full bg-gray-100/20 flex items-center justify-center">
                                    <Mail className="size-12 text-gray-100" />
                                </div>
                            </motion.div>
                            <p className="text-center text-gray-300 mb-6 text-sm">
                                If an account with this email:{" "}
                                <span className="font-bold text-gray-100">
                                    {email}
                                </span>{" "}
                                exists, a password reset link has been sent to
                                your email.
                            </p>
                        </div>
                    )}
                </div>

                <div className="px-8 pb-4 pt-4 border-t border-black/30 bg-black/30 flex items-center justify-center gap-2 rounded-b-md mt-auto">
                    <ArrowLeft className="size-4 text-gray-100" />
                    <Link
                        to="/login"
                        className="text-gray-100 hover:text-gray-200 transition-colors font-bold underline-offset-2 hover:underline text-sm"
                    >
                        Back to Login
                    </Link>
                </div>
            </motion.div>
        </div>
    );
};

export default ForgotPasswordPage;
