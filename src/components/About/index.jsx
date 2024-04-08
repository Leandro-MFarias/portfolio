import perfil from '../../assets/minha-menor.png'
import './about.css'
import useAos from '../../hooks/useAOS';
import Social from "../Social";

function About() {
    useAos()

    return (
        <section className="about section" id="about">
            <div className="container" data-aos='fade-right'>
                <div className="flex-title">
                    <div className='line-title'></div>
                    <h2>About<b>.</b></h2>
                </div>

                <div className="full-screen row align-item-center justify-content-center">
                    <div className="img-about">
                        <div className="img-box inner-shadow">
                            <img src={perfil} />
                        </div>
                    </div>

                    <div className="text-about">
                        <p>
                            Olá! Me chamo Leandro, sou um ex-jogador de basquete e estou em transição para me tornar um programador frontend. Descobri a área de programação por meio de amigos e me apaixonei pelo desafio e pela criatividade. Estou totalmente dedicado ao mundo da tecnologia agora e confiante de que posso contribuir significativamente em qualquer equipe com minhas habilidades.
                        </p>

                        <p>
                            Estou constantemente buscando novos projetos para me desafiar e aprimorar minhas habilidades. Participo de comunidades online em busca de feedback construtivo e estou sempre buscando me manter atualizado com as tecnologias mais recentes. No momento, estou focado em aprender TypeScript.
                        </p>

                        <p>
                            Além disso, gosto de passar meu tempo livre assistindo a séries, filmes e animes, e também jogando algumas coisinhas. 😅
                        </p>

                        <Social />

                    </div>
                </div>

            </div>
        </section>
    )
}

export default About
