const express = require("express");
const app = express();
const port = 3333;
const fs = require("fs");
const XLSX = require("xlsx");
const cors = require("cors");
app.use(cors());
app.use(express.json());
app.get("/:type", (req, res) => {
  const { type } = req.params;
  const file = `./data/${type}.xlsx`;
  const file1 = fs.readFileSync(file);
  const bufferArray = file1.buffer;
  const wb = XLSX.read(bufferArray, {
    type: "buffer",
  });
  const wsname = wb.SheetNames[0];
  const ws = wb.Sheets[wsname];
  const parsedData = XLSX.utils.sheet_to_json(ws);
  res.send(parsedData);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
