import React, { useState, useRef, useEffect } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

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
import Profile_picture from './imgs/Profilbild.jpg';

function Project() {
    const [activeTab, setActiveTab] = useState("main");
    const [showAllOther, setShowAllOther] = useState(false);
    const [showAllMain, setShowAllMain] = useState(false);
    const [navOpen, setNavOpen] = useState(false);
    const { t, i18n } = useTranslation();
    const containerRef = useRef(null);


    // Variablen für Drag-Scroll
    let isDown = false;
    let startX;
    let scrollLeft;

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    const otherProjects = [
        {
            img: Notepad,
            alt: "Notepad",
            desc: t("projects.descriptions.notepad"),
            title: t("projects.titles.notepad"),
            github: "https://github.com/JasonBichsel/Notepad",
            status: "Fertig"
        },
        {
            img: Calculator,
            alt: "Calculator",
            desc: t("projects.descriptions.calculator"),
            title: t("projects.titles.calculator"),
            github: "https://github.com/JasonBichsel/Calculator",
            status: "Fertig"
        },
        {
            img: RandomNumberGame,
            alt: "Random Number Game",
            desc: t("projects.descriptions.randomGame"),
            title: t("projects.titles.randomGame"),
            github: "https://github.com/JasonBichsel/Random.Number.Game",
            status: "Fertig"
        },
        {
            img: KäferClicker,
            alt: "Käfer Clicker",
            desc: t("projects.descriptions.clicker"),
            title: t("projects.titles.clicker"),
            github: "https://github.com/JasonBichsel/keafer-clickergame",
            status: "Verbesserung"
        },
        {
            img: PlaceholderImage,
            alt: "Shoppinglist App",
            desc: t("projects.descriptions.shoppinglist"),
            title: t("projects.titles.shoppinglist"),
            github: "https://github.com/JasonBichsel/Shoppinglist",
            status: "Verbesserung"
        }
    ];
    const mainProjects = [
        {
            img: TicTacToe,
            alt: "Tic-Tac-Toe",
            desc: t("projects.descriptions.tictactoe"),
            title: t("projects.titles.tictactoe"),
            github: "https://github.com/JasonBichsel/Tic-Tac-Toe-with-imgs",
            live: "https://tic-tac-toe.jasonbichsel.com",
            status: "Fertig"
        },
        {
            img: FirmenBP,
            alt: "Firmenbewerbungsplattform",
            desc: t("projects.descriptions.firmen"),
            title: t("projects.titles.firmen"),
            github: "https://github.com/JasonBichsel/",
            live: "https://firmen.jasonbichsel.com/#/",
            status: "Fertig"
        },
        {
            img: PlaceholderImage,
            alt: "Immobilienplattform",
            desc: t("projects.descriptions.immobilien"),
            title: t("projects.titles.immobilien"),
            github: "https://github.com/JasonBichsel/",
            live: "https://jasonbichsel.github.io/",
            status: "Entwicklung"
        }
    ];


    const referenceData = [
        {
            img: Profile_picture,
            title: t("references.names.placeholder"),
            text: t("references.texts.placeholder"),
            stars: 4.5,
            github: "https://github.com/beispielperson",
            website: "https://beispielseite.com",
            linkedin: "https://www.linkedin.com/in/beispielperson/"
        },
        {
            img: Profile_picture,
            text: t("references.texts.placeholder"),
            stars: 4.5
        },
        {
            img: FirmenBP,
            text: t("references.texts.placeholder"),
            stars: 5
        },
        {
            img: TicTacToe,
            text: t("references.texts.placeholder"),
            stars: 4.5
        },
        {
            img: TicTacToe,
            text: t("references.texts.placeholder"),
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
                    <li><Link to="/">{t("nav.welcome")}</Link></li>
                    <li><Link to="/Apprenticeship">{t("nav.apprenticeship")}</Link></li>
                    <li><Link to="/projects">{t("nav.projects")}</Link></li>
                    <li><Link to="/Contact-form">{t("nav.contactForm")}</Link></li>
                </ul>
                <div className="profile-language-wrapper">

                    <div className="language-switch">
                        {i18n.language === "de" ? (
                            <button onClick={() => changeLanguage("en")}>EN</button>
                        ) : (
                            <button onClick={() => changeLanguage("de")}>DE</button>
                        )}
                    </div>

                    <img src={Profile_picture} alt="Profil" className="profilbild-nav" />
                </div>
            </nav>
            <main>
                <div id="main-content" className="main-container">
                    <div id="projects" className="content-section">
                        <h2>{t("projects.title")}</h2>
                        <div className="tab-buttons">
                            <button onClick={() => setActiveTab("main")} className={activeTab === "main" ? "active" : ""}>Grösste Projekte</button>
                            <button onClick={() => setActiveTab("other")} className={activeTab === "other" ? "active" : ""}>Weitere Projekte</button>
                        </div>
                        <div className="project-container">
                            {(activeTab === "main" ? (showAllMain ? mainProjects : mainProjects.slice(0, 2))
                                : (showAllOther ? otherProjects : otherProjects.slice(0, 2))
                            ).map((proj, idx) => (
                                <div key={idx}>
                                    <img src={proj.img} alt={proj.alt || `Projektbild ${idx + 1}`} />

                                    {proj.title && (
                                        <p className="titel">
                                            <strong>{proj.title}</strong>
                                        </p>
                                    )}

                                    {proj.desc && <p>{proj.desc}</p>}

                                    {(proj.github || proj.live) && (
                                        <div className="link-container">
                                            {proj.github && (
                                                <a
                                                    className="github-link"
                                                    href={proj.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    title="GitHub Repository öffnen"
                                                >
                                                    <i className="fab fa-github"></i>
                                                </a>
                                            )}
                                            {proj.github && proj.live && <i> | </i>}
                                            {proj.live && (
                                                <a
                                                    className="github-link"
                                                    href={proj.live}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    title="Live-Seite öffnen"
                                                >
                                                    <i className="fas fa-external-link-alt"></i>
                                                </a>
                                            )}
                                        </div>
                                    )}

                                    {proj.status && (
                                        <p className="titel">
                                            <strong>Status: {proj.status}</strong>
                                        </p>
                                    )}
                                </div>
                            ))}
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
            </main >
            <footer id="contact-footer">
                <div id="details">
                    <div>
                        <a href="https://firmen.jasonbichsel.com/#/register" target="_blank" rel="noopener noreferrer"><button>{t("footer.applyCompanies")}</button></a>
                        <a href="https://firmen.jasonbichsel.com/#/firmen-list" target="_blank" rel="noopener noreferrer"><button>{t("footer.appliedCompanies")}</button></a>
                        <a href="https://github.com/JasonBichsel" target="_blank" rel="noopener noreferrer"><button>GitHub <i className="fab fa-github"></i></button></a>
                        <a href="https://www.linkedin.com/in/jason-bichsel/" target="_blank" rel="noopener noreferrer"><button>LinkedIn <i className="fab fa-linkedin"></i></button></a>
                    </div>

                    <div className="navigation-footer">
                        <div className="navigation-footer2">
                            <strong className="navigation-title">{t("nav.navigation")}:</strong>
                            <ul>
                                <li><Link to="/">{t("nav.welcome")}</Link></li>
                                <li><Link to="/Apprenticeship">{t("nav.apprenticeship")}</Link></li>
                                <li><Link to="/projects">{t("nav.projects")}</Link></li>
                                <li><Link to="/Contact-form">{t("nav.contactForm")}</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className="contact-footer-block">
                        <div className="contact-inner">
                            <strong>{t("footer.contactData")}:</strong>
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
        </div >
    );
}
export default Project;