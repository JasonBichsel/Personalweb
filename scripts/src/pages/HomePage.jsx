import React, { useState } from "react";
import "./HomePage.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from "react-router-dom";
import PlaceholderImage from './img/Placeholderjpg.jpg';
import TicTacToe from './img/Tic-Tac-Toe.jpg';
import Notepad from './img/Notepad.jpg';
import Calculator from './img/Calculator.jpg';
import RandomNumberGame from './img/Random.Number.Game.jpg';
import FirmenBP from './img/FirmenBP.jpg';
import KäferClicker from './img/Käfer-Clickergame.png';
import Profilbild from './img/Profilbild.jpg';

function HomePage() {
    const [activeTab, setActiveTab] = useState("main");
    const [showAllOther, setShowAllOther] = useState(false);
    const [showAllMain, setShowAllMain] = useState(false);
    const [navOpen, setNavOpen] = useState(false);
    
    const otherProjects = [
        {
            img: Notepad,
            alt: "Notepad",
            desc: "Eine einfache Notiz-Java applikation, die es ermöglicht, Notizen zu erstellen, zu bearbeiten und zu löschen.",
            title: "Notepad",
            github: "https://github.com/JasonBichsel/Notepad",
            status: "Fertig"
        },
        {
            img: Calculator,
            alt: "Calculator",
            desc: "Eine einfache Java Applikation, die es ermöglicht, einfache mathematische Operationen durchzuführen.",
            title: "Calculator",
            github: "https://github.com/JasonBichsel/Calculator",
            status: "Fertig"
        },
        {
            img: RandomNumberGame,
            alt: "Random Number Game",
            desc: "Eine einfache Java Applikation, die es ermöglicht, zufällige Zahlen zu generieren und zu raten.",
            title: "Random Number Game",
            github: "https://github.com/JasonBichsel/Random.Number.Game",
            status: "Fertig"
        },
        {
            img: KäferClicker,
            alt: "Android Käfer Clicker App",
            desc: "Ein einfaches Klickspiel, bei dem die Spieler Käfer klicken müssen, um Punkte zu sammeln.",
            title: "Android Käfer Clicker App",
            github: "https://github.com/JasonBichsel/keafer-clickergame",
            status: "Verbesserung"
        },
        {
            img: PlaceholderImage,
            alt: "Android Shoppinglist App",
            desc: "Eine einfache Android App, die es ermöglicht, eine Einkaufsliste zu erstellen und zu verwalten.",
            title: "Android Shoppinglist App",
            github: "https://github.com/JasonBichsel/Shoppinglist",
            status: "Verbesserung"
        }
    ];
    const mainProjects = [
    {
        img: TicTacToe,
        alt: "Tic-Tac-Toe",
        desc: "Es ist ein einfaches Tic-Tac-Toe-Spiel mit ein paar Erweiterungen, damit der Spielspass etwas länger anhält. Anstelle von X und O werden Bilder verwendet, und das Spielfeld kann auf bis zu 5×5 Felder vergrößert werden.",
        title: "Tic-Tac-Toe",
        github: "https://github.com/JasonBichsel/Tic-Tac-Toe-with-imgs",
        live: "https://tic-tac-toe.jasonbichsel.com",
        status: "Fertig"
    },
    {
        img: FirmenBP,
        alt: "Firmenbewerbungsplattform",
        desc: "Diese Webseite ermöglicht es Firmen, mich durch die Registrierung zu kontaktieren. Jede Firma erhält garantiert eine E-Mail von mir. Zudem können sie jederzeit den aktuellen Status meiner Bewerbung auf der Webseite einsehen.",
        title: "Firmenbewerbungsplattform",
        github: "https://github.com/JasonBichsel/",
        live: "https://firmen.jasonbichsel.com/#/",
        status: "Fertig"
    },
    {
        img: PlaceholderImage,
        alt: "Immobilienplattform",
        desc: "Es ist eine Website, auf der Mitarbeitende schnell und einfach Immobilien zum Verkauf stellen können. Die Kunden können schnell und übersichtlich die Immobilien mit Bildern und Daten Ersichtigen.",
        title: "Immobilienplattform",
        github: "https://github.com/JasonBichsel/",
        live: "https://jasonbichsel.github.io/",
        status: "Entwicklung"
    }
    ];
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
                    <li><a href="#header-container" onClick={() => setNavOpen(false)}>Willkommen</a></li>
                    <li><a href="#about-me" onClick={() => setNavOpen(false)}>Über mich</a></li>
                    <li><a href="#it-skills" onClick={() => setNavOpen(false)}>IT-Skills</a></li>
                    <li><a href="#education-timeline" onClick={() => setNavOpen(false)}>Ausbildung</a></li>
                    <li><a href="#projects" onClick={() => setNavOpen(false)}>Projekte</a></li>
                    <li><a href="#contact-footer" onClick={() => setNavOpen(false)}>Kontakt</a></li>
                </ul>
                <img src={Profilbild} alt="Profil" className="profilbild-nav" />
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
                            <Link className="Zeugnis" to="/zeugnis">
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
                    <div id="projects"> 
                        <h2>Projekte</h2>
                        <div className="tab-buttons">
                            <button onClick={() => setActiveTab("main")} className={activeTab === "main" ? "active" : ""}>Grösste Projekte</button>
                            <button onClick={() => setActiveTab("other")} className={activeTab === "other" ? "active" : ""}>Weitere Projekte</button>
                        </div>
                        <div className="project-container">
                            {activeTab === "other" && (
                                <>
                                    {(showAllOther ? otherProjects : otherProjects.slice(0, 2)).map((proj, idx) => (
                                        <div key={idx}>
                                            <img src={proj.img} alt={proj.alt}/>
                                            <p>{proj.desc}</p>
                                            <p className="titel"><strong>{proj.title}</strong></p>
                                            <div className="link-container">
                                                <a className="github-link" href={proj.github} target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                                                <i> | </i>
                                                <a className="github-link" href={proj.live} target="_blank" rel="noopener noreferrer"><i className="fas fa-external-link-alt"></i></a>
                                            </div>
                                            <p className="titel"><strong>Status: {proj.status}</strong></p>
                                        </div>
                                    ))}
                                </>
                            )}
                            {activeTab === "main" && (
                                <>
                                    {(showAllMain ? mainProjects : mainProjects.slice(0, 2)).map((proj, idx) => (
                                        <div key={idx}>
                                            <img src={proj.img} alt={proj.alt}/>
                                            <p>{proj.desc}</p>
                                            <p className="titel"><strong>{proj.title}</strong></p>
                                            <div className="link-container">
                                                <a className="github-link" href={proj.github} target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                                                <i> | </i>
                                                <a className="github-link" href={proj.live} target="_blank" rel="noopener noreferrer"><i className="fas fa-external-link-alt"></i></a>
                                            </div>
                                            <p className="titel"><strong>Status: {proj.status}</strong></p>
                                        </div>
                                    ))}
                                </>
                            )}
                        </div>
                        {activeTab === "other" && otherProjects.length > 2 && (
                            <button
                                className="view-more-btn small"
                                onClick={() => setShowAllOther(!showAllOther)}
                            >
                                {showAllOther ? "Show less" : "View More"}
                            </button>
                        )}
                        {activeTab === "main" && mainProjects.length > 2 && (
                            <button
                                className="view-more-btn small"
                                onClick={() => setShowAllMain(!showAllMain)}
                            >
                                {showAllMain ? "Show less" : "View More"}
                            </button>
                        )}
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