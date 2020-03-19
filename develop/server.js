const express = require("express")
const app = express();
const PORT = process.env.PORT || 4040;

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const apiRoutes = require("./routes/apiroutes");
const htmlRoutes = require("./routes/htmlroutes");

app.use(apiRoutes);
app.use(htmlRoutes);



app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });
