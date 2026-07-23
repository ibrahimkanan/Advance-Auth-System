import { motion } from "motion/react";
import { useAuthStore } from "../store/authStore";
import { formatDate } from "../utils/date";
import { useNavigate } from "react-router-dom";

const DashboardPage = () => {
    const { user, logout } = useAuthStore();
    const navigate = useNavigate();
    const handleLogout = () => {
        try {
            logout();
            navigate("/login");
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            className="max-w-md w-full bg-gray-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-5 border border-gray-100 p-8"
        >
            <h2 className="text-3xl text-gray-100 font-bold mb-6 text-center p-4">
                Dashboard
            </h2>

            <div className="space-y-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="p-6 w-full bg-gray-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-5 border border-gray-100"
                >
                    <h3 className="text-2xl font-bold text-gray-100 mb-4 text-center">
                        Welcome Back
                    </h3>

                    <div className="flex flex-col gap-2 ">
                        <p className="text-gray-300">
                            <span className="font-bold text-gray-100 mr-2">
                                Email:
                            </span>
                            {user?.email}
                        </p>
                        <p className="text-gray-300">
                            <span className="font-bold text-gray-100 mr-2">
                                Name:
                            </span>
                            {user?.name}
                        </p>
                    </div>
                </motion.div>
                <motion.div
                    className="p-6 bg-gray-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-5 border border-gray-100"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    <h3 className="text-xl font-bold text-gray-100 mb-4">
                        Account Activity
                    </h3>

                    <div className="space-y-2">
                        <p className="text-gray-300">
                            <span className="font-bold text-gray-100 mr-1">
                                Joined:
                            </span>
                            {user?.createdAt
                                ? new Date(user.createdAt).toLocaleDateString(
                                      "en-US",
                                      {
                                          year: "numeric",
                                          month: "long",
                                          day: "numeric",
                                      },
                                  )
                                : "N/A"}
                        </p>
                        <p className="text-gray-300">
                            <span className="font-bold text-gray-100 mr-1">
                                Last Login:
                            </span>
                            {formatDate(user.lastLogin)}
                        </p>
                    </div>
                </motion.div>
            </div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
            >
                <motion.button
                    onClick={handleLogout}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors mt-4"
                >
                    Logout
                </motion.button>
            </motion.div>
        </motion.div>
    );
};

export default DashboardPage;
