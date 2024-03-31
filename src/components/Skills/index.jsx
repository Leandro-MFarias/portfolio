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
                <div className="row">
                    <div className="flex-title">
                        <h2>Skills</h2>
                    </div>
                </div>

                <div className="row">
                    {/* <div className="container-icons"></div> */}
                    <div className="skill-icon">
                        <FaReact className='icon' />
                        <IoLogoJavascript className='icon' />
                        <FaGitAlt className='icon' />
                        <FaGithub className='icon' />
                        <FaHtml5 className='icon' />
                        <FaCss3Alt className='icon' />
                        <SiJest className='icon' />
                        <FaNodeJs className='icon' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills