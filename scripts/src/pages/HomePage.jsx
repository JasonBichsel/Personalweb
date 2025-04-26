import React from "react";
import "./HomePage.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import PlaceholderImage from './img/Placeholderjpg.jpg';
import TicTacToe from './img/Tic-Tac-Toe.jpg';

function HomePage() {
    return (
        <div id="homepage-backgrund">
            <nav id="main-navigation" className="navigation-bar">
                 <ul>
                     <li><a href="#header-container">Wilkommen</a></li>
                     <li><a href="#about-me">Über mich</a></li>
                     <li><a href="#it-skills">IT-skills</a></li>
                     <li><a href="#education-timeline">Ausbildung</a></li>
                     <li><a href="#projects">Projekte</a></li>
                     <li><a href="#contact-footer">Kontakt</a></li>
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
                    <div id="education-timeline" className="content-section">
                        <h2>Ausbildung</h2>
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
                                    <th><p>Start Datum: </p></th>
                                    <th><p>August, 2023</p></th>
                                </tr>
                                <tr>
                                    <th><p>Ende Datum: </p></th>
                                    <th><p>laufend</p></th>
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
                                    <th><p>Rotkreuz Oberstufeschule Sekundarstufe</p></th>
                                </tr>
                                <tr className="location-row"> 
                                    <th><p>Ort:</p></th>
                                    <th><p>Zug, Rotkreuz</p></th>
                                </tr>
                                <tr className="start-date-row">
                                    <th><p>Start Datum: </p></th>
                                    <th><p>August, 2020</p></th>
                                </tr>
                                <tr>
                                    <th><p>Ende Datum: </p></th>
                                    <th><p>August, 2023</p></th>
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
                                    <th><p>Start Datum: </p></th>
                                    <th><p>August, 2014</p></th>
                                </tr>
                                <tr>
                                    <th><p>Ende Datum: </p></th>
                                    <th><p>August, 2020</p></th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                    <div id="projects"> 
                        <h2>Projekte</h2>
                        <div className="project-container">
                            <div>
                                <img src={TicTacToe} alt="Tic-Tac-Toe"/>
                                <p>Es ist ein einfaches Tic-Tac-Toe-Spiel mit ein paar Erweiterungen, damit der Spielspaß etwas länger anhält. Anstelle von X und O werden Bilder verwendet, und das Spielfeld kann auf bis zu 5×5 Felder vergrößert werden.</p>
                                <a href="https://jasonbichsel.github.io/Tic-Tac-Toe-with-imgs/" target="_blank" rel="noopener noreferrer"> <p><strong>Tic-Tac-Toe</strong><i> </i><i className="fas fa-external-link-alt"></i></p></a>
                                <a className="github-link" href="https://github.com/JasonBichsel/Tic-Tac-Toe-with-imgs" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i><i> </i><i className="fas fa-external-link-alt"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <footer id="contact-footer" className="content-section">
                <div id="details">
                    <div>
                        <a href="https://www.wiss.ch/de-CH"  target="_blank" rel="noopener noreferrer"><button>Firmen Bewerbung</button></a>
                        <a href="https://www.wiss.ch/de-CH"  target="_blank" rel="noopener noreferrer"><button>Die beworbenen Firmen</button></a>
                    </div>
                    <div>
                        <strong>Navigation:</strong>
                        <p></p>
                        <ul>
                            <li><a href="#welcome-section">Wilkommen</a></li>
                            <li><a href="#about-me">Über mich</a></li>
                            <li><a href="#it-skills">IT Skills</a></li>
                            <li><a href="#education-timeline">Ausbildung</a></li>
                            <li><a href="#projects">Projekte</a></li>
                            <li><a href="#contact-footer">Kontakt</a></li>
                        </ul>
                    </div>
                    <div>
                        <strong>Kontakt Daten:</strong>
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
