var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const methodOverride = require('method-override');
var session = require("express-session")





var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var logMiddleware = require('./Middleware/logNetflix')


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(session({
secret:'ProjetoExpress',
resave:true,
saveUninitialized:true
}))
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser);
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));
app.use(logMiddleware);

app.use('/', indexRouter);
app.use('/usuarios', usersRouter);
app.use('/Home', usersRouter);
app.use('/login', usersRouter);
app.use('/destaque', usersRouter);
app.use('/pagamento1', usersRouter);
app.use('/pagamento2', usersRouter);
app.use('/pagamento3', usersRouter);
app.use('/Filmes', usersRouter);
app.use('/Series', usersRouter);
app.use('/perfil', usersRouter);
app.use('/search', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
