<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>SP Medical Group</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f4f4f9;
      color: #333;
      line-height: 1.6;
      margin: 0;
      padding: 0;
    }

    h1, h2, h3 {
      color: #2c3e50;
    }

    h1 {
      background-color: #16a085;
      color: white;
      padding: 15px;
      text-align: center;
      margin: 0;
    }

    section {
      margin: 20px;
      padding: 20px;
      background-color: white;
      border-radius: 8px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }

    section ul {
      list-style-type: none;
      padding: 0;
    }

    section ul li {
      margin: 10px 0;
    }

    .code-block {
      background-color: #f9f9f9;
      padding: 10px;
      border-radius: 5px;
      border: 1px solid #ddd;
      font-family: 'Courier New', Courier, monospace;
      overflow-x: auto;
    }

    .badge {
      background-color: #16a085;
      color: white;
      padding: 5px 10px;
      border-radius: 20px;
      text-decoration: none;
    }

    .badge:hover {
      background-color: #1abc9c;
    }

    footer {
      background-color: #16a085;
      color: white;
      text-align: center;
      padding: 10px;
      position: fixed;
      bottom: 0;
      width: 100%;
    }
  </style>
</head>
<body>

  <h1>SP Medical Group</h1>

  <section>
    <h2>Descrição do Projeto</h2>
    <p>O <strong>SP Medical Group</strong> é um sistema desenvolvido no contexto do curso Técnico em Desenvolvimento de Sistemas, oferecido pela instituição Senai Dr. Celso Charuri. Este projeto foi realizado em grupo e tem como objetivo fornecer uma plataforma digital para a gestão de informações médicas, com foco em agendamento de consultas, gerenciamento de pacientes, médicos e especialidades.</p>
    <p>O sistema foi desenvolvido para automatizar e otimizar processos administrativos e clínicos de uma clínica médica, proporcionando uma interface simples e eficiente tanto para os profissionais de saúde quanto para os pacientes.</p>
  </section>

  <section>
    <h2>Funcionalidades</h2>
    <ul>
      <li><strong>Cadastro de Pacientes:</strong> Registro de informações pessoais e médicas dos pacientes.</li>
      <li><strong>Cadastro de Médicos:</strong> Informações sobre médicos, suas especialidades e horários de atendimento.</li>
      <li><strong>Agendamento de Consultas:</strong> Sistema de agendamento que permite aos pacientes marcar consultas com médicos de diferentes especialidades.</li>
      <li><strong>Gestão de Consultas:</strong> Acompanhamento e gerenciamento das consultas agendadas.</li>
      <li><strong>Relatórios:</strong> Geração de relatórios de consultas, pacientes atendidos e histórico médico.</li>
    </ul>
  </section>

  <section>
    <h2>Tecnologias Utilizadas</h2>
    <ul>
      <li><strong>Linguagens de Programação:</strong> Python, JavaScript</li>
      <li><strong>Banco de Dados:</strong> MySQL</li>
      <li><strong>Frameworks:</strong> Flask, Bootstrap</li>
      <li><strong>Ferramentas de Desenvolvimento:</strong> Git, GitHub, Visual Studio Code</li>
    </ul>
  </section>

  <section>
    <h2>Como Executar o Projeto</h2>
    <h3>Pré-requisitos</h3>
    <ul>
      <li>Python 3.x</li>
      <li>MySQL</li>
      <li>Pip (gerenciador de pacotes do Python)</li>
    </ul>
    <h3>Instalação</h3>
    <p>Para rodar o projeto localmente, siga as instruções abaixo:</p>
    <div class="code-block">
      <pre><code>git clone https://github.com/seu-usuario/SP-Medical-Group.git
cd SP-Medical-Group
pip install -r requirements.txt
# Configurar o banco de dados com os scripts fornecidos
python app.py
# Acesse no navegador: http://localhost:5000</code></pre>
    </div>
  </section>



</body>
</html>
