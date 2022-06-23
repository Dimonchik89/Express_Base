import express from "express";
import path from "path";
import fs from "fs";
import { requestTime, logger } from "./middleware.js";

const __dirname = path.resolve();
const app = express();
const PORT = process.env.PORT || 3000;
// const filePath = path.join(__dirname, "static", "index.html")


// 2-й способо роутинга по страницам
app.use(express.static(path.resolve(__dirname, "static")))
app.use(requestTime)
app.use(logger)

// 1-й способ роутинга по страницам
// app.get("/", (req, res) => {
//     // res.send('<h1>Hello</h1>')
//     res.sendFile(path.resolve(__dirname, "static", "index.html"))
// })

// app.get("/features", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "static", "features.html"))
// })

// Скачать файл
// app.get("/download", (req, res) => {
//     console.log(req.requestTime);
//     res.download(path.resolve(__dirname, "static", "index.html"))
// })



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