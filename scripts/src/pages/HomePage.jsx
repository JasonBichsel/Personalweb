import React from "react";
import "./HomePage.css";
import '@fortawesome/fontawesome-free/css/all.min.css';


function HomePage() {
    return (
        <div id="homepage-backgrund">
            <nav>
                <ul>
                    <li><a href="#header-container">Wilkommen</a></li>
                    <li><a href="#about-me">Über mich</a></li>
                    <li><a href="#it-skills">IT-skills</a></li>
                </ul>
            </nav>
            <header>
                <div id="header-container" className="content-section">
                    <h1>Hallo, ich bin Jason</h1>
                    <div id="welcome-section" className="">
                        <p>Ich bin 17 Jahre alt und bin Auszubildender als Informatiker in der Fachrichtung Applikationsentwicklung.</p>
                    </div>
                </div>
            </header>
            <main>
                <div id="main-content" className="main-container">
                    <div id="about-me" className="content-section">
                        <h2>Über mich</h2>
                        <p>Schon seit meiner Kindheit war es mein Ziel, Informatiker zu werden. Nun bin ich bei der WISS, um meinen Berufswunsch zu verwirklichen.</p> 
                        <p>Mein Interesse an der Informatik wurde vor allem durch das Gaming geweckt. Gleichzeitig habe ich den Drang, zu verstehen, wie bestimmte Technologien funktionieren und entwickelt werden.</p> 
                        <p>Zu meinen Stärken zählen insbesondere mein Zeitmanagement und mein analytisches Problemlösungsvermögen. Diese Fähigkeiten helfen mir, komplexe Herausforderungen strukturiert anzugehen.</p> 
                        <p>In der Teamarbeit lege ich großen Wert auf ein respektvolles und produktives Arbeitsumfeld, das von offenen Gesprächen und gegenseitiger Unterstützung lebt.</p> 
                        <p>Ich bin überzeugt, dass ich mit meinen Kompetenzen aktiv zu einer erfolgreichen Zusammenarbeit beitragen kann.</p> 
                        
                        <h2>Interessen</h2> 
                        <p>Computer zusammenbauen, Webseiten erstellen, Gaming und Polizei-Serien.</p>
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
                                <span className="skill-name">Nosql MongoDB</span>
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

                </div>
            </main>
            <footer id="contact-footer" className="content-section">
                <div>

                </div>
            </footer>
        </div>
    );
}
export default HomePage;
