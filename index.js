import express from "express";
import path from "path";
import fs from "fs";
import { requestTime, logger } from "./middleware.js";
import serverRoutes from "./routes/server.js"

const __dirname = path.resolve();
const app = express();
const PORT = process.env.PORT || 3000;
// const filePath = path.join(__dirname, "static", "index.html")


// 2-й способо роутинга по страницам
app.use(express.static(path.resolve(__dirname, "static")))
app.use(serverRoutes)



//  EJS
app.set("view engine", "ejs")
app.set("views", path.resolve(__dirname, "ejs")) // задаем название папки в которой будут лежать файлы ejs к которым будет обращатся express

// console.log(app.get("view engine"))
console.log(app.get("views"))

app.get("/", (req, res) => {
    res.render("index", {title: "Main Page", active: "main"})
})

app.get("/features", (req, res) => {
    res.render("features", {title: "Features Page", active: "features"})
})

app.listen(PORT, () => {
    console.log(`Server has been started on port ${PORT} `);
})