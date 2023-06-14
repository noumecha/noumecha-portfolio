import Header from './components/Header';
import Profile from './pages/Profile';
import logo from './assets/logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header logo={logo}/>
      <Profile userName="noumecha"/>
    </div>
  );
}

export default App;
