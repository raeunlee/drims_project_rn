const express = require("express");
const app = express();
const port = 3001; // <- 3000에서 다른 숫자로 변경
const cors = require('cors');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "pw입력", 
  database: "db입력"
});

app.use(bodyParser.urlencoded({ extended: false}));
app.use(cors())
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// get은 body를 통해 변수를 전달 x 따라서 get을 사용하지 않고 post를 사용한다.
app.get('/api/get', (req, res) => {
//  const id = req.body.name;
//  console.log(1);
//  console.log(req.body);
  const sqlInsert = "SELECT * FROM country WHERE id = 'roybae' and date = '2021-11-14';"
  db.query(sqlInsert, (err, result) => {
    res.send(result);
  })
})

app.post('/api/get', (req, res) => {
    const id = req.body.id;
    const date = req.body.date;
    console.log(id, date);
    const sqlInsert = `SELECT * FROM country WHERE id = '${id}' and date = '${date}';`
    db.query(sqlInsert, (err, result) => {
      res.send(result);
    })
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});