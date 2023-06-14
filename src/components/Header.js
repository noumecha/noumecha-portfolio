import "./Header.css";

function Header ({logo}) {
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <div>
                Edit <code>
                    src/App.js
                </code>
                and save to reload
            </div>
        </header>
    );
}

export default Header;