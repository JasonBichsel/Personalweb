import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Hier BrowserRouter hinzufügen
import HomePage from './pages/HomePage';
import Certificate from './pages/Certificate';
import Apprenticeship from './pages/Apprenticeship';
import Project from './pages/Project';
import ContactForm from './pages/Contact-form';
import './i18n';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/Personalweb" element={<HomePage />} />
                <Route path="/Certificate" element={<Certificate />} />
                <Route path="/Apprenticeship" element={<Apprenticeship />} />
                <Route path="/Projects" element={<Project />} />
                <Route path="/Contact-form" element={<ContactForm />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;