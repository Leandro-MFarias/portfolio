import "./projects.css"
import useAos from "../../hooks/useAOS"

import portfolio from '../../assets/portfolio.png'
import onePiece from '../../assets/one-piece.png'
import apiGithub from '../../assets/api-github.png'
import ecommerce from '../../assets/ecommerce-soldas.png'
import formulario from '../../assets/formulario.png'
import todo from '../../assets/to-do-list.png'

import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaReact } from "react-icons/fa"
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoTypescript } from "react-icons/bi";


function Projects() {
    useAos()

    return (
        <section className="projects section">
            <div className="container" data-aos='fade-right'>
                <div className="flex-title">
                    <div className='line-title'></div>
                    <h2>Projects<b>.</b></h2>
                </div>
            </div>

            <div className="container container-projects" id="projects">

                <div className="project" data-aos='fade-right'>
                    <a href="https://leandro-portfolio-topaz.vercel.app/" target="_blank">
                        <img src={portfolio} alt="Projeto Portfolio" />
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
                    <a href="https://e-commerce-facul.vercel.app/" target="_blank">
                        <img src={ecommerce} alt="Projeto Ecommerce" />
                        <h3>CBS Soldas/E-Commerce</h3>
                        <div className="info-project">
                            <FaReact className="icon"/>
                            <BiLogoTypescript className="icon"/>
                            <FaCss3Alt className='icon' />
                            <p>🔗Ver no Github Pages</p>
                        </div>
                    </a>
                </div>

                <div className="project" data-aos='fade-left'>
                    <a href="https://leandro-mfarias.github.io/projeto-one-piece/" target="_blank">
                        <img src={onePiece} alt="Projeto One Piece" />
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
                        <img src={apiGithub} alt="Projeto API GitHub" />
                        <h3>Api GitHub</h3>
                        <div className="info-project">
                            <IoLogoJavascript className='icon' />
                            <FaHtml5 className='icon' />
                            <FaCss3Alt className='icon' />
                            <p>🔗Ver no Github Pages</p>
                        </div>
                    </a>
                </div>

                <div className="project" data-aos='fade-right'>
                    <a href="https://leandro-mfarias.github.io/formulario/" target="_blank">
                        <img src={formulario} alt="Projeto Formulario" />
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
                    <a href="https://to-do-list-zeta-roan.vercel.app/" target="_blank">
                        <img src={todo} alt="Projeto To-do-List" />
                        <h3>To Do List</h3>
                        <div className="info-project">
                            <FaReact className='icon' />
                            <BiLogoTypescript className='icon' />
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
