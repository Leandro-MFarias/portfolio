import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

import './about.css'

function About() {
    return (
        <section className="about" id="about">
            <div className="container">
                <div className="flex-title">
                    <h1>Sobre Mim</h1>
                </div>

                <div className="row full-screen align-item-center justify-content-center">
                    <div className="img-about">
                        <div className="img-box inner-shadow">
                            <img src="./src/assets/test.jpg" alt="Foto de perfil" className="outer-shadow" />
                        </div>
                    </div>

                    <div className="text-about">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ipsa recusandae inventore id qui commodi, vero hic fuga enim eius, doloribus neque dolore temporibus sapiente. Animi sunt quos quae ratione.
                        </p>

                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio earum quae sit amet, saepe recusandae delectus provident quisquam, corporis sed nisi quos quidem reiciendis autem dolorem. Dolorum non totam eligendi!
                        </p>

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
                </div>

            </div>
        </section>
    )
}

export default About
