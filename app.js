require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/biodata", (req, res) => {
  const nama = req.body.nama;
  const tanggalLahir = req.body.tanggalLahir;
  const tempatLahir = req.body.tempatLahir;
  const alamat = req.body.alamat;

  res.send({
    nama: nama,
    tanggalLahir: tanggalLahir,
    tempatLahir: tempatLahir,
    alamat: alamat,
  });
});

app.post("/api/biodata", (req, res) => {
  const { nama, tanggalLahir, tempatLahir, alamat } = req.query;
  console.log(req.query);

  res.send({
    nama: nama,
    tanggalLahir: tanggalLahir,
    tempatLahir: tempatLahir,
    alamat: alamat,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  console.log(`its sample running on the http://localhost:${port}`);
  console.log(`DB Host on ${process.env.DB_HOST}`);
  console.log(`DB Name on ${process.env.DB_NAME}`);
});
