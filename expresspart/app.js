const express = require("express");
const path = require("path");
const app = express();

app.use('/public', express.static(path.join(__dirname, 'staic'))); //using middleware

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'static', 'html.html'));
});

// app.get("/example", (req, res) => {
//   res.send("hitting example route");
// });

// app.get("/example/:name/:age", (req, res) => {
//   console.log(req.params);
//   console.log(req.query);
//   //http://localhost:3000/example/laxus/35?tutorial=paramstutorial
//   // res.send("example with route params");
//   res.send(req.params.name + ":" + req.params.age);
// });
// //http://localhost:3000/example/laxus/25

app.listen(3000);

//use route paramaters when you have a must to obtain data
//query on the other hand, you can have it or not, optional
