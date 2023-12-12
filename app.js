const express = require('express');
const mysql = require('mysql');
const session = require('express-session');
const bodyParser = require('body-parser');
const app = express();

// Defina USER_TYPES antes de ser referenciado
const USER_TYPES = {
  ADMIN: 'Administrador',
  DOCTOR: 'Doutor',
  READER: 'Leitor',
};

// Configurar a conexão com o banco de dados MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
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

// ROTAS
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/usersucesso', (req, res) => {
  res.render('usersucesso');
});

app.get('/acessorestrito', (req, res) => {
  res.render('acessorestrito');
});

app.get('/consultasucesso', (req, res) => {
  res.render('consultasucesso');
});

app.get('/login', (req, res) => {
  res.render('login');
});

app.get('/consultas', (req, res) => {
  res.render('consultas');
});

app.get('/cadastro', (req, res) => {
  res.render('cadastro');
});

// Middleware para verificar a sessão e o tipo de usuário
const checkUserTypeMiddleware = (allowedUserTypes) => {
  return (req, res, next) => {
    if (req.session.loggedin) {
      const userType = req.session.type;

      if (allowedUserTypes.includes(userType)) {
        // Usuário tem um tipo válido, permitir o acesso à rota
        return next();
      }
    }

    // Usuário não tem uma sessão válida ou o tipo de usuário é inválido
    res.redirect('acessorestrito');
  };
};

// Rotas protegidas pelo tipo de usuário
app.get('/painel', checkUserTypeMiddleware([USER_TYPES.ADMIN]), (req, res) => {
  res.render('painel', { req: req });
});

app.get('/painel2', checkUserTypeMiddleware([USER_TYPES.READER]), (req, res) => {
  res.render('painel2', { req: req });
});

app.get('/painel3', checkUserTypeMiddleware([USER_TYPES.DOCTOR]), (req, res) => {
  res.render('painel3', { req: req });
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

app.get('/tables3', (req, res) => {
  const userId = req.session.name || null;

  db.query('SELECT * FROM consultas WHERE nome = ?', [userId], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Erro interno do servidor');
      return;
    }

    // Renderizar a página e passar 'name' para o EJS
    res.render('tables3', { consultas: result, name: req.session.name, req: req });
  });
});

app.get('/tables4', (req, res) => {
  const userId = req.session.name || null;

  db.query('SELECT * FROM consultas WHERE doutor = ?', [userId], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Erro interno do servidor');
      return;
    }

    // Renderizar a página e passar 'name' para o EJS
    res.render('tables4', { consultas: result, name: req.session.name, req: req });
  });
});


app.post('/login', (req, res) => {
  const { name, password, cpf, type } = req.body;
  const query = 'SELECT * FROM pacientes WHERE name = ? AND password = ? AND cpf = ?';

  db.query(query, [name, password, cpf, type], (err, results) => {
    if (err) {
      console.error('Erro na consulta SQL:', err);
      return res.status(500).send('Erro interno. <a href="/login">Tente novamente</a>');
    }

    if (results.length > 0) {
      const userType = results[0].type;

      if (userType) {
        req.session.loggedin = true;
        req.session.name = name;
        req.session.type = userType;

        switch (userType) {
          case USER_TYPES.ADMIN:
            return res.redirect('/painel');
          case USER_TYPES.READER:
            return res.redirect('/painel2');
          case USER_TYPES.DOCTOR:
              return res.redirect('/painel3');
          default:
            return res.status(400).send('Tipo de usuário desconhecido. <a href="/login">Tente novamente</a>');
        }
      } else {
        return res.status(400).send('Tipo de usuário não encontrado. <a href="/login">Tente novamente</a>');
      }
    } else {
      return res.status(400).send('Credenciais incorretas. <a href="/login">Tente novamente</a>');
    }
  });
});

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
app.use(express.static(__dirname + '/views'));

app.post('/cadastro', (req, res) => {
  const { name, password, cpf, type } = req.body;
  const query = 'INSERT INTO pacientes (name, password, cpf, type) VALUES (?, ?, ?, "Leitor" )';

  db.query(query, [name, password, cpf, type], (err, result) => {
    if (err) {
      console.error('Erro ao cadastrar o usuário:', err);
      res.status(500).send('Erro ao cadastrar o usuário. <a href="/cadastro">Tente novamente</a>');
    } else {
      console.log('Usuário cadastrado com sucesso!');
      res.redirect('/usersucesso');
    }
  });
});

app.get('/consultas', (req, res) => {
  res.render('consultas');
});

app.post('/add', (req, res) => {
  const { nome, data, hora, doutor } = req.body;
  const query = 'INSERT INTO consultas (nome, data, hora, doutor) VALUES (?, ?, ?, ? )';

  db.query(query, [nome, data, hora, doutor], (err, result) => {
    if (err) {
      console.error('Erro ao cadastrar a consulta:', err);
      res.status(500).send('Erro ao cadastrar a consulta. <a href="/consultas">Tente novamente</a>');
    } else {
      console.log('Consulta cadastrada com sucesso!');
      res.redirect('/consultasucesso');
    }
  });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
