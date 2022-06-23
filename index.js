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


app.get("/download", (req, res) => {
    console.log(req.requestTime);
    res.download(path.resolve(__dirname, "static", "index.html"))
})

app.listen(PORT, () => {
    console.log(`Server has been started on port ${PORT} `);
})