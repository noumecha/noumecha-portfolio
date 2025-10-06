import 'bootstrap/dist/css/bootstrap.css';
import './Hero.scss'

function Hero () {
        return (
            <div className='hero-section'>
                <h4 className='hero-section-subtitle'>
                    Bienvenue
                </h4>
                <h1 className='hero-section-title'>
                    Je suis <span>Noumecha</span> Spaker
                </h1>
                <h4 className='hero-section-subtitle hero-section-btn btn'>
                    Ingénieur/Travaux/Informatiques
                </h4>
            </div>
        );
}

export default Hero;