import "./projects.css"
import useAos from "../../hooks/useAOS"

import portfolio from '../../assets/portfolio.png'
import onePiece from '../../assets/one-piece.png'
import apiGithub from '../../assets/api-github.png'
import agencia from '../../assets/agencia-xyz.png'
import formulario from '../../assets/formulario.png'
import attackTitan from '../../assets/attack-on-titan.png'

import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaReact } from "react-icons/fa"
import { IoLogoJavascript } from "react-icons/io5";

function Projects() {
    useAos()

    return (
        <section className="projects section">
            <div className="container" data-aos='fade-right'>
                <div className="flex-title">
                    <h2>Projetos</h2>
                </div>
            </div>

            <div className="container container-projects" id="projects">

                <div className="project" data-aos='fade-right'>
                    <a href="https://leandro-portfolio-g7yw4yngh-leandros-projects-93f8007b.vercel.app/" target="_blank">
                        <img src={portfolio} alt="XXXXXXXXXX" />
                        <h3>Portfolio</h3>
                        <div className="info-project">
                            <FaReact className='icon' />
                            <IoLogoJavascript className='icon' />
                            <FaHtml5 className='icon' />
                            <FaCss3Alt className='icon' />
                            <p>🔗Ver no Github Pages</p>
                        </div>
                    </a>
                </div>

                <div className="project" data-aos='fade-left'>
                    <a href="https://leandro-mfarias.github.io/projeto-one-piece/" target="_blank">
                        <img src={onePiece} alt="XXXXXXXXXX" />
                        <h3>One Piece</h3>
                        <div className="info-project">
                            <IoLogoJavascript className='icon' />
                            <FaHtml5 className='icon' />
                            <FaCss3Alt className='icon' />
                            <p>🔗Ver no Github Pages</p>
                        </div>
                    </a>
                </div>

                <div className="project" data-aos='fade-right'>
                    <a href="https://leandro-mfarias.github.io/search-github-api/" target="_blank">
                        <img src={apiGithub} alt="XXXXXXXXXX" />
                        <h3>Api GitHub</h3>
                        <div className="info-project">
                            <IoLogoJavascript className='icon' />
                            <FaHtml5 className='icon' />
                            <FaCss3Alt className='icon' />
                            <p>🔗Ver no Github Pages</p>
                        </div>
                    </a>
                </div>

                <div className="project" data-aos='fade-left'>
                    <a href="https://leandro-mfarias.github.io/landing-page-agencia/" target="_blank">
                        <img src={agencia} alt="XXXXXXXXXX" />
                        <h3>Agência XYZ</h3>
                        <div className="info-project">
                            <FaHtml5 className='icon xyz' />
                            <FaCss3Alt className='icon xyz' />
                            <p>🔗Ver no Github Pages</p>
                        </div>
                    </a>
                </div>

                <div className="project" data-aos='fade-right'>
                    <a href="https://leandro-mfarias.github.io/formulario/" target="_blank">
                        <img src={formulario} alt="XXXXXXXXXX" />
                        <h3>Formulário</h3>
                        <div className="info-project">
                            <IoLogoJavascript className='icon' />
                            <FaHtml5 className='icon' />
                            <FaCss3Alt className='icon' />
                            <p>🔗Ver no Github Pages</p>
                        </div>
                    </a>
                </div>

                <div className="project" data-aos='fade-left'>
                    <a href="https://leandro-mfarias.github.io/projeto-attack-on-titan/" target="_blank">
                        <img src={attackTitan} alt="XXXXXXXXXX" />
                        <h3>Attack On Titan</h3>
                        <div className="info-project">
                            <IoLogoJavascript className='icon' />
                            <FaHtml5 className='icon' />
                            <FaCss3Alt className='icon' />
                            <p>🔗Ver no Github Pages</p>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Projects
