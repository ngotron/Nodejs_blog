const express = require("express")
const app = express();
const port = 3000

app.get("/", (req, res) => {
  var a = 1;
  var b = 2;
  var c = a + b;

  res.send("Hello world")

})

// 127.0.0.1 - localhost 
app.listen(port, () => {
  console.log(`Exaple app listening on port ${port}`)
})