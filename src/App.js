import logo from "./Images/Logo.svg";
import theme from "./Images/theme.png";
import github from "./Images/GitHub.png";
import linkedin from "./Images/Ln.png";
import about from "./Images/aboutMe.png";
import "./App.css";
import "./Css/Animated.css";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-scroll";
import PostList from './Pages/PostList.js'
import ProjetoList from './Pages/Projetos.js'
import Carreira from './Pages/Carreira.js'
import Redes from './Pages/Redes.js'




function App() {
  const typingRef = useRef(null);
  const [ativo, setAtivo] = useState("checkboxPostagens");

  const text =
    "Desenvolvedor Java, focado na criação de soluções back-end robustas e escaláveis, com experiência no ecossistema Spring (Spring Boot, Spring Data, etc.), Maven, JWT e mais. Tambem conhecimento em banco de dados MySQL. No front-end, atuo com HTML/CSS, React e JavaScript, desenvolvendo interfaces responsivas, dinâmicas e integradas às APIs. Busco sempre alinhar boa arquitetura com código limpo e manutenção eficiente.";
  const typingDone = useRef(false);
  const sobreMimRef = useRef(null);

  const handleChangeArea = (id) => {
      setAtivo(id);
    };

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
        setTimeout(typeWriter, 20);
      }
    };

    typeWriter();
  }, [text]);

  const scrollToSobreMim = () => {
    const element = document.getElementById("Sobre-mim");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
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
          <Link
            title="Sobre mim"
            to="Sobre-mim"
            smooth={true}
            duration={500} 
            offset={-50}
            spy={true}
            className="AppRedesIcon"
          >
            <img className="AppRedesIcon" src={about} />
          </Link>
        </div>
      </div>

      <div className="AppApresentacaoArea"><div className="starfall">
          <div className="falling-star"></div>
          <div className="falling-star"></div>
          <div className="falling-star"></div>
          <div className="falling-star"></div>
          <div className="falling-star"></div>
          <div className="falling-star"></div>
          <div className="falling-star"></div>
          <div className="falling-star"></div>
          <div className="falling-star"></div>
          <div className="falling-star"></div>
          <div className="falling-star"></div>
          <div className="falling-star"></div>
          <div className="falling-star"></div>
          <div className="falling-star"></div>
          <div className="falling-star"></div>
          <div className="falling-star"></div>
          <div className="falling-star"></div>
          <div className="falling-star"></div>
          <div className="falling-star"></div>
          <div className="falling-star"></div>
          <div className="falling-star"></div>
          <div className="falling-star"></div>
          <div className="falling-star"></div>
          <div className="falling-star"></div>
          <div className="falling-star"></div>
          <div className="falling-star"></div>
          <div className="falling-star"></div>
          <div className="falling-star"></div>
          <div className="falling-star"></div>
          <div className="falling-star"></div>
          <div className="falling-star"></div>
          <div className="falling-star"></div>
          <div className="falling-star"></div>
          <div className="falling-star"></div>
        </div>
        <img className="AppApresentacaoLogo" src={logo} />
        <p className="AppApresentacaoTexto" ref={typingRef}></p>
      </div>

      <div className="AppMenu">
        <div className="AppMenuArea">
            <input 
              type="checkbox"
              checked={ativo === "checkboxPostagens"}
              onChange={() => handleChangeArea("checkboxPostagens")}
              className="AppCheckbox"
              id="checkboxPostagens"
            ></input>
            <label className="AppBtn" htmlFor="checkboxPostagens">
              Postagem
            </label>
            <input 
              type="checkbox"
              checked={ativo === "checkboxProjetos"}
              onChange={() => handleChangeArea("checkboxProjetos")}
              className="AppCheckbox"
              id="checkboxProjetos"
            ></input>
            <label className="AppBtn" htmlFor="checkboxProjetos">
              Projetos
            </label>
            <input 
              type="checkbox"
              checked={ativo === "checkboxCarreira"}
              onChange={() => handleChangeArea("checkboxCarreira")}
              className="AppCheckbox"
              id="checkboxCarreira"
            ></input>
            <label className="AppBtn" htmlFor="checkboxCarreira">
              Carreira
            </label>
            <input 
              type="checkbox"
              checked={ativo === "checkboxRedes"}
              onChange={() => handleChangeArea("checkboxRedes")}
              className="AppCheckbox"
              id="checkboxRedes"
            ></input>
            <label className="AppBtn" htmlFor="checkboxRedes">
              Redes
            </label>
        </div>
      </div>

      <div className="Postagens">
        <div className={ativo == "checkboxPostagens" ? "PostArea" : "PostArea hidden"}>
          <PostList/>
        </div>

        <div className={ativo == "checkboxProjetos" ? "PostArea" : "PostArea hidden"}>
          <ProjetoList/>
        </div>
          
        <div className={ativo == "checkboxCarreira" ? "PostArea" : "PostArea hidden"}>
          <Carreira/>
        </div>

        <div className={ativo == "checkboxRedes" ? "PostArea" : "PostArea hidden"}>
          <Redes/>
        </div>

      </div>

      <div className="AppSobreMim" id="Sobre-mim">
        <div>
          <p className="AppSobreMimTexto">Me chamo João Pedro, sou apaixonado por tecnologia, gosto de transformar ideias em aplicações funcionais, buscando sempre escrever um código limpo, organizado e de fácil manutenção. Além do desenvolvimento, tenho interesse em arquitetura de software, boas práticas de programação e automação de processos </p>
          <p className="AppSobreMimTexto">
          Sou desenvolvedor Java com sólida experiência em Spring Framework, JPA/Hibernate e bancos de dados MySQL, focado no desenvolvimento de soluções back-end robustas e escaláveis. Também atuo no front-end com HTML, CSS e JavaScript, criando interfaces dinâmicas e integradas que oferecem uma boa experiência ao usuário. Começei na area de programação em 2022, achando que criar um programa era só digitar uma linha de código e pronto! O site estava feito, OBVIO QUE NÂO! Ao entrar neste mundo percebi onde estava me metendo e o que era pra me assustar me fez ficar cada vez mais interessado na area.</p>

          <p className="AppSobreMimTexto">Atualmente, estou envolvido em projetos que conectam back-end e front-end de forma eficiente, com atenção especial à segurança, performance e usabilidade. Participo das comunidades Java, projetos OpenSource e bicos sempre que precisarem.
          </p>
          <div className="AppFooter">
             <p>&copy; 2025 João Pedro Amaral Rosa. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
