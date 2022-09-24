const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.get("/", function(req,res)
{
  res.sendFile(__dirname + "/index.html");

});

app.post("/", function(req,res)
{
  var num1 = Number(req.body.num1); //converting our text into number
  var num2 = Number(req.body.num2);

  var result = num1 + num2;
  res.send("<h1>Result of the calculation is </h1>"+ result);
// console.log(req.body);
// res.body.stringify()
// {
//   const num1 =
// }
});

app.listen("8080", function(){
  console.log("Server up at 8080");
});
