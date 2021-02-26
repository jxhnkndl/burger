// Import Express and Handlebars modules
const express = require('express');
const exphbs = require('express-handlebars');

// Import routes from controller
const routes = require('./controllers/burgers_controller');

// Config PORT
const PORT = process.env.PORT || 8080;

// Init Express
const app = express();

// Serve public front-end assets to client statically
app.use(express.static('public'));

// Parse req/res body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Config Handlebars as application template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Use routes imported from controller
app.use(routes);

// Start listening
app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});