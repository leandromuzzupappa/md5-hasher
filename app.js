const express = require("express");

const app = express();
const PORT = 3001;

app.listen(PORT, () => console.log(`Server levantado en el puerto ${PORT}`));

app.get("/", (req, res) => {
  return res.send("lenny was here!");
});

app.use(express.static("public"));
