import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import WorkExperience from './components/WorkExperience';
import MyProjects from './components/MyProjects';
import ContactMe from './components/ContactMe';
import ProgressBar from './components/ProgressBar';

function App() {
  return (
    <div className="App">
    <ProgressBar id1={{id:"js-container"}}/>
    <div className="container" id="js-container">
    <Navbar/>
    <div className="section">
    <section id="H" className="home"><Home/></section>      
    <section id="WE" className="workexperience"><WorkExperience/></section>      
    <section id="MP"className="myprojects"><MyProjects/></section>      
    <section id="AM" className="aboutme"><AboutMe/></section>      
    <section id="CM" className="contactme"><ContactMe/></section>
    </div>   
    </div>   
    </div>
  );
}

export default App;
