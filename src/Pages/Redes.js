import React, { useEffect, useState } from "react";
import "../Css/Carreira.css";

const Redes = () => {

  return (
    <div style={{ width: "100%" }}>
      <div className="CarreiraArea">
        <div className="CarreiraContent">
          <h2 className="TitlesJobh2">SOU JAVA BRASILIA</h2>
          <h4 className="TitlesJob">
            Comunidade Java em Brasília para unir e fortalecer o uso da linguagem na região e compartilhar conhecimento.
          </h4>
          <p>
            <strong>Sites:</strong>
          </p>
          <ul>
            <li><strong>Página no meetup: </strong> <a href="https://www.meetup.com/pt-BR/soujava-brasilia/">https://www.meetup.com/pt-BR/soujava-brasilia/</a></li>
            <li><strong>Canal do Youtube: </strong> <a href="https://www.youtube.com/@SouJavaBrasilia">https://www.youtube.com/@SouJavaBrasilia</a></li>
            <li><strong>Discord: </strong> <a href="https://discord.gg/XJdaMRNB">https://discord.gg/XJdaMRNB</a></li>
            <li><strong>Linkedin: </strong> <a href="https://www.linkedin.com/company/soujava-brasilia/">https://www.linkedin.com/company/soujava-brasilia/</a></li>
          </ul>
        </div>
        <div className="CarreiraContent">
          <h2 className="TitlesJobh2">Build CLI</h2>
          <h4 className="TitlesJob">
            BuildCLI is a command-line interface (CLI) tool for managing and automating common tasks in Java project development.
          </h4>
          <p>
            <strong>Sites:</strong>
          </p>
          <ul>
            <li><strong>GitHub: </strong> <a href="https://github.com/BuildCLI/BuildCLI">https://github.com/BuildCLI/BuildCLI</a></li>
            <li><strong>Linkedin: </strong> <a href="https://www.linkedin.com/company/buildcli/">https://www.linkedin.com/company/buildcli/</a></li>
          </ul>
        </div>
        <div className="CarreiraContent">
          <h2 className="TitlesJobh2">Comunidade Brasil JUG Devs Java</h2>
          <h4 className="TitlesJob">
            Trocando experiências e compartilhando conhecimentos entre desenvolvedores Java.
          </h4>
          <p>
            <strong>Sites:</strong>
          </p>
          <ul>
            <li><strong>Linkedin: </strong> <a href="https://www.linkedin.com/in/devsjava/">https://www.linkedin.com/in/devsjava/</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Redes;
