const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");
const Joi = require("joi");

app.use("public", express.static(path.join(__dirname, "/")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/", "post.html"));
});



app.post("/", (req, res) => {
  let object = {};
req.body.forEach(element => {
  object[element.name] = element.value;
});
  console.log(req.body);
  const schema = Joi.object().keys({
    email: Joi.string().trim().email().required(),
    password: Joi.string().min(5).max(10).required()
  });
  Joi.validate(req.body, schema, (err, result) => {
    if (err) {
      console.log(err);
      res.send("an error has occured");
    }
    console.log(result);
    res.send("successfully posted data");  
})
  //database work here
  //   res.send("successfully posted data");
  res.json({ sucess: true });
});

app.listen(3000);
