import video from '../../assets/universe-blue.mp4'
import { TypeDev } from '../TypeAnimation'
import Header from '../Header'
import './hero.css'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";


function Hero() {
    return (
        <section className='hero'>
            <video autoPlay muted loop className="video-background">
                <source src={video} type="video/mp4" />
            </video>

            <Header />
            
            <div className="row align-item-center justify-content-center">
                <div className="hero-text">
                    <h2>Hey, I'm Leandro Farias</h2>
                    <TypeDev />
                </div>

                <a href="#about" className='arrow'>
                    <MdOutlineKeyboardArrowDown />
                </a>
            </div>
        </section>
    )
}

export default Hero
