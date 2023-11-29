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

app.get('/')

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
  res.render('index');
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
  res.render('painel', {req: req});
});

// READ
app.get('/tables', (req, res) => {
  db.query('SELECT * FROM consultas', (err, result) => {
    if (err) throw err;
    res.render('tables', { consultas: result },  {req: req});
  });
});

app.get('/tables2', (req, res) => {
  db.query('SELECT * FROM pacientes', (err, result) => {
    if (err) throw err;
    res.render('tables2', { pacientes: result },  {req: req});
  });
});

app.get('/tables3', (req, res) => {
  db.query('SELECT * FROM consultas WHERE ', (err, result) => {
    if (err) throw err;
    res.render('tables', { consultas: result },  {req: req});
  });
});

// Rota para processar o formulário de login
// Rota para processar o formulário de login
app.post('/login', (req, res) => {
  const { name, password, type } = req.body;

  const query = "SELECT * FROM pacientes WHERE name = ? AND password = ?";

  db.query(query, [name, password, type], (err, results) => {
    if (err) throw err;

    if (results.length > 0) {
      const userType = results[0].type;

      // Check if user type is valid (you might want to adjust this condition based on your needs)
      if (userType) {
        req.session.loggedin = true;
        req.session.name = name;

        switch (userType) {
          case 'Administrador':
            res.redirect('/painel');
            break;

          case 'Leitor':
            res.redirect('/painel2'); // Assuming you want to redirect for readers
            break;

          default:
            res.send('Credenciais incorretas. <a href="/">Tente novamente</a>');
        }
      } else {
        res.send('Credenciais incorretas. <a href="/">Tente novamente</a>');
      }
    } else {
      res.send('Credenciais incorretas. <a href="/">Tente novamente</a>');
    }
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
      res.status(500).send('Erro ao cadastrar o usuário.');
    } else {
      console.log('Usuário cadastrado com sucesso!');
      res.status(200).send('Usuário cadastrado com sucesso.');
    }
  });
});
// Configurar o Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('views'));
app.get('/', (req, res) => {
  res.render('consultas');
});

//rota para a pagina de cadastro
app.get('/consultas', (req, res) => {
  res.render('consultas');
});

app.set('view engine', 'ejs');
app.get('/consultas', (req, res) => {
  res.render('consultas'); //renders vies/cadastro.ejs
  app.use(express.static(_dirname + '/'));
});

<<<<<<< HEAD
// Rota de consultas
app.post('/add', (req, res) => {
  const { nome, data, hora, doutor } = req.body;
  const query = 'INSERT INTO consultas (nome, data, hora, doutor) VALUES (?, ?, ?, ? )';
  db.query(query, [nome, data, hora, doutor], (err, result) => {
=======
//ROTA DE POST

 // CREATE
app.post('/add', (req, res) => {
  const { nome,data, hora, doutor } = req.body;
  const query = 'INSERT INTO consultas (nome, data, hora, doutor) VALUES (?, ?, ?, ? )';
  db.query(query, [nome, data, hora, doutor] , (err, result) => {
    if (err) throw err;
  });
}); 

// Rota de consultas
/* app.post('/add', (req, res) => {
  const { nome,data, hora, doutor } = req.body;
  const query = 'INSERT INTO consultas (nome, data, hora, doutor) VALUES (?, ?, ?, ? )';
  db.query(query, [nome, data, hora, doutor] , (err, result) => {
>>>>>>> 810ea6ae65d1193853c3fc9821541822fc2b86d4
    if (err) {
      console.error('Erro ao cadastrar a consulta:', err);
      res.status(500).send('Erro ao cadastrar a consulta.');
    } else {
      console.log('Consulta cadastrado com sucesso!');
      res.status(200).send('Consulta cadastrado com sucesso!');
    }
  });
<<<<<<< HEAD
});

=======
}); */
});
>>>>>>> 810ea6ae65d1193853c3fc9821541822fc2b86d4
app.listen(3001, () => {
  console.log('Servidor rodando na porta 3001');
});

