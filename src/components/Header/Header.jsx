import { NavLink as RouterLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import "./Header.scss";
import MenuLink from '../MenuLink/MenuLink';

function Header ({logo}) {

    const toggleMenu = (e) => {
        e.preventDefault();
        document.getElementById('App-menu').classList.toggle("mobile");
    };

    return (
        <header className="App-header container-fluid Nav-bar">
            <RouterLink to='/' className='App-link'>
                <img src={logo} className="App-logo" alt="logo"/>
            </RouterLink>
            <div className='App-menu' id="App-menu">
                <RouterLink to='/about' className={({isActive}) => isActive ? 'App-link App-link-selected' : 'App-link'}>
                    A Propos
                </RouterLink>
                <RouterLink to='/Services' className={({isActive}) => isActive ? 'App-link App-link-selected' : 'App-link'}>
                    Services
                </RouterLink>
                <RouterLink to='/Skills' className={({isActive}) => isActive ? 'App-link App-link-selected' : 'App-link'}>
                    Competences
                </RouterLink>
                <RouterLink to='/Resume' className={({isActive}) => isActive ? 'App-link App-link-selected' : 'App-link'}>
                    Cursus
                </RouterLink>
                <RouterLink to='/projects' className={({isActive}) => isActive ? 'App-link App-link-selected' : 'App-link'}>
                    Projets
                </RouterLink>
                <RouterLink to='/Contact' className={({isActive}) => isActive ? 'App-link App-link-selected' : 'App-link'}>
                    Contactez-moi
                </RouterLink>
                <div className='App-lang'>
                    <a href='/' className='App-lang-link'>
                        EN
                    </a>
                </div>
            </div>
            <MenuLink toggleMenu={toggleMenu}/>
        </header>
    );
}

export default Header;