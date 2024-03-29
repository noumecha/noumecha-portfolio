import { Link as RouterLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import "./Header.scss";
import MenuLink from './MenuLink/MenuLink';

function Header ({logo}) {

    const toggleMenu = (e) => {
        e.preventDefault();
        document.getElementById('App-menu').classList.toggle("mobile");
    };

    return (
        <header className="App-header">
            <nav className='container-flex Nav-bar'>
                <img src={logo} className="App-logo" alt="logo"/>
                <div className='App-menu' id="App-menu">
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
                <MenuLink toggleMenu={toggleMenu}/>
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