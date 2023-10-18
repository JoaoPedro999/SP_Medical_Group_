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

// Rota para a página de login
app.get('/', (req, res) => {
res.render('login');
});

// Rota para processar o formulário de login
app.post('/login', (req, res) => {
const { username, password } = req.body;

const query = 'SELECT * FROM pacientes WHERE username = ? AND password = ? AND cpf = ?';

db.query(query, [username, password], (err, results) => {
if (err) throw err;

if (results.length > 0) {
req.session.loggedin = true;
req.session.username = username;
res.redirect('/dashboard');
} else {
res.send('Credenciais incorretas. <a href="/">Tente novamente</a>');
}
});
});

// Rota para a página do painel
app.get('/dashboard', (req, res) => {

if (req.session.loggedin) {
res.send(`Bem-vindo, ${req.session.username}!<br><a href="/">Sair</a>`);
} else {
res.send('Faça login para acessar esta página. <a href="/">Login</a>');
}
});

// Rota para fazer logout
app.get('/logout', (req, res) => {
req.session.destroy(() => {
res.redirect('/');
});
});

app.use(express.static(__dirname + '/'));
app.use(express.static(__dirname + '/img'));

db.connect(err => {
  if (err) {
    console.error('Erro na conexão com o banco de dados:', err);
    return;
  }
  console.log('Conexão com o banco de dados estabelecida.');
});
//configurar EJS como o motor de visualização
app.set('view engine', 'ejs');

// Configurar o Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('views'));
app.get('/',(req, res) => {
  res.render('cadastro');
  });

//rota para a pagina de cadastro
app.get('/cadastro',(req, res) => {
res.render('cadastro');
});

app.set('view engine','ejs');
app.get('/login', (req, res) => {
res.render('login'); //renders vies/cadastro.ejs
app.use(express.static(_dirname + '/'));
});
// Rota de cadastro
app.post('/cadastro', (req, res) => {
  const { username,password } = req.body;
  const query = 'INSERT INTO pacientes (username, password, cpf) VALUES (?, ? )';
  db.query(query, [username, password] , (err, result) => {
    if (err) {
      console.error('Erro ao cadastrar o usuário:', err);
      res.status(500).send('Erro ao cadastrar o usuário.');
    } else {
      console.log('Usuário cadastrado com sucesso!');
      res.status(200).send('Usuário cadastrado com sucesso.');
    }
  });
});
app.listen(3001, () => {
console.log('Servidor rodando na porta 3001');
});

