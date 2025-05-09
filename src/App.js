import logo from "./Images/Logo.png";
import theme from "./Images/theme.png";
import github from "./Images/GitHub.png";
import linkedin from "./Images/Ln.png";
import about from "./Images/aboutMe.png";
import "./App.css";
import { useEffect, useRef } from "react";
import { Link } from 'react-scroll';

function App() {
  const typingRef = useRef(null);
  const text = "Desenvolvedor Java com experiência em Spring Framework e MySQL para soluções back-end. Também atuo no front-end com HTML, CSS e JavaScript, criando interfaces dinâmicas e integradas.";
  const typingDone = useRef(false); 
  const sobreMimRef = useRef(null);

  useEffect(() => {
    if (typingDone.current) return; 
    typingDone.current = true; 

    const ref = typingRef.current;
    if (!ref) return;

    let i = 0;
    ref.textContent = "";

    const typeWriter = () => {
      if (i < text.length) {
        ref.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100); 
      }
    };

    typeWriter(); 
  }, [text]); 


  const scrollToSobreMim = () => {
    const element = document.getElementById('Sobre-mim');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };


  return (
    <div className="App">
      <div className="AppNav">
        <div className="AppRight">
          <img className="AppLogo" src={logo} />

          <div className="AppButtons">
            <button className="AppBtnTheme">
              <img title="Tema" className="AppTheme" src={theme} />
            </button>
          </div>
        </div>

        <h1 className="AppDevJourneyTile">DevJourney</h1>

        <div className="AppRedes">
          <a title="GitHub" href="https://github.com/JoaoPedroAmaral">
            <img className="AppRedesIcon" src={github} />
          </a>
          <a
            title="Linkedin"
            href="https://www.linkedin.com/in/joaopedroamaralrosa/"
          >
            <img className="AppRedesIcon" src={linkedin} />
          </a>
          <Link title="Sobre mim"
            to="Sobre-mim"
            smooth={true}
            duration={500}       // Duração em ms
            offset={-50}        // Ajuste de posição
            spy={true}
            className="AppSobreMim">
            <img className="AppRedesIcon" src={about} />
          </Link>
        </div>
      </div>

      <div className="AppApresentacaoArea">
        <div>
          <img className="AppApresentacaoLogo" src={logo} />
          <p className="AppApresentacaoTexto" ref={typingRef}></p>
        </div>
      </div>
      
      <div className="AppSobreMim" id="Sobre-mim">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit sodales urna vel faucibus. Mauris suscipit porttitor risus quis gravida. Cras et consequat lacus, et dapibus mauris. Sed vestibulum feugiat scelerisque. Nulla facilisi. Sed id dictum enim. Cras vel ante eu nisl tristique accumsan. Maecenas tempus tortor dolor, et sodales ligula scelerisque eget. Ut dapibus nisi ut tempus posuere. Suspendisse ac sodales felis. Donec in pulvinar orci.

Nunc sit amet pretium tortor. Morbi volutpat at ipsum id rhoncus. Suspendisse lacinia sit amet nisl vel rhoncus. Sed tincidunt faucibus tellus a ornare. Nulla accumsan sapien sed ante ultrices maximus. Praesent semper porta magna, quis iaculis ligula aliquam a. Mauris pharetra dignissim lectus, in rhoncus ipsum euismod a. Cras vel lorem neque. Mauris sollicitudin imperdiet neque, sit amet molestie arcu molestie id. In facilisis, metus et maximus pulvinar, est diam blandit odio, eu molestie tellus mi sed ipsum. Suspendisse eleifend nulla quis odio gravida mollis. Vivamus eleifend massa sed neque accumsan, eu porta augue tincidunt. Nullam dolor lectus, aliquam vel ullamcorper sit amet, aliquet sit amet lacus. Duis interdum, ante in varius faucibus, diam lacus congue orci, sed consectetur justo ipsum et ipsum. Nullam lectus augue, finibus non est vel, venenatis consectetur nibh.</p>
      </div>
    </div>
  );
}

export default App;
