var express = require("express")

var app = express();

var PORT = process.env.PORT || 4040;

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var apiroutes = require("./routes/apiroutes");
var htmlroutes = require("./routes/htmlroutes");

app.use(apiroutes);
app.use(htmlroutes);

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });