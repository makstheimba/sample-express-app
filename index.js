const express = require('express');
const routes = require('./routes');
const { logger, error: errorMiddleware } = require('./middlewares');
const { PORT = 8000 } = process.env;
const app = express();

app.use(logger);
app.use(express.static(__dirname + '/public'));
app.use('/users', routes.usersRouter);
app.use(errorMiddleware);

app.listen(PORT, () => {
    console.log('Server is listening on port', PORT)
});