const express = require("express");

const app = express();
const PORT = 3001;

app.listen(PORT, () => console.log(`Server levantado en el puerto ${PORT}`));
app.set("view engine", "ejs");
app.use(express.static("public"));

const mainRoutes = require("./routes/main-routes");

app.use("/", mainRoutes);

app.use(express.static("public"));
