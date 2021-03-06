// =============================================================//
//                 REQUIREMENTS & DEPENDENCIES
// =============================================================//

var express = require('express');
// var bodyParser = require('body-parser');
// var methodOverride = require('method-override')
var app = express();
var PORT = process.env.PORT || 8082;

var db = process.env.JAWSDB_URL || 'localhost'

app.use(express.static(process.cwd() + '/public'));
// app.use(bodyParser.urlencoded({
// 	extended: false
// }))

// app.use(methodOverride('_method'))
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

var routes = require('./controllers/burgers_controllers.js');
// app.use('/', routes);
app.use(routes);

// app.listen(PORT);

app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });
  