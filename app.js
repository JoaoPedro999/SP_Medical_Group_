const express = require('express');
const mysql = require('mysql');
const session = require('express-session');
const bodyParser = require('body-parser');
const app = express();


// Configurar a conexão com o banco de dados MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'phpmyadmin',
  password: 'aluno',
  database: 'mydb',
});

//configurar EJS como o motor de visualização
app.set('view engine', 'ejs');

db.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    throw err;
  }
  console.log('Conexão com o banco de dados MySQL estabelecida.');
});

// Configurar a sessão
app.use(
  session({
    secret: 'sua_chave_secreta',
    resave: true,
    saveUninitialized: true,
  })
);

app.use(bodyParser.urlencoded({ extended: true }));

// Configurar EJS como o motor de visualização
app.set('view engine', 'ejs');

// Rotas
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/usersucesso', (req, res) => {
  res.render('usersucesso');
});

app.get('/consultasucesso', (req, res) => {
  res.render('consultasucesso');
});

app.get('/login', (req, res) => {
  res.render('login');

});
app.get('/consultas', (req, res) => {
  res.render('./consultas');

});
app.get('/painel', (req, res) => {
  res.render('painel', {req: req});
});
app.get('/painel2', (req, res) => {
  res.render('painel2', {req: req});
});

app.get('/tables', (req, res) => {
  db.query('SELECT * FROM consultas', (err, result) => {
    if (err) throw err;
    res.render('tables', { consultas: result });
  });
});

app.get('/tables2', (req, res) => {
  db.query('SELECT * FROM pacientes', (err, result) => {
    if (err) throw err;
    res.render('tables2', { pacientes: result });
  });
});

// Rota para processar o formulário de login
app.post('/login', (req, res) => {
  const { name, password, cpf, type } = req.body;

  const query = "SELECT * FROM pacientes WHERE name = ? AND password = ? AND cpf = ?";

  db.query(query, [name, password, cpf, type], (err, results) => {
    if (err) throw err;

    if (results.length > 0) {
      const userType = results[0].type;

      // Verificando se o tipo do usuário é válido
      if (userType) {
        req.session.loggedin = true;
        req.session.name = name;

        switch (type) {
          case 'Administrador':
            res.redirect('/painel');
            break;

          case 'Leitor':
            res.redirect('/painel2');
            break;

          default:
            res.send('Tipo de usuário desconhecido. <a href="/login">Tente novamente</a>');
        }
      } else {
        res.send('Tipo de usuário não encontrado. <a href="/login">Tente novamente</a>');
      }
    } else {
      res.send('Credenciais incorretas. <a href="/login">Tente novamente</a>');
    }
    console.log(req.session);
  });
});


// Rota para fazer logout
app.get('/logout', (req, res) => {

  req.session.destroy(() => {
    res.redirect('/');
  });
});

app.use(express.static(__dirname + '/assets'));
app.use(express.static(__dirname + '/img'));
app.use(express.static(__dirname + '/vendor'));
app.use(express.static(__dirname + '/scss'));
app.use(express.static(__dirname + '/js'));
app.use(express.static(__dirname + '/css'));
app.use(express.static(__dirname + '/demo'));
app.use(express.static(__dirname + '/forms'));
app.use(express.static(__dirname + '/images'));


// Configurar o Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('views'));
app.get('/', (req, res) => {
  res.render('cadastro');
});

//rota para a pagina de cadastro
app.get('/cadastro', (req, res) => {
  res.render('cadastro');
});

app.set('view engine', 'ejs');
app.get('/login', (req, res) => {
  res.render('login'); 
  app.use(express.static(_dirname + '/'));
});

// Rota de cadastro
app.post('/cadastro', (req, res) => {
  const { name, password, cpf, type } = req.body;
  const query = 'INSERT INTO pacientes (name, password, cpf, type) VALUES (?, ?, ?, "Leitor" )';
  db.query(query, [name, password, cpf, type], (err, result) => {
    if (err) {
      console.error('Erro ao cadastrar o usuário:', err);
      res.status(500).send('Erro ao cadastrar o usuário.  <a href="/cadastro">Tente novamente</a>');
    } else {
      console.log('Usuário cadastrado com sucesso!');
      res.status(200).redirect('/usersucesso');
    }
  });
});

app.set('view engine', 'ejs');
app.get('/consultas', (req, res) => {
  res.render('consultas'); 
  app.use(express.static(_dirname + '/'));
});

// Rota de consultas
app.post('/add', (req, res) => {
  const { nome, data, hora, doutor } = req.body;
  const query = 'INSERT INTO consultas (nome, data, hora, doutor) VALUES (?, ?, ?, ? )';
  db.query(query, [nome, data, hora, doutor], (err, result) => {
    if (err) {
      console.error('Erro ao cadastrar a consulta:', err);
      res.status(500).send('Erro ao cadastrar a consulta. <a href="/consultas">Tente novamente</a>');
    } else {
      console.log('Consulta cadastrado com sucesso!');
      res.status(200).redirect('/consultasucesso');
    }
  });
});

app.listen(3001, () => {
  console.log('Servidor rodando na porta 3001');
});

