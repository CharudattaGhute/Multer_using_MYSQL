const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const multer = require("multer");
const db = require("./db");

const app = express();

app.use(express.json());

const storage = multer.diskStorage({
  destination: "./uploads",
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const upload = multer({ storage });

app.post("/upload", upload.single("file"), (req, res) => {
  console.log(req.file);
  const { filename, path, originalname, mimetype, size } = req.file;
  const sql = `insert into file(filename, path, originalname, mimetype, size) values (?, ?, ?, ?, ?)`;

  db.query(
    sql,
    [filename, path, originalname, mimetype, size],
    (err, results) => {
      if (err) throw err;
      res.send(`file uploaded:${filename}`);
    }
  );
});

app.get("/download/:filename", (req, res) => {
  const sql = "Select * from file where filename = ? ";

  db.query(sql, [req.params.filename], (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    if (result.length === 0) {
      return res.status(404).send("file not found");
    }
    const file = result[0];
    res.download(file.path, file.originalname);
  });
});

app.use(
  session({ secret: "your_secret_key", resave: true, saveUninitialized: true })
);
app.use(bodyParser.json());

app.listen(4001, () => {
  console.log("http://localhost:4001");
});
