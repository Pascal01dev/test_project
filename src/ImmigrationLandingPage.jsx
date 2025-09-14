import './App.css'
import CoatOfArm from '/src/assets/CoatOfArm.png'
import Logo from '/src/assets/logo.webp'
import Passport from '/src/assets/passports.jpg'

function LandingPage(){
    return(
        <div className="landing-page">
            <header>
                <img src={CoatOfArm} alt="coat-of-arm" />
                <nav>
                    <a href="" id='Active'>HOME</a>
                    <a href="">ABOUT</a>
                    <a href="">SERVICE</a>
                    <a href="">RESOURCES</a>
                    <a href="">MEDIA</a>
                    <a href="">CONTACT US</a>
                    <a href="">FAQS</a>
                </nav>
                <img src={Logo} alt="Logo" />
            </header>

            <section id="hero">
                <div className="hero-content">
                    <h1>WELCOME</h1>
                    <h2>DCIC-UGANDA</h2>
                    <p>The Directorate of Citzenship and Immigration Contro - Uganda</p>
                    <button className="hero-btn1">Read More</button>
                    <button className="hero-btn2">Register</button>
                </div>
            </section>

            <section id="applications">
                <div className="application-content">
                    <div className="apply">
                        <img src={Passport} alt="Passport" />
                        <h3>Passports</h3>
                        <button>APPLY NOW</button>
                    </div>

                    <div className="apply">
                        <img src={Passport} alt="Passport" />
                        <h3>Passports</h3>
                        <button>APPLY NOW</button>
                    </div>

                    <div className="apply">
                        <img src={Passport} alt="Passport" />
                        <h3>Passports</h3>
                        <button>APPLY NOW</button>
                    </div>

                    <div className="apply">
                        <img src={Passport} alt="Passport" />
                        <h3>Passports</h3>
                        <button>APPLY NOW</button>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default LandingPage