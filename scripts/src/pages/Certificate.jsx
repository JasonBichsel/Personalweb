import React, { useState } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from "react-router-dom";

//CSS
import "./css/HomePage.css";

//Imgs
import Profile_picture from "./imgs/Profilbild.jpg";


function Zeugnis() {
    const [activeTab, setActiveTab] = useState("S4");
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
            <main>
                <div id="main-content" className="main-container">
                    <div className="zeugnis-header">
                        <h1>Zeugnis</h1>
                    </div>
                    <div id="Semester">
                        <div className="tab-buttons">
                            <button onClick={() => setActiveTab("S1")} className={activeTab === "S1" ? "active" : ""}>Semester 1</button>
                            <button onClick={() => setActiveTab("S2")} className={activeTab === "S2" ? "active" : ""}>Semester 2</button>
                            <button onClick={() => setActiveTab("S3")} className={activeTab === "S3" ? "active" : ""}>Semester 3</button>
                            <button onClick={() => setActiveTab("S4")} className={activeTab === "S4" ? "active" : ""}>Semester 4</button>
                        </div>
                        <div>
                            {activeTab === "S1" && (
                                <>
                                    <table id="semester-s1-table" className="table-container zeugnis-tabelle">
                                        <thead>
                                            <tr>
                                                <th><p>117 Informatik- und Netzinfrastruktur für ein kleines Unternehmen realisieren:</p></th>
                                                <th><p>Abgeschlossen</p></th>
                                            </tr>
                                            <tr>
                                                <th><p>122 Abläufe mit einer Scriptsprache automatisieren:</p></th>
                                                <th><p>Abgeschlossen</p></th>
                                            </tr>
                                            <tr>
                                                <th><p>162 Daten analysieren und modellieren : </p></th>
                                                <th><p>Abgeschlossen</p></th>
                                            </tr>
                                            <tr>
                                                <th><p>164 Datenbanken erstellen und Daten einfügen: </p></th>
                                                <th><p>Abgeschlossen</p></th>
                                            </tr>
                                            <tr>
                                                <th><p>231 Datenschutz und Datensicherheit anwenden: </p></th>
                                                <th><p>Abgeschlossen</p></th>
                                            </tr>
                                            <tr>
                                                <th><p>319 Applikationen entwerfen und implementieren: </p></th>
                                                <th><p>Abgeschlossen</p></th>
                                            </tr>
                                            <tr>
                                                <th><p>431 Aufträge im eigenen Berufsumfeld selbstständig durchführen: </p></th>
                                                <th><p>Abgeschlossen</p></th>
                                            </tr>
                                            <tr>
                                                <th><p>187 ICT-Arbeitsplatz mit Betriebssystem in Betrieb nehmen (UEK): </p></th>
                                                <th><p>Abgeschlossen</p></th>
                                            </tr>
                                        </thead>
                                    </table>
                                </>
                            )}
                            {activeTab === "S2" && (
                                <>
                                    <table id="semester-s2-table" className="table-container zeugnis-tabelle">
                                        <thead>
                                            <tr>
                                                <th><p>114 Codierungs-, Kompressions- und Verschlüsselungsverfahren einsetzen:</p></th>
                                                <th><p>Abgeschlossen</p></th>
                                            </tr>
                                            <tr>
                                                <th><p>254 Geschäftsprozesse im eigenen Berufsumfeld beschreiben:</p></th>
                                                <th><p>Abgeschlossen</p></th>
                                            </tr>
                                            <tr>
                                                <th><p>293 Webauftritt erstellen und veröffentlichen: </p></th>
                                                <th><p>Abgeschlossen</p></th>
                                            </tr>
                                            <tr>
                                                <th><p>306 Kleinprojekte im eigenen Berufsumfeld abwickeln: </p></th>
                                                <th><p>Abgeschlossen</p></th>
                                            </tr>
                                            <tr>
                                                <th><p>320 Objektorientiert programmieren: </p></th>
                                                <th><p>Abgeschlossen</p></th>
                                            </tr>
                                            <tr>
                                                <th><p>347 Dienst mit Container anwenden: </p></th>
                                                <th><p>Abgeschlossen</p></th>
                                            </tr>
                                            <tr>
                                                <th><p>106 Datenbanken abfragen, bearbeiten und warten (UEK): </p></th>
                                                <th><p>Abgeschlossen</p></th>
                                            </tr>
                                        </thead>
                                    </table>
                                </>
                            )}
                            {activeTab === "S3" && (
                                <>
                                    <table id="semester-s3-table" className="table-container zeugnis-tabelle">
                                        <thead>
                                            <tr>
                                                <th><p>165 NoSQL-Datenbanken einsetzen:</p></th>
                                                <th><p>Abgeschlossen</p></th>
                                            </tr>
                                            <tr>
                                                <th><p>322 Benutzerschnittstellen entwerfen und implementieren:</p></th>
                                                <th><p>Abgeschlossen</p></th>
                                            </tr>
                                            <tr>
                                                <th><p>323 Funktional Programmieren: </p></th>
                                                <th><p>Abgeschlossen</p></th>
                                            </tr>
                                            <tr>
                                                <th><p>346 Cloud Lösungen konzipieren und realisieren: </p></th>
                                                <th><p>Abgeschlossen</p></th>
                                            </tr>
                                            <tr>
                                                <th><p>426 Software mit agilen Methoden entwickeln: </p></th>
                                                <th><p>Abgeschlossen</p></th>
                                            </tr>
                                            <tr>
                                                <th><p>294 Frontend einer interaktiven Webapplikation realisieren (UEK): </p></th>
                                                <th><p>Abgeschlossen</p></th>
                                            </tr>
                                            <tr>
                                                <th><p>295 Backend für Applikationen realisieren (UEK): </p></th>
                                                <th><p>Abgeschlossen</p></th>
                                            </tr>
                                            <tr>
                                                <th><p>210 Public Cloud für Anwendungen nutzen (UEK): </p></th>
                                                <th><p>Abgeschlossen</p></th>
                                            </tr>
                                        </thead>
                                    </table>
                                </>
                            )}
                            {activeTab === "S4" && (
                                <>
                                    <table id="semester-s4-table" className="table-container zeugnis-tabelle">
                                        <thead>
                                            <tr>
                                                <th><p>183 Applikationssicherheit implementieren:</p></th>
                                                <th><p>5.5</p></th>
                                            </tr>
                                            <tr>
                                                <th><p>241 Innovative ICT-Lösungen initialisieren:</p></th>
                                                <th><p>Warte auf Note</p></th>
                                            </tr>
                                            <tr>
                                                <th><p>245 Innovative ICT-Lösungen umsetzen: </p></th>
                                                <th><p>Warte auf Note</p></th>
                                            </tr>
                                            <tr>
                                                <th><p>321 Verteilte Systeme programmieren: </p></th>
                                                <th><p>6</p></th>
                                            </tr>
                                            <tr>
                                                <th><p>324 DevOps-Prozesse mit Tools unterstützen: </p></th>
                                                <th><p>Warte auf Note</p></th>
                                            </tr>
                                            <tr>
                                                <th><p>450 Applikationen testen: </p></th>
                                                <th><p>Warte auf Note</p></th>
                                            </tr>
                                            <tr>
                                                <th><p>223 Multi-User-Applikationen objektorientiert realisieren (UEK): </p></th>
                                                <th><p>6</p></th>
                                            </tr>
                                            <tr>
                                                <th><p>335 Mobile-Applikation realisieren (UEK): </p></th>
                                                <th><p>Im Prozess</p></th>
                                            </tr>
                                        </thead>
                                    </table>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </main>
            <footer id="contact-footer" >
                <div id="details">
                    <div>
                        <a href="https://firmen.jasonbichsel.com/#/register" target="_blank" rel="noopener noreferrer"><button>Firmen Bewerbung</button></a>
                        <a href="https://firmen.jasonbichsel.com/#/firmen-list" target="_blank" rel="noopener noreferrer"><button>Die beworbenen Firmen</button></a>
                        <a href="https://github.com/JasonBichsel" target="_blank" rel="noopener noreferrer"><button>GitHub: <i className="fab fa-github"></i></button></a>
                        <a href="https://www.linkedin.com/in/jason-bichsel/" target="_blank" rel="noopener noreferrer"><button>Linkedin: <i className="fab fa-linkedin"></i></button></a>
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
export default Zeugnis;
