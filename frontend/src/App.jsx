import { Routes, Route } from "react-router-dom";
import Threads from "./components/animatedBackground";
import SignupPage from "./pages/SignUpPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";

function App() {
    return (
        //to do : add animation in the back ground
        <div className="min-h-screen bg-neutral-950 flex items-center justify-center relative overflow-hidden">
            <div
                style={{ width: "100%", height: "100vh", position: "relative" }}
            >
                <Threads amplitude={1} distance={0} enableMouseInteraction />
            </div>

            <Routes>
                <Route path="/" element={"home"} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
            </Routes>
        </div>
    );
}

export default App;
