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
                        <FaHtml5 className='icon html' />
                    </div>
                    <h3 className='html'>HTML5</h3>
                    <p>
                        Tenho um domínio sólido em HTML, considerado a base do desenvolvimento web. Sempre busco por manter o código limpo, semântico e acessível, utilizando as tags adequadas para cada tipo de conteúdo.
                    </p>
                </div>

                <div className="skill">
                    <div className="logo">
                        <FaCss3Alt className='icon css' />
                    </div>
                    <h3 className='css'>CSS3</h3>
                    <p>
                        Tenho familiaridade com as propriedades e valores do CSS, o que me possibilita posicionar elementos na tela utilizando técnicas como Flexbox e Grid. Além disso, consigo desenvolver layouts responsivos para diferentes tamanhos de tela e estilizar os elementos da página conforme as exigências de design. Com o CSS, consigo criar designs visualmente atrativos e proporcionar uma experiência confortável para o usuário.
                    </p>
                </div>

                <div className="skill">
                    <div className="logo">
                        <IoLogoJavascript className='icon js' />
                    </div>
                    <h3 className='js'>JavaScript</h3>
                    <p>
                        Estou confortável utilizando JavaScript e familiarizado com as últimas práticas e padrões da linguagem, tais como arrow functions, destructuring e async/await. Tenho experiência na utilização de eventos, estruturas de repetição, manipulação do DOM e integração de APIs no desenvolvimento de projetos.
                    </p>
                </div>

                <div className="skill">
                    <div className="logo">
                        <FaReact className='icon react' />
                    </div>
                    <h3 className='react'>React JS</h3>
                    <p>
                        Tenho um conhecimento sólido em React e da sintaxe JSX, incluindo conceitos fundamentais como componentes, props, state e hooks. Desenvolvi projetos pessoais utilizando React, incluindo a contrução deste portfólio. Estou familiarizado com ferramentas populares como Redux e Styled Components.
                    </p>
                </div>

                <div className="skill">
                    <div className="logo">
                        <FaGitAlt className='icon git' />
                    </div>
                    <h3 className='git'>GIT</h3>
                    <p>
                        Utilizo Git regularmente para controle de versionamento de projetos. Estou familiarizado com os comandos básicos e utilizo plataformas de hospedagem como GitHub para colaboração e compartilhamento de código.
                    </p>
                </div>

                <div className="skill">
                    <div className="logo">
                        <FaGithub className='icon hub' />
                    </div>
                    <h3 className='hub'>GitHub</h3>
                    <p>
                        Utilizo o GitHub para hospedar meus projetos, garantindo a segurança do armazenamento dos meus códigos. Estou habituado a criar repositórios, fazer clones e também subir meus projetos pessoais para o GitHub Pages.
                    </p>
                </div>

                <div className="skill">
                    <div className="logo">
                        <SiJest className='icon jest' />
                    </div>
                    <h3 className='jest'>Jest</h3>
                    <p>
                        Estrutura de teste de JavaScript amplamente utilizada. Com o Jest, posso escrever testes unitários e de integração de forma eficaz para garantir a qualidade do meu código.
                    </p>
                </div>

                <div className="skill">
                    <div className="logo">
                        <FaNodeJs className='icon node' />
                    </div>
                    <h3 className='node'>Node.Js</h3>
                    <p>
                        Uso o Node.js para criar aplicações web escaláveis e eficientes no lado do servidor. Estou familiarizado com a manipulação de arquivos, bancos de dados e tarefas assíncronas no Node.js.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Skills
