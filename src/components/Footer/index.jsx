import Social from '../Social'
import './footer.css'

function Footer() {
    return (
        <section className='footer'>
            <div className="container">
                <h2>Leandro Marinaci</h2>

                <div className="social-midia">
                    <Social />
                </div>
            </div>
        </section>
    )
}

export default Footer