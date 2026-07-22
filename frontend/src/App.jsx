import { Routes, Route } from "react-router-dom";
import Threads from "./components/AnimatedBackground.jsx";
import SignupPage from "./pages/SignUpPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import EmailVerificationPage from "./pages/EmailVerificationPage.jsx";
import { Toaster } from "react-hot-toast";
import { useAuthStore } from "./store/authStore.js";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage.jsx";

// protected route for authenticated users
const ProtectedRoute = ({ children }) => {
    const { isAuthenticated, user } = useAuthStore();
    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }
    if (!user.isVerified) {
        return <Navigate to="/verify-email" replace />;
    }
    return children;
};

//redirect authenticated users from the signup and login pages if they are already authenticated
const RedirectAuthenticatedUser = ({ children }) => {
    const { isAuthenticated, user } = useAuthStore();

    if (isAuthenticated && user.isVerified) {
        return <Navigate to="/" replace />;
    }
    return children;
};

function App() {
    const { isAuthenticated, checkAuth, isCheckingAuth, user } = useAuthStore();
    useEffect(() => {
        checkAuth();
    }, [checkAuth]);

    console.log("ischeckingAuth ", isCheckingAuth);
    console.log("isAuthenticated ", isAuthenticated);
    console.log("user ", user);
    return (
        <div className="min-h-screen bg-neutral-950 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 z-0 w-full h-full">
                <Threads amplitude={1} distance={0} enableMouseInteraction />
            </div>

            <div className="relative z-10 w-full flex justify-center">
                <Routes>
                    <Route
                        path="/"
                        element={
                            <ProtectedRoute>
                                <DashboardPage />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/login"
                        element={
                            <RedirectAuthenticatedUser>
                                <LoginPage />
                            </RedirectAuthenticatedUser>
                        }
                    />
                    <Route
                        path="/signup"
                        element={
                            <RedirectAuthenticatedUser>
                                <SignupPage />
                            </RedirectAuthenticatedUser>
                        }
                    />
                    <Route
                        path="/verify-email"
                        element={
                            <RedirectAuthenticatedUser>
                                <EmailVerificationPage />
                            </RedirectAuthenticatedUser>
                        }
                    />
                </Routes>
                <Toaster />
            </div>
        </div>
    );
}

export default App;
