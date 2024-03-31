import './skills.css'
import { FaReact } from "react-icons/fa"
import { IoLogoJavascript } from "react-icons/io5";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiJest } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";


function Skills() {
    return (
        <section className='skills section' id='skills'>
            <div className="container">
                <div className="flex-title">
                    <h2>Skills</h2>
                </div>
            </div>

            <div className="row container-skills">

                <div className="skill">
                    <div className="logo">
                        <FaReact className='icon' />
                    </div>
                    <h3>React</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis et at illo maiores asperiores.</p>
                </div>

                <div className="skill">
                    <div className="logo">
                        <IoLogoJavascript className='icon' />
                    </div>
                    <h3>JavaScript</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis et at illo maiores asperiores.</p>
                </div>

                <div className="skill">
                    <div className="logo">
                        <FaGitAlt className='icon' />
                    </div>
                    <h3>GIT</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis et at illo maiores asperiores.</p>
                </div>

                <div className="skill">
                    <div className="logo">
                        <FaGithub className='icon' />
                    </div>
                    <h3>GitHub</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis et at illo maiores asperiores.</p>
                </div>

                <div className="skill">
                    <div className="logo">
                        <FaHtml5 className='icon' />
                    </div>
                    <h3>HTML5</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis et at illo maiores asperiores.</p>
                </div>

                <div className="skill">
                    <div className="logo">
                        <FaCss3Alt className='icon' />
                    </div>
                    <h3>CSS3</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis et at illo maiores asperiores.</p>
                </div>

                <div className="skill">
                    <div className="logo">
                        <SiJest className='icon' />
                    </div>
                    <h3>Jest</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis et at illo maiores asperiores.</p>
                </div>

                <div className="skill">
                    <div className="logo">
                        <FaNodeJs className='icon' />
                    </div>
                    <h3>NodeJs</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis et at illo maiores asperiores.</p>
                </div>
            </div>
        </section>
    )
}

export default Skills
