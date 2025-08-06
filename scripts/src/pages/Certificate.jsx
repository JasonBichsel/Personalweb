import React, { useState } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "./css/HomePage.css";
import Profile_picture from "./imgs/Profilbild.jpg";

function Zeugnis() {
    const [activeTab, setActiveTab] = useState("S4");
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
                    <div className="zeugnis-header">
                        <h1>{t("certificate.title")}</h1>
                    </div>

                    <div id="Semester">
                        <div className="tab-buttons">
                            {["S1", "S2", "S3", "S4"].map((sem) => (
                                <button
                                    key={sem}
                                    onClick={() => setActiveTab(sem)}
                                    className={activeTab === sem ? "active" : ""}
                                >
                                    {t(`certificate.semester`)} {sem.slice(1)}
                                </button>
                            ))}
                        </div>

                        <div>
                            {["S1", "S2", "S3", "S4"].includes(activeTab) && (
                                <ZeugnisTabelle
                                    data={t(`certificate.${activeTab}`, { returnObjects: true })}
                                />
                            )}
                        </div>
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

// 🔄 Tabelle mit Noten-Unterstützung
function ZeugnisTabelle({ data }) {
    return (
        <div className="main-container">
            <table className="table-container zeugnis-tabelle">
                <thead>
                    {data.map((entry, i) => (
                        <tr key={i}>
                            <th><p>{entry.module}</p></th>
                            <th><p>{entry.grade}</p></th>
                        </tr>
                    ))}
                </thead>
            </table>
        </div>
    );
}

export default Zeugnis;
