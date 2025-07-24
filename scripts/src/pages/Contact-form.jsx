import React, { useState } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from "react-router-dom";
//CSS
import "./css/HomePage.css";

//Imgs
import Profile_picture from "./imgs/Profilbild.jpg";

function Contactform() {
    const [navOpen, setNavOpen] = useState(false);
    
    return (
        <div id="homepage-backgrund">
            <nav id="main-navigation" className="navigation-bar">
                <button
                    className="burger-menu"
                    onClick={() => setNavOpen(!navOpen)}
                    aria-label="Menü öffnen/schließen"
                    >
                    <span />
                    <span />
                    <span />
                </button>
                <ul className={navOpen ? "open" : ""}>
                    <li><Link to="/">Welcome</Link></li>
                    <li><Link to="/Apprenticeship">Apprenticeship</Link></li>
                    <li><Link to="/projects">Projecte</Link></li>
                    <li><Link to="/Contact-form">Contact-form</Link></li>
                </ul>
                <img src={Profile_picture} alt="Profil" className="profilbild-nav" />
            </nav>
            <header>
            </header>
            <main>
                <div id="main-content" className="main-container">
                    <div id = "Contact-form" className="content-section">


                    </div>
                </div>
            </main>
            <footer id="contact-footer" className="content-section">
                <div id="details">
                    <div>
                        <a href="https://firmen.jasonbichsel.com/#/register"  target="_blank" rel="noopener noreferrer"><button>Firmen Bewerbung</button></a>
                        <a href="https://firmen.jasonbichsel.com/#/firmen-list"  target="_blank" rel="noopener noreferrer"><button>Die beworbenen Firmen</button></a>
                        <a href="https://github.com/JasonBichsel"  target="_blank" rel="noopener noreferrer"><button>GitHub: <i className="fab fa-github"></i></button></a>
                        <a href="https://www.linkedin.com/in/jason-bichsel/"  target="_blank" rel="noopener noreferrer"><button>Linkedin: <i className="fab fa-linkedin"></i></button></a>
                    </div>
                    <div>
                        <strong>Navigation:</strong>
                        <p></p>
                        <ul>
                            <li><a href="#welcome-section">Willkommen</a></li>
                            <li><a href="#about-me">Über mich</a></li>
                            <li><a href="#it-skills">IT-Skills</a></li>
                            <li><a href="#education-timeline">Ausbildung</a></li>
                            <li><a href="#projects">Projekte</a></li>
                            <li><a href="#contact-footer">Kontakt</a></li>
                        </ul>
                    </div>
                    <div>
                        <strong>Kontaktdaten:</strong>
                        <p>Jason Bichsel</p>
                        <p>Email: <a href="mailto:bichsel6343@outlook.com">bichsel6343@outlook.com</a></p>
                        <p>Tel: 079 913 97 48</p>
                    </div>
                </div>
                <div className="social-links">
                    <a className="linkedin-link" href="https://www.linkedin.com/in/jason-bichsel/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <p className="linkedin-name"><strong>Jason Bichsel</strong></p>
                    <a className="github-link" href="https://github.com/JasonBichsel" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                    
                </div>
            </footer>
        </div>
    );
}
export default Contactform;