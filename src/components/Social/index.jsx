import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


function Social() {
    return (
        <div className="social-midia">
            <a href="https://www.linkedin.com/in/leandro-farias-dev/" target="_blank" className="inner-social">
                <FaLinkedinIn />
            </a>

            <a href="https://github.com/Leandro-MFarias" target="_blank" className="inner-social">
                <FaGithub />
            </a>

            <a href="https://www.instagram.com/leandro_marinaci?igsh=bG1yaWZqeGhxazc=" target="_blank" className="inner-social">
                <FaInstagram />
            </a>

            <button className="inner-social btn-email" id="btn-email">
                <MdEmail />
            </button>

        </div>
    )
}

export default Social
