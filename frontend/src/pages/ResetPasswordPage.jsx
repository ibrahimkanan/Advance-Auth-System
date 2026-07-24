import { motion } from "motion/react";
import { Lock, Loader } from "lucide-react";
import { useState } from "react";
import { useAuthStore } from "../store/authStore";
import { useNavigate, useParams } from "react-router-dom";
import Input from "../components/Input";
import toast from "react-hot-toast";

const ResetPasswordPage = () => {
    const { resetPassword, isLoading, error: storeError } = useAuthStore();
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const { token } = useParams();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            toast.error("Passwords do not match");
            return;
        }

        try {
            await resetPassword(token, password);

            toast.success(
                "Password reset successfully, redirecting to login...",
            );

            setTimeout(() => {
                navigate("/login");
            }, 2000);
        } catch (err) {
            console.error(err);
            toast.error(
                err.response?.data?.message ||
                    err.message ||
                    "Failed to reset password",
            );
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center p-4 w-full">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-md w-full bg-gray-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-5 border border-gray-100"
            >
                <div className="p-8">
                    <h1 className="text-3xl text-gray-100 font-bold mb-6 text-center">
                        Reset Password
                    </h1>

                    {storeError && (
                        <p className="text-center text-red-500 mb-6 text-sm">
                            {storeError}
                        </p>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <Input
                            placeholder="Enter Password"
                            type="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            icon={Lock}
                            required
                        />
                        <Input
                            placeholder="Confirm Password"
                            type="password"
                            name="confirmPassword"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            icon={Lock}
                            required
                        />

                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            type="submit"
                            disabled={isLoading}
                            className="w-full flex justify-center items-center px-4 py-2 rounded-md bg-gray-100 text-gray-900 hover:bg-gray-200 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {isLoading ? (
                                <Loader className="size-5 text-gray-900 animate-spin" />
                            ) : (
                                <span className="text-gray-900 font-bold">
                                    Reset Password
                                </span>
                            )}
                        </motion.button>
                    </form>
                </div>
            </motion.div>
        </div>
    );
};

export default ResetPasswordPage;
