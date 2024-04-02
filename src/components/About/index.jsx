import perfil from '../../assets/minha-menor.png'
import './about.css'
import Social from "../Social";

function About() {
    return (
        <section className="about section" id="about">
            <div className="container">
                <div className="flex-title">
                    <h2>Sobre Mim</h2>
                </div>

                <div className="full-screen row align-item-center justify-content-center">
                    <div className="img-about">
                        <div className="img-box inner-shadow">
                            <img src={perfil} className="outer-shadow" />
                        </div>
                    </div>

                    <div className="text-about">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ipsa recusandae inventore id qui commodi, vero hic fuga enim eius, doloribus neque dolore temporibus sapiente. Animi sunt quos quae ratione.
                        </p>

                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio earum quae sit amet, saepe recusandae delectus provident quisquam, corporis sed nisi quos quidem reiciendis autem dolorem. Dolorum non totam eligendi!
                        </p>

                        <Social />
                        
                    </div>
                </div>

            </div>
        </section>
    )
}

export default About
