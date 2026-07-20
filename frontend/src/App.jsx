import { Routes, Route } from "react-router-dom";
import Threads from "./components/AnimatedBackground.jsx";
import SignupPage from "./pages/SignUpPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";

function App() {
    return (
        <div className="min-h-screen bg-neutral-950 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 z-0 w-full h-full">
                <Threads amplitude={1} distance={0} enableMouseInteraction />
            </div>

            <div className="relative z-10 w-full flex justify-center">
                <Routes>
                    <Route path="/" element={<div>home</div>} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/signup" element={<SignupPage />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
