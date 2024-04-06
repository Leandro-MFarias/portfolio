import './skills.css'
import useAos from '../../hooks/useAOS';

import { FaReact } from "react-icons/fa"
import { IoLogoJavascript } from "react-icons/io5";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiJest } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";


function Skills() {
    useAos()

    return (
        <section className='skills section' id='skills'>
            <div className="container" data-aos='zoom-in-up'>
                <div className="flex-title">
                    <div className='line-title'></div>
                    <h2>Skills<b>.</b></h2>
                    <div className='line-title'></div>
                </div>
            </div>

            <div className="row container-skills" data-aos='zoom-in-up'>

                <div className="skill">
                    <div className="logo">
                        <FaReact className='icon' />
                    </div>
                    <h3>React</h3>
                    <p>
                        O React é uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.
                    </p>
                </div>

                <div className="skill">
                    <div className="logo">
                        <IoLogoJavascript className='icon' />
                    </div>
                    <h3>JavaScript</h3>
                    <p>
                        JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web.
                    </p>
                </div>

                <div className="skill">
                    <div className="logo">
                        <FaGitAlt className='icon' />
                    </div>
                    <h3>GIT</h3>
                    <p>
                        GIT é um sistema de controle de versões distribuído, usado principalmente no desenvolvimento de software, mas pode ser usado para registrar o histórico de edições de qualquer tipo de arquivo.
                    </p>
                </div>

                <div className="skill">
                    <div className="logo">
                        <FaGithub className='icon' />
                    </div>
                    <h3>GitHub</h3>
                    <p>
                        GitHub é uma plataforma de hospedagem de código-fonte e arquivos com controle de versão usando o Git. Ele permite que programadores, utilitários ou qualquer usuário cadastrado na plataforma contribuam em projetos privados e/ou Open Source de qualquer lugar do mundo.
                    </p>
                </div>

                <div className="skill">
                    <div className="logo">
                        <FaHtml5 className='icon' />
                    </div>
                    <h3>HTML5</h3>
                    <p>
                        HTML é uma linguagem de marcação utilizada na construção de páginas na Web. Documentos HTML podem ser interpretados por navegadores. A tecnologia é fruto da junção entre os padrões HyTime e SGML.
                    </p>
                </div>

                <div className="skill">
                    <div className="logo">
                        <FaCss3Alt className='icon' />
                    </div>
                    <h3>CSS3</h3>
                    <p>
                        CSS é chamado de linguagem Cascading Style Sheet e é usado para estilizar elementos escritos em uma linguagem de marcação como HTML. O CSS separa o conteúdo da representação visual do site. Pense na decoração da sua página.
                    </p>
                </div>

                <div className="skill">
                    <div className="logo">
                        <SiJest className='icon' />
                    </div>
                    <h3>Jest</h3>
                    <p>
                        Jest é um framework de teste em JavaScript projetado para garantir a correção de qualquer código JavaScript. Ele permite que você escreva testes com uma API acessível, familiar e rica em recursos que lhe dá resultados rapidamente.
                    </p>
                </div>

                <div className="skill">
                    <div className="logo">
                        <FaNodeJs className='icon' />
                    </div>
                    <h3>NodeJs</h3>
                    <p>
                        Node.js é um software de código aberto, multiplataforma, baseado no interpretador V8 do Google e que permite a execução de códigos JavaScript fora de um navegador web. A principal característica do Node.js é sua arquitetura assíncrona e orientada por eventos.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Skills
