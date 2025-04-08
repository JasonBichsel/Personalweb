import React from "react";
import "./HomePage.css";
import '@fortawesome/fontawesome-free/css/all.min.css';


function HomePage() {
    return (
        <div id="homepage-backgrund">
            <nav>
                <ul>
                    <li><a href="#header-container">Wilkommen</a></li>
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
                <div>

                </div>
            </main>
            <footer>
                <div>

                </div>
            </footer>
        </div>
    );
}
export default HomePage;
