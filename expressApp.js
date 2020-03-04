const createError = require('http-errors');
const express = require('express');
const path = require('path');
const router = require('./routes/index.js');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

const app = express();

app.use('/api', router);

// app.use(logger('dev'));
app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use('/bee/portal', express.static(path.join(__dirname, 'static')));
app.listen(5000, () => {
  console.log('listening on port: 5000');
});

app.get(/^\/bee\/portal.*/, (req, res) => {
  res.sendFile(`${__dirname}/static/index.html`);
});

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
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
