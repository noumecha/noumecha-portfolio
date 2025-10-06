import { Link as RouterLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import "./Header.scss";
import MenuLink from '../MenuLink/MenuLink';

function Header ({logo}) {

    const toggleMenu = (e) => {
        e.preventDefault();
        document.getElementById('App-menu').classList.toggle("mobile");
    };

    return (
        <header className="App-header">
            <nav className='container-flex Nav-bar'>
                <RouterLink to='/' className='App-link App-link-selected'>
                    <img src={logo} className="App-logo" alt="logo"/>
                </RouterLink>
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
        </header>
    );
}

export default Header;