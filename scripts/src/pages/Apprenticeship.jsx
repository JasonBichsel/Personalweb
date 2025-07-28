import React, { useState } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from "react-router-dom";

//CSS
import "./css/HomePage.css";

//Imgs
import Profile_picture from "./imgs/Profilbild.jpg";

function Apprenticeship() {
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
                <ul className={navOpen ? "mobile-open" : ""}>
                    <li><Link to="/">Welcome</Link></li>
                    <li><Link to="/Apprenticeship">Apprenticeship</Link></li>
                    <li><Link to="/projects">Projecte</Link></li>
                    <li><Link to="/Contact-form">Contact-form</Link></li>
                </ul>
                <img src={Profile_picture} alt="Profil" className="profilbild-nav" />
            </nav>
            <main>
                <div id="main-content" className="main-container">
                    <div id="it-skills" className="content-section">
                        <h2>IT-Skills</h2>
                        <ul>
                            <li>
                                <span className="skill-name">Linux Docker</span>
                                <span className="skill-rating">(8/10)</span>
                                <span className="skill-stars">★★★★★★★★</span>
                            </li>
                            <li>
                                <span className="skill-name">Java</span>
                                <span className="skill-rating">(6/10)</span>
                                <span className="skill-stars">★★★★★★</span>
                            </li>
                            <li>
                                <span className="skill-name">NoSQL MongoDB</span>
                                <span className="skill-rating">(6/10)</span>
                                <span className="skill-stars">★★★★★★</span>
                            </li>
                            <li>
                                <span className="skill-name">HTML</span>
                                <span className="skill-rating">(6/10)</span>
                                <span className="skill-stars">★★★★★★</span>
                            </li>
                            <li>
                                <span className="skill-name">Linux Bash</span>
                                <span className="skill-rating">(6/10)</span>
                                <span className="skill-stars">★★★★★★</span>
                            </li>
                            <li>
                                <span className="skill-name">JavaScript</span>
                                <span className="skill-rating">(6/10)</span>
                                <span className="skill-stars">★★★★★★</span>
                            </li>
                            <li>
                                <span className="skill-name">MySQL</span>
                                <span className="skill-rating">(4/10)</span>
                                <span className="skill-stars">★★★★</span>
                            </li>
                            <li>
                                <span className="skill-name">PHP</span>
                                <span className="skill-rating">(2/10)</span>
                                <span className="skill-stars">★★</span>
                            </li>
                        </ul>
                    </div>
                    <div id="education-timeline" className="content-section">
                        <div className="about-header-row">
                            <h2>Ausbildung</h2>
                            <Link className="Zeugnis" to="/Certificate">
                                <button>Zeugnis ansehen</button>
                            </Link>
                        </div>
                        <table id="education-table" className="table-container">
                            <thead>
                                <tr className="education-header">
                                    <th><h3><strong>Informatiker Applikationsentwicklung</strong></h3></th>
                                    <th></th>
                                </tr>
                                <tr className="school-row">
                                    <th><p>Schule:</p></th>
                                    <th><p>WISS Schulen für Wirtschaft Informatik Immobilien</p></th>
                                </tr>
                                <tr className="location-row"> 
                                    <th><p>Ort:</p></th>
                                    <th><p>Zürich, Zürich-Altstetten</p></th>
                                </tr>
                                <tr className="start-date-row">
                                    <th><p>Startdatum: </p></th>
                                    <th><p>August 2023</p></th>
                                </tr>
                                <tr>
                                    <th><p>Enddatum: </p></th>
                                    <th><p>August 2027(im Prozess)</p></th>
                                </tr>
                            </thead>
                        </table>
                        <table id="secondary-school" className="table-container">
                            <thead>
                                <tr className="education-header">
                                    <th><h3><strong>Schule</strong></h3></th>
                                    <th></th>
                                </tr>
                                <tr className="school-row">
                                    <th><p>Schule:</p></th>
                                    <th><p>Rotkreuz Oberstufenschule Sekundarstufe</p></th>
                                </tr>
                                <tr className="location-row"> 
                                    <th><p>Ort:</p></th>
                                    <th><p>Zug, Rotkreuz</p></th>
                                </tr>
                                <tr className="start-date-row">
                                    <th><p>Startdatum: </p></th>
                                    <th><p>August 2020</p></th>
                                </tr>
                                <tr>
                                    <th><p>Enddatum: </p></th>
                                    <th><p>August 2023</p></th>
                                </tr>
                            </thead>
                        </table>
                        <table id="primary-school" className="table-container">
                            <thead>
                                <tr className="education-header">
                                    <th><h3><strong>Schule</strong></h3></th>
                                    <th></th>
                                </tr>
                                <tr className="school-row">
                                    <th><p>Schule:</p></th>
                                    <th><p>Rotkreuz Primarschule</p></th>
                                </tr>
                                <tr className="location-row"> 
                                    <th><p>Ort:</p></th>
                                    <th><p>Zug, Rotkreuz</p></th>
                                </tr>
                                <tr className="start-date-row">
                                    <th><p>Startdatum: </p></th>
                                    <th><p>August 2014</p></th>
                                </tr>
                                <tr>
                                    <th><p>Enddatum: </p></th>
                                    <th><p>August 2020</p></th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </div>
            </main>
            <footer id="contact-footer" >
                            <div id="details">
                                <div>
                                    <a href="https://firmen.jasonbichsel.com/#/register"  target="_blank" rel="noopener noreferrer"><button>Firmen Bewerbung</button></a>
                                    <a href="https://firmen.jasonbichsel.com/#/firmen-list"  target="_blank" rel="noopener noreferrer"><button>Die beworbenen Firmen</button></a>
                                    <a href="https://github.com/JasonBichsel"  target="_blank" rel="noopener noreferrer"><button>GitHub: <i className="fab fa-github"></i></button></a>
                                    <a href="https://www.linkedin.com/in/jason-bichsel/"  target="_blank" rel="noopener noreferrer"><button>Linkedin: <i className="fab fa-linkedin"></i></button></a>
                                </div>
                                <div className="navigation-footer">
                                    <strong className="navigation-title">Navigation:</strong>
                                    <ul>
                                        <li><Link to="/">Welcome</Link></li>
                                        <li><Link to="/Apprenticeship">Apprenticeship</Link></li>
                                        <li><Link to="/projects">Projecte</Link></li>
                                        <li><Link to="/Contact-form">Contact-form</Link></li>
                                    </ul>
                                </div>
                                <div className="contact-footer-block" >
                                    <div className="contact-inner">
                                        <strong>Kontaktdaten:</strong>
                                        <p>Jason Bichsel</p>
                                        <p>Email: <a href="mailto:bichsel6343@outlook.com">bichsel6343@outlook.com</a></p>
                                        <p>Tel: 079 913 97 48</p>
                                    </div>
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
export default Apprenticeship;