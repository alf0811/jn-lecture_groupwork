var express = require("express"),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require("mongoose"),
  Paper = require("./api/models/paperModel"), // 作成したModelの読み込み
  bodyParser = require("body-parser");

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/paperdb");

// CORSを許可する
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require("./api/routes/paperRoutes"); // Routeのインポート
routes(app); //appにRouteを設定する。

app.listen(port); // appを特定のportでlistenさせる。

console.log("paper list RESTful API server started on: " + port);