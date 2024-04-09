import Social from '../Social'
import useAos from '../../hooks/useAOS';
import './footer.css'

function Footer() {
    useAos()

    return (
        <section className='footer' id='contact'>
            <div className="container" data-aos='fade-right'>
                <div className="flex-title">
                    <h2>Contact<b>.</b></h2>
                </div>

                <Social />
            </div>
        </section>
    )
}

export default Footer
