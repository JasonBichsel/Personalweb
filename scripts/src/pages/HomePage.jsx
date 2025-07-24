import React, { useState, useEffect, useRef } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from "react-router-dom";

//CSS
import "./css/HomePage.css";

//Imgs
import Profile_picture from "./imgs/Profilbild.jpg";



function HomePage() {
    const [navOpen, setNavOpen] = useState(false);
    const canvasRef = useRef(null);

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

        let fontSize = 32; // Titel größer, Animation größere Zeichen
        let columns, drops, lastDraw = 0;
        function setupMatrix() {
            columns = Math.floor(canvas.width / fontSize);
            drops = Array(columns).fill(1);
        }
        setupMatrix();
        window.addEventListener("resize", setupMatrix);

        function draw(now) {
            // Langsamer: nur alle ~80ms neu zeichnen
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
                <ul className={navOpen ? "open" : ""}>
                    <li><Link to="/">Welcome</Link></li>
                    <li><Link to="/Apprenticeship">Apprenticeship</Link></li>
                    <li><Link to="/projects">Projecte</Link></li>
                    <li><Link to="/Contact-form">Contact-form</Link></li>
                </ul>
                <img src={Profile_picture} alt="Profil" className="profilbild-nav" />
            </nav>
            <header
                style={{
                    position: "relative",
                    overflow: "hidden",
                    background: "linear-gradient(to bottom, #000 0%, #001133 80%, #001133 100%)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100vh",
                    minHeight: "100vh"
                }}
            >
                <canvas
                    ref={canvasRef}
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        zIndex: 0,
                        pointerEvents: "none"
                    }}
                />
                <div
                    id="header-container"
                    className="content-section"
                    style={{
                        position: "relative",
                        zIndex: 1,
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        textAlign: "center",
                        color: "#fff" // Schrift im Header weiß
                    }}
                >
                    <h1 className="animated-title" style={{ fontSize: "clamp(2.5em, 8vw, 5em)", color: "#fff" }}>Hallo, ich bin Jason.</h1>
                    <div id="welcome-section" className="animated-welcome">
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
export default HomePage;