import { BrowserRouter, Routes , Route } from 'react-router-dom'
import Header from './components/Header';
import Profile from './pages/Profile';
import Projects from './pages/Projects';
import ProjectDetails from './pages/ProjectDetails';
import logo from './assets/logo.svg';
import './App.scss';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header logo={logo}/>
        <Routes>
          <Route
            path='/about'
            element={<Profile userName="noumecha"/>}
          />
          <Route
            path='/projects'
            element={<Projects userName="noumecha"/>}
          />
          <Route
            path='/projects/:name'
            element={<ProjectDetails userName="noumecha"/>}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
