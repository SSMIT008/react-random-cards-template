import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import HomePage from "./Layout/HomePage/HomePage";
import PracticeBasics from "./Layout/Practice_Basics/PracticeBasics";
import PracticeHooks from "./Layout/Practice_Hooks/PracticeHooks";

function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/PracticeBasics" element={<PracticeBasics />} />
                <Route path="/PracticeHooks" element={<PracticeHooks />} />
            </Routes>
        </HashRouter>
    );
}

export default App;