const express = require('express');
const app = express();
const port = process.env.PORT || 3000
// Middleware pour parser les données du formulaire
app.use(express.urlencoded({ extended: true }));

// Configurer EJS comme moteur de template
app.set('view engine', 'ejs');

// Routes
const indexRouter = require('./routes/index');
app.use('/', indexRouter);

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
