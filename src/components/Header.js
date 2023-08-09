import { Link as RouterLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import "./Header.scss";

function Header ({logo}) {
    return (
        <header className="App-header">
            <nav className='container-flex Nav-bar'>
                <img src={logo} className="App-logo" alt="logo"/>
                <div className='App-menu'>
                    <RouterLink to='/about' className='App-link App-link-selected'>
                        A Propos
                    </RouterLink>
                    <RouterLink to='/Services' className='App-link'>
                        Services
                    </RouterLink>
                    <RouterLink to='/Skills' className='App-link'>
                        Competences
                    </RouterLink>
                    <RouterLink to='/Resume' className='App-link'>
                        Cursus
                    </RouterLink>
                    <RouterLink to='/projects' className='App-link'>
                        Projets
                    </RouterLink>
                    <RouterLink to='/Contact' className='App-link'>
                        Contactez-moi
                    </RouterLink>
                    <div className='App-lang'>
                        <a href='/' className='App-lang-link'>
                            EN
                        </a>
                    </div>
                </div>
                <div className='App-hamburger'>
                    <a href='/' className='App-hamburger-link'>
                        <div className='App-hamburger-link-line'></div>
                        <div className='App-hamburger-link-line'></div>
                        <div className='App-hamburger-link-line'></div>
                    </a>
                </div>
            </nav>
            <div className='App-header-desc'>
                <h4 className='App-header-desc-subtitle'>
                    Bienvenue
                </h4>
                <h1 className='App-header-desc-title'>
                    Je suis <span>Noumecha</span> Spaker
                </h1>
                <h4 className='App-header-desc-subtitle App-header-desc-btn btn'>
                    Ingénieur/Travaux/Informatiques
                </h4>
            </div>
        </header>
    );
}

export default Header;