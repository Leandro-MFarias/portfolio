import { TypeDev } from '../TypeAnimation'
import Header from '../Header'
import './hero.css'
import video from '../../assets/universe-blue.mp4'
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

                    <div className="hero-span">
                        <span>Welcome,</span>
                        <span> I am</span>
                    </div>
                    <h2>Leandro Farias</h2>
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
