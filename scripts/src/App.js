import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Hier BrowserRouter hinzufügen
import HomePage from './pages/HomePage';


function App() {
    return (
        <BrowserRouter> {/* Routes mit BrowserRouter einwickeln */}
            <Routes>
                <Route path="/" element={<HomePage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
