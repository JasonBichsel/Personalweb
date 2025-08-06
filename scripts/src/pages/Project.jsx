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

        const maxScrollLeft = container.scrollWidth - container.clientWidth;

        if (direction === 'left') {
            if (container.scrollLeft <= 0) {
                // Springe ans Ende (Endlosschleife)
                container.scrollTo({ left: maxScrollLeft, behavior: 'smooth' });
            } else {
                container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            }
        } else if (direction === 'right') {
            if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 1) {
                // Springe zum Anfang (Endlosschleife)
                container.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        }
    };

    // DRAG START
    const handleMouseDown = (e) => {
        isDown = true;
        containerRef.current.classList.add('active');
        startX = e.pageX - containerRef.current.offsetLeft;
        scrollLeft = containerRef.current.scrollLeft;
    };

    // DRAG END
    const handleMouseLeave = () => {
        isDown = false;
        containerRef.current.classList.remove('active');
    };
    const handleMouseUp = () => {
        isDown = false;
        containerRef.current.classList.remove('active');

        // ➕ Endloslogik nach dem Loslassen (wenn z. B. ans Ende/Anfang gezogen)
        const container = containerRef.current;
        const maxScrollLeft = container.scrollWidth - container.clientWidth;

        if (container.scrollLeft <= 0) {
            container.scrollTo({ left: maxScrollLeft, behavior: 'smooth' });
        } else if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 1) {
            container.scrollTo({ left: 0, behavior: 'smooth' });
        }
    };

    // DRAG MOVE
    const handleMouseMove = (e) => {
        if (!isDown) return;

        e.preventDefault();
        const container = containerRef.current;
        const x = e.pageX - container.offsetLeft;
        const walk = (x - startX) * 1.5; // Scroll-Geschwindigkeit
        container.scrollLeft = scrollLeft - walk;
    };

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        let currentIndex = 0;
        let isPaused = false;

        const getCardWidth = () => {
            const firstCard = container.querySelector('.reference-card');
            if (!firstCard) return 300; // Fallback
            return firstCard.offsetWidth + 16; // +16 für gap
        };

        const getTotalCards = () => {
            return container.querySelectorAll('.reference-card').length;
        };

        const scrollToCard = (index) => {
            const cardWidth = getCardWidth();
            container.scrollTo({
                left: index * cardWidth,
                behavior: 'smooth'
            });
        };

        const nextCard = () => {
            if (isPaused) return;

            const totalCards = getTotalCards();
            const visibleCards = Math.floor(container.clientWidth / getCardWidth());
            const maxIndex = totalCards - visibleCards;

            currentIndex++;

            // Wenn wir am Ende sind, zurück zum Anfang
            if (currentIndex > maxIndex) {
                currentIndex = 0;
            }

            scrollToCard(currentIndex);
        };

        // Hover-Events für Pause-Funktion
        const handleMouseEnter = () => {
            isPaused = true;
        };

        const handleMouseLeave = () => {
            isPaused = false;
        };

        // Hauptintervall: Alle 3 Sekunden zur nächsten Karte
        const cardInterval = setInterval(nextCard, 3000);

        // Event Listeners hinzufügen
        container.addEventListener("mouseenter", handleMouseEnter);
        container.addEventListener("mouseleave", handleMouseLeave);

        // Cleanup
        return () => {
            clearInterval(cardInterval);
            container.removeEventListener("mouseenter", handleMouseEnter);
            container.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);

    return (
        <div id="homepage-backgrund">
            <nav id="main-navigation" className="navigation-bar">
                <button
                    className="burger-menu"
                    onClick={() => setNavOpen(!navOpen)}
                    aria-label="Toggle menu"
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
                        <a href="https://firmen.jasonbichsel.com/#/register" target="_blank" rel="noopener noreferrer">
                            <button>{t("footer.applyCompanies")}</button>
                        </a>
                        <a href="https://firmen.jasonbichsel.com/#/firmen-list" target="_blank" rel="noopener noreferrer">
                            <button>{t("footer.appliedCompanies")}</button>
                        </a>
                        <a href="https://github.com/JasonBichsel" target="_blank" rel="noopener noreferrer">
                            <button>GitHub <i className="fab fa-github"></i></button>
                        </a>
                        <a href="https://www.linkedin.com/in/jason-bichsel/" target="_blank" rel="noopener noreferrer">
                            <button>LinkedIn <i className="fab fa-linkedin"></i></button>
                        </a>
                    </div>

                    <div className="navigation-footer">
                        <strong className="navigation-title">{t("nav.navigation")}:</strong>
                        <ul>
                            <li><Link to="/">{t("nav.welcome")}</Link></li>
                            <li><Link to="/Apprenticeship">{t("nav.apprenticeship")}</Link></li>
                            <li><Link to="/projects">{t("nav.projects")}</Link></li>
                            <li><Link to="/Contact-form">{t("nav.contactForm")}</Link></li>
                        </ul>
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
                    <a className="github-link" href="https://github.com/JasonBichsel" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github"></i>
                    </a>
                </div>
            </footer>
        </div >
    );
}
export default Project;