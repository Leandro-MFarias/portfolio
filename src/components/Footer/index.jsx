import Social from '../Social'
import './footer.css'

function Footer() {
    return (
        <section className='footer'>
            <div className="container">
                <div className="flex-title">
                    <h2>Contact<b>.</b></h2>
                </div>
                

                <div className="social-midia">
                    <Social />
                </div>
            </div>
        </section>
    )
}

export default Footer