import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

function Social() {
    return (
        <div className="social-midia">
            <a href="https://www.linkedin.com/in/leandro-farias-dev/" target="_blank" className="outer-shadow">
                <FaLinkedinIn />
            </a>

            <a href="https://github.com/Leandro-MFarias" target="_blank" className="outer-shadow">
                <FaGithub />
            </a>

            <a href="https://www.instagram.com/leandro_marinaci?igsh=bG1yaWZqeGhxazc=" target="_blank" className="outer-shadow">
                <FaInstagram />
            </a>

            <a href="https://wa.link/jsofvi" target="_blank" className="outer-shadow">
                <FaWhatsapp />
            </a>
        </div>
    )
}

export default Social
