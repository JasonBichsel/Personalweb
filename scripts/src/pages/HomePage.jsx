import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import '@fortawesome/fontawesome-free/css/all.min.css';
import "./css/HomePage.css";

import Profile_picture from "./imgs/Profilbild.jpg";

function HomePage() {
    const [navOpen, setNavOpen] = useState(false);
    const canvasRef = useRef(null);
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        let animationFrameId;

        function resizeCanvas() {
            canvas.width = canvas.parentElement.offsetWidth;
            canvas.height = canvas.parentElement.offsetHeight;
        }
        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);

        let fontSize = 32;
        let columns, drops, lastDraw = 0;

        function setupMatrix() {
            columns = Math.floor(canvas.width / fontSize);
            drops = Array(columns).fill(1);
        }

        setupMatrix();
        window.addEventListener("resize", setupMatrix);

        function draw(now) {
            if (!lastDraw || now - lastDraw > 80) {
                ctx.fillStyle = "rgba(0,0,0,0.28)";
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                ctx.font = fontSize + "px monospace";
                ctx.fillStyle = "#fff";
                for (let i = 0; i < drops.length; i++) {
                    const text = Math.floor(Math.random() * 10).toString();
                    ctx.fillText(text, i * fontSize, drops[i] * fontSize);
                    if (drops[i] * fontSize > canvas.height && Math.random() > 0.985) {
                        drops[i] = 0;
                    }
                    drops[i]++;
                }
                lastDraw = now;
            }
            animationFrameId = requestAnimationFrame(draw);
        }

        animationFrameId = requestAnimationFrame(draw);

        return () => {
            window.removeEventListener("resize", resizeCanvas);
            window.removeEventListener("resize", setupMatrix);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div id="homepage-backgrund" style={{ color: "#fff" }}>
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

            <header id="header">
                <canvas ref={canvasRef} id="canvas" />
                <div id="header-container" className="content-section">
                    <h1 className="animated-title" style={{ fontSize: "clamp(2.5em, 8vw, 5em)", color: "#fff" }}>{t("intro.title")}</h1>
                    <div id="welcome-section" className="animated-welcome">
                        <p>{t("intro.text")}</p>
                    </div>
                </div>
            </header>

            <main>
                <div id="main-content" className="main-container">
                    <div id="about-me" className="content-section">
                        <div className="about-header-row">
                            <h2>{t("about.title")}</h2>
                            <a className="Lebenslauf" href="/pdf/Lebenslauf-Jason-Bichsel.pdf" download>
                                <button>{t("about.downloadCV")}</button>
                            </a>
                        </div>
                        <p>{t("about.p1")}</p>
                        <p>{t("about.p2")}</p>
                        <p>{t("about.p3")}</p>
                        <p>{t("about.p4")}</p>
                        <p>{t("about.p5")}</p>

                        <h2>{t("interests.title")}</h2>
                        <p>{t("interests.text")}</p>
                    </div>
                </div>
            </main>

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
        </div>
    );
}

export default HomePage;
