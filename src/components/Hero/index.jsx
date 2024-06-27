import video from '../../assets/bed-room.gif'
import { TypeDev } from '../TypeAnimation'
import Header from '../Header'
import './hero.css'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";


function Hero() {
    return (
        <section className='hero'>

            <img src={video} className="video-background" alt="pixel art gif" />

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
