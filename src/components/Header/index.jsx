import './header.css'

function Header() {
    return (
            <header className='header'>
                <div className="container">
                    <div className="row justify-content-center gap">
                        <nav>
                            <input id="menu-hamburguer" type="checkbox" />

                            <label htmlFor="menu-hamburguer">
                                <div className="menu">
                                    <span className="hamburguer"></span>
                                </div>
                            </label>

                            <ul>
                                <li>
                                    <a href="#about" className='hover-animation'>About</a>
                                </li>
                                <li>
                                    <a href="#skills" className='hover-animation'>Skills</a>
                                </li>
                                <li>
                                    <a href="#projects" className='hover-animation'>Projects</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
    )
}

export default Header
