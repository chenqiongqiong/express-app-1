var createError = require('http-errors');
var express = require('express');
var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');
var mysql = require('mysql');

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

var app = express();

var connection = mysql.createConnection({
  host     : '118.25.94.60',
  user     : 'qiong',
  password : 'qiong666'
});

app.get('/api/sql', function(req, res) {
  // res.json({
  //   msg: 'success',
  // })
  res.header("Access-Control-Allow-Origin", "*");
  const sql = 'insert into test.test_table_1 (name) values ("'+ new Date().toString() + '")';
  connection.query(sql, function(err, rows, fields) {
    if (err) throw err;
    res.json({
      msg: 'success'
    })
    console.log('success!  --rows.affectedRows: ', rows.affectedRows);
  });
})

app.get('/bee/portal/', function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
})


// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use('/bee/portal', express.static(path.join(__dirname, 'public')));
app.listen(3000, ()=>{
  console.log('listening on port: 3000');
});


// app.use('/', indexRouter);
// app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

// module.exports = app;
