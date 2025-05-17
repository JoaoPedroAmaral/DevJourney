import React, { useEffect, useState } from "react";
import "../Css/Carreira.css";

const Carreira = () => {


  return (
    <div style={{ width: "100%" }}>
      <div className="CarreiraArea">
        <div className="CarreiraContent">
          <h2 className="TitlesJobh2">CBTU - Companhia Brasileira de Trens Urbano</h2>
          <h4 className="TitlesJob">
            Jovem Aprendiz
          </h4>
          <p>
            <strong>Período:</strong> 01/2022 - 06/2023
          </p>
          <p>
            <strong>Obrigações:</strong>
          </p>
          <ul>
            <li>Auxiliar na execução de atividades administrativas.</li>
            <li>Atendimento ao público.</li>
          </ul>

          <h4 className="TitlesJob">
            Estagiário FullStack
          </h4>
          <p>
            <strong>Período:</strong> 06/2023 - 
          </p>
          <p><strong>Tecnologias utilizadas:</strong> Java, Spring Boot, Node.js, PostgreSQL, MongoDB, AWS, GitHub.</p>
          <p>
            <strong>Obrigações:</strong>
          </p>
          <ul>
            <li>Gerenciamento e otimização de bancos de dados MySQL e PostgreSQL, incluindo ajuste de consultas, criação de procedimentos armazenados e modelagem relacional.</li>
            <li>Desenvolvimento de APIs RESTful com Spring Boot e Node.js (Express), seguindo padrões de arquitetura limpa e as melhores práticas de segurança.</li>
            <li>Criação de testes unitários e de integração utilizando JUnit, XUnit e Jest, garantindo cobertura de código e prevenção de regressão.</li>
            <li>Aplicação dos princípios Clean Code e SOLID para aprimorar a legibilidade e a manutenibilidade do código.</li>
            <li>Implementação de autenticação e autorização com JWT, garantindo a segurança das APIs.</li>
            <li>Correção de bugs e implementação de novos recursos com base nos requisitos do usuário.</li>
          </ul>
        </div>
        <div className="CarreiraContent">
          <h2 className="TitlesJobh2">AIESEC</h2>
          <h4 className="TitlesJob">
            Membro OGV
          </h4>
          <p>
            <strong>Período:</strong> 01/2025 - 
          </p>
          <p>
            <strong>Obrigações:</strong>
          </p>
          <ul>
            <li>Preparação Pré-Intercâmbio – Auxiliar os voluntários com treinamento, insights culturais, documentação e logística.</li>
            <li>Suporte Durante o Intercâmbio – Estar disponível para sanar quaisquer dúvidas ou problemas durante o intercâmbio.</li>
            <li>Acompanhamento Pós-Intercâmbio – Coletar feedback e manter o relacionamento com os voluntários, incentivando um impacto a longo prazo.</li>
          </ul>
        </div>
        <div className="CarreiraContent">
          <h2 className="TitlesJobh2">Build CLI -Open Source</h2>
          <h4 className="TitlesJob">
            Desenvolvedor Java
          </h4>
          <p>
            <strong>Período:</strong> 01/2025 - 
          </p>
          <p>
            <strong>Obrigações:</strong>
          </p>
          <ul>
            <li>Documentação automatizada de código Java com tecnologia de IA.</li>
            <li>Revisão e integração de contribuições da comunidade global.</li>
            <li>Comunicação assíncrona em inglês com desenvolvedores de diferentes países.</li>
            <li>Implementação de melhorias de CI/CD (GitHub Actions, GitLab, Jenkins).</li>
            <li>Automação usando Java, Maven, Docker e Shell Script.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Carreira;
