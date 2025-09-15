import './App.css'
import CoatOfArm from '/src/assets/CoatOfArm.png'
import Logo from '/src/assets/logo.webp'
import Passport from '/src/assets/passports.jpg'
import Boarder from '/src/assets/boarder.jpg'
import Visa from '/src/assets/Visa.jpg'
import Permit from '/src/assets/permit.jpg'
import Citzenship from '/src/assets/Citzenship.jpg'

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

            <section id="services">
                <div className="services-content">
                    <h1>WHAT WE DO?</h1>
                    <h2>Our Services</h2>
                    <hr />
                    <div className="service-items">
                        <div className="item">
                            <img src={Boarder} alt="Boarder-management" />
                            <h3>Boarder Management</h3>
                            <p>A map of all our entry/exit points and regional offices</p>
                        </div>
                        
                        <div className="item">
                            <img src={Permit} alt="Boarder-management" />
                            <h3>Work Permit</h3>
                            <p>This permit allows the applicant to live and work in Uganda</p>
                        </div>

                        <div className="item">
                            <img src={Visa} alt="Boarder-management" />
                            <h3>Visa and Passes</h3>
                            <p>The authorisation given to visit, stay or work in the pearl of </p>
                        </div>

                        <div className="item">
                            <img src={Citzenship} alt="Boarder-management" />
                            <h3>Uganda Citzenship</h3>
                            <p>Ugandan Citzenship is obtained in the following ground by Bi</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default LandingPage