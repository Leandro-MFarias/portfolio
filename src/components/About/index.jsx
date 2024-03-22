import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

import './about.css'

function About() {
    return (
        <section className="about">
            <div className="container">
                <div className="row full-screen align-item-center justify-content-center">
                    <div className="text-about">
                        <p>Olá</p>
                        <h1>Leandro Marinaci</h1>

                        <div className="social-midia">
                            <a href="#" className="outer-shadow">
                                <FaLinkedinIn />
                            </a>

                            <a href="#" className="outer-shadow">
                                <FaGithub />
                            </a>

                            <a href="#" className="outer-shadow">
                                <FaInstagram />
                            </a>

                            <a href="#" className="outer-shadow">
                                <FaWhatsapp />
                            </a>
                        </div>
                    </div>

                    <div className="img-about">
                        <div className="img-box inner-shadow">
                            <img src="./src/assets/minha-branca-menor.png" alt="Foto de perfil" className="outer-shadow" />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default About
