import 'bootstrap/dist/css/bootstrap.css';
import './MenuLink.scss';

const MenuLink = ({toggleMenu}) => {

    return (
        <div className='App-hamburger'>
            <a type='button' onClick={toggleMenu} href='/' className='App-hamburger-link'>
                <div className='App-hamburger-link-line'></div>
                <div className='App-hamburger-link-line'></div>
                <div className='App-hamburger-link-line'></div>
            </a>
        </div>
    )
}

export default MenuLink;