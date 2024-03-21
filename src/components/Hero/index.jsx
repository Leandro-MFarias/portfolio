import { useTypingEffect } from '../../hooks/useTypingEffect'
import Header from '../Header'
import './hero.css'

function Hero() {
    const dev = useTypingEffect("Front-End Developer", 100)

    return (
        <section className='hero'>

            <video autoPlay muted loop className="video-background">
                <source src="src/assets/universe-blue.mp4" type="video/mp4" />
            </video>

            <Header />
            <div className="row align-item-center justify-content-center">
                <div className="hero-text">

                    <div className="hero-span">
                        <span>Welcome,</span>
                        <span> I am</span>
                    </div>
                    <h1>Leandro Farias</h1>
                    <div className='text-dev'>{dev}</div>

                </div>
            </div>
        </section>
    )
}

export default Hero
