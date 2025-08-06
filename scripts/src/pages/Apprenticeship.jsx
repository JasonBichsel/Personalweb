import React, { useState } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "./css/HomePage.css";
import Profile_picture from "./imgs/Profilbild.jpg";

function Apprenticeship() {
    const [navOpen, setNavOpen] = useState(false);
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

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
                    <section id="it-skills" className="content-section">
                        <h2>{t("apprenticeship.skillsTitle")}</h2>
                        <ul>
                            {t("apprenticeship.skills", { returnObjects: true }).map((skill, index) => (
                                <li key={index}>
                                    <span className="skill-name">{skill.name}</span>
                                    <span className="skill-rating">({skill.rating}/10)</span>
                                    <span className="skill-stars">{"★".repeat(skill.rating)}</span>
                                </li>
                            ))}
                        </ul>
                    </section>

                    <section id="education-timeline" className="content-section">
                        <div className="about-header-row">
                            <h2>{t("apprenticeship.educationTitle")}</h2>
                            <Link className="Zeugnis" to="/Certificate">
                                <button>{t("apprenticeship.viewCertificate")}</button>
                            </Link>
                        </div>

                        {t("apprenticeship.education", { returnObjects: true }).map((edu, index) => (
                            <table key={index} className="table-container">
                                <thead>
                                    <tr className="education-header">
                                        <th><h3><strong>{edu.heading}</strong></h3></th>
                                        <th></th>
                                    </tr>
                                    <tr className="school-row">
                                        <th><p>{t("apprenticeship.school")}:</p></th>
                                        <th><p>{edu.school}</p></th>
                                    </tr>
                                    <tr className="location-row">
                                        <th><p>{t("apprenticeship.location")}:</p></th>
                                        <th><p>{edu.location}</p></th>
                                    </tr>
                                    <tr className="start-date-row">
                                        <th><p>{t("apprenticeship.startDate")}:</p></th>
                                        <th><p>{edu.start}</p></th>
                                    </tr>
                                    <tr>
                                        <th><p>{t("apprenticeship.endDate")}:</p></th>
                                        <th><p>{edu.end}</p></th>
                                    </tr>
                                </thead>
                            </table>
                        ))}
                    </section>
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

export default Apprenticeship;
