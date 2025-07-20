import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Hier BrowserRouter hinzufügen
import HomePage from './pages/HomePage';
import Zeugnis from './pages/Zeugnis';

function App() {
    return (
        <BrowserRouter> {/* Routes mit BrowserRouter einwickeln */}
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/Personalweb" element={<HomePage />} />
                <Route path="/Zeugnis" element={<Zeugnis />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;