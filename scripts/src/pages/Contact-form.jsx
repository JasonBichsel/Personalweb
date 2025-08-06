import React, { useState } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

//CSS
import "./css/HomePage.css";

//Imgs
import Profile_picture from "./imgs/Profilbild.jpg";

function Contactform() {
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
                    <div id="Contact-form" className="content-section">
                        <h2>{t("contactForm.title")}</h2>
                        <form action="https://formsubmit.co/Bichsel6343@outlook.com" method="POST">
                            <input type="hidden" name="_captcha" value="false" />

                            <label htmlFor="name">{t("contactForm.name")}:</label><br />
                            <input type="text" id="name" name="name" required /><br /><br />

                            <label htmlFor="email">{t("contactForm.email")}:</label><br />
                            <input type="email" id="email" name="email" required /><br /><br />

                            <label htmlFor="message">{t("contactForm.message")}:</label><br />
                            <textarea id="message" name="message" rows="5" required></textarea><br /><br />

                            <button type="submit">{t("contactForm.send")}</button>
                        </form>
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
export default Contactform;