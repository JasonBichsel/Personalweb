import React, { useState, useRef, useEffect } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from "react-router-dom";


//CSS
import "./css/HomePage.css";

//Imgs
import PlaceholderImage from './imgs/Placeholderjpg.jpg';
import TicTacToe from './imgs/Tic-Tac-Toe.jpg';
import Notepad from './imgs/Notepad.jpg';
import Calculator from './imgs/Calculator.jpg';
import RandomNumberGame from './imgs/Random.Number.Game.jpg';
import FirmenBP from './imgs/FirmenBP.jpg';
import KäferClicker from './imgs/Käfer-Clickergame.png';
import Profilbild from './imgs/Profilbild.jpg';

function Project() {
    const [activeTab, setActiveTab] = useState("main");
    const [showAllOther, setShowAllOther] = useState(false);
    const [showAllMain, setShowAllMain] = useState(false);
    const [navOpen, setNavOpen] = useState(false);

    const containerRef = useRef(null);
    

    // Variablen für Drag-Scroll
    let isDown = false;
    let startX;
    let scrollLeft;


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


    const referenceData = [
        {
            img: Profilbild,
            title: "Ein Schulfreund",
            text: "Kreativ und zuverlässig – gerne wieder.",
            stars: 4.5,
            github: "https://github.com/beispielperson",
            website: "https://beispielseite.com"
        },
        {
            img: Profilbild,
            text: "Kreativ und zuverlässig – gerne wieder.",
            stars: 4.5
        },
        {
            img: FirmenBP,
            text: "Hat unsere Anforderungen schnell umgesetzt.",
            stars: 5
        },
        {
            img: TicTacToe,
            text: "Einfach, aber sehr gut programmiert!",
            stars: 4.5
        },
        {
            img: TicTacToe,
            text: "Einfach, aber sehr gut programmiert!",
            stars: 4.5
        }
    ];

    // Dupliziere Referenzen für Endlosschleife
    const allRefs = [...referenceData, ...referenceData];

    // Scroll Funktion (für Buttons)
    const scroll = (direction) => {
        const container = containerRef.current;
        const scrollAmount = 300;
        if (!container) return;
        container.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    };

    // Drag Scroll Logik
    const handleMouseDown = (e) => {
        isDown = true;
        containerRef.current.classList.add('active');
        startX = e.pageX - containerRef.current.offsetLeft;
        scrollLeft = containerRef.current.scrollLeft;
    };

    const handleMouseLeave = () => {
        isDown = false;
        containerRef.current.classList.remove('active');
    };

    const handleMouseUp = () => {
        isDown = false;
        containerRef.current.classList.remove('active');
    };

    const handleMouseMove = (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - containerRef.current.offsetLeft;
        const walk = (x - startX) * 2;
        containerRef.current.scrollLeft = scrollLeft - walk;
    };

    // useEffect für Auto-Scroll und Endlosschleife
    useEffect(() => {
        const container = containerRef.current;

        const handleScroll = () => {
            const maxScrollLeft = container.scrollWidth - container.clientWidth;
            if (container.scrollLeft >= maxScrollLeft - 1) {
                container.scrollLeft = 0;
            }
        };

        const scrollInterval = setInterval(() => {
            container.scrollBy({ left: 1, behavior: "smooth" });
        }, 30); // optional: automatisch scrollen

        container.addEventListener("scroll", handleScroll);
        return () => {
            container.removeEventListener("scroll", handleScroll);
            clearInterval(scrollInterval);
        };
    }, []);


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
                <img src={Profilbild} alt="Profil" className="profilbild-nav" />
            </nav>
            <main>
                <div id="main-content" className="main-container">
                    <div id="projects" className="content-section">
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
                                            <img src={proj.img} alt={proj.alt} />
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
                                            <img src={proj.img} alt={proj.alt} />
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
                    <div className="reference-section">
                        <div className="content-section">
                            <h2>Referenzen</h2>
                        </div>

                        <div className="reference-carousel-wrapper">
                            <button className="scroll-btn left" onClick={() => scroll('left')}>&lt;</button>

                            <div
                                className="reference-carousel"
                                ref={containerRef}
                                onMouseDown={handleMouseDown}
                                onMouseLeave={handleMouseLeave}
                                onMouseUp={handleMouseUp}
                                onMouseMove={handleMouseMove}
                            >
                                {allRefs.map((ref, index) => (

                                    <div className="reference-card" key={index}>
                                        <img src={ref.img} alt={`Referenz ${index + 1}`} />

                                        {ref.title && <p className="reference-title"><strong>{ref.title}</strong></p>}

                                        <p>{ref.text}</p>

                                        <div className="stars">
                                            {Array.from({ length: 5 }).map((_, i) => (
                                                <span key={i}>{i < ref.stars ? '★' : '☆'}</span>
                                            ))}
                                        </div>

                                        <div className="reference-links">
                                            {ref.linkedin && (
                                                <a href={ref.linkedin} target="_blank" rel="noopener noreferrer" className="linkedin-link" title="LinkedIn Profil ansehen">
                                                    <i className="fab fa-linkedin"></i>
                                                </a>
                                            )}
                                            {ref.github && (
                                                <a href={ref.github} target="_blank" rel="noopener noreferrer" className="github-link" title="GitHub Profil ansehen">
                                                    <i className="fab fa-github"></i>
                                                </a>
                                            )}
                                            {ref.website && (
                                                <a href={ref.website} target="_blank" rel="noopener noreferrer" className="website-link" title="Website besuchen">
                                                    <i className="fas fa-globe"></i>
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <button className="scroll-btn right" onClick={() => scroll('right')}>&gt;</button>
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
export default Project;