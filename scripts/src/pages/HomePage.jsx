import React, { useState } from "react";

//CSS
import "./css/HomePage.css";

import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from "react-router-dom";

// Imgs

import Profile_picture from "./imgs/Profilbild.jpg";



function HomePage() {
    const [navOpen, setNavOpen] = useState(false);

    
    return (
        <div id="homepage-backgrund">
            <nav id="main-navigation" className="navigation-bar">
                <ul className={navOpen ? "open" : ""}>
                    <li><a href="#homepage-backgrund" >Welcome</a></li>
                    <li><a href="" >Apprenticeship</a></li>
                    <li><a href="" >Projecte</a></li>
                    <li><a href="" >Contact-form</a></li>
                </ul>
                <img src={Profile_picture} alt="Profil" className="profilbild-nav" />
            </nav>
            <header>
                <div id="header-container" className="content-section">
                    <h1>Hallo, ich bin Jason</h1>
                    <div id="welcome-section" className="">
                        <p>Ich bin 17 Jahre alt und Auszubildender als Informatiker in der Fachrichtung Applikationsentwicklung.</p>
                    </div>
                </div>
            </header>
            <main>
                <div id="main-content" className="main-container">
                    <div id="about-me" className="content-section">
                        <div className="about-header-row">
                            <h2>Über mich</h2>
                            <a className="Lebenslauf" href="/pdf/Lebenslauf-Jason-Bichsel.pdf" download>
                                <button>Lebenslauf herunterladen</button>
                            </a>
                        </div>
                        <p>Schon seit meiner Kindheit war es mein Ziel, Informatiker zu werden. Nun bin ich an der WISS, um meinen Berufswunsch zu verwirklichen.</p>
                        <p>Mein Interesse an der Informatik wurde schon früh geweckt, durch mein Drang zu verstehen, wie Technologien funktionieren und entwickelt werden.</p>
                        <p>Zu meinen Stärken zählen insbesondere mein Zeitmanagement und mein analytisches Problemlösungsvermögen. Diese Fähigkeiten helfen mir, komplexe Herausforderungen strukturiert anzugehen.</p>
                        <p>In der Teamarbeit lege ich grossen Wert auf ein respektvolles und produktives Arbeitsumfeld, das von offenen Gesprächen und gegenseitiger Unterstützung lebt.</p>
                        <p>Ich bin überzeugt, dass ich mit meinen Kompetenzen aktiv zu einer erfolgreichen Zusammenarbeit beitragen kann.</p>

                        <h2>Interessen</h2>
                        <p>Computer zusammenbauen, Webseiten erstellen, Strategiespiele und Polizeiserien.</p>
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
export default HomePage;