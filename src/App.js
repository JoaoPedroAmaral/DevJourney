import logo from './Images/Logo.png';
import theme from './Images/theme.png'
import github from './Images/GitHub.png'
import linkedin from './Images/Ln.png'
import about from './Images/aboutMe.png'
import './App.css';


function App() {
  return (
    <div className="App">
      <div className="AppNav">
        <div className='AppRight'>
          <img className="AppLogo" src={logo} />

          <div className="AppButtons">
            <button className='AppBtnTheme'>
              <img title="Tema" className="AppTheme" src={theme}/>
            </button>
          </div>

        </div>

        <h1 className='AppDevJourneyTile'>DevJourney</h1>

        <div className="AppRedes">
          <a title="GitHub" href="https://github.com/JoaoPedroAmaral"><img className='AppRedesIcon' src={github}/></a>
          <a title="Linkedin" href="https://www.linkedin.com/in/joaopedroamaralrosa/"><img className='AppRedesIcon' src={linkedin}/></a>
          <a title="Sobre mim"><img className='AppRedesIcon' src={about}/></a>

        </div>

      </div>
    </div>
  );
}

export default App;
