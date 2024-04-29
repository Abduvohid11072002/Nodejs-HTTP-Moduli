import fs from "fs";
import http from "http";
import path from "path";

const port = process.env.PORT  || 3000
const hostName = process.env.HOSTNAME  || "localhost"

const server = http.createServer((req, res) => {
    if (req.method === "GET" && req.url === "/"){
        let pathFile = path.join(path.resolve(), "public", "home.html")
        fs.readFile(pathFile, "utf-8", (err, data)=>{
            if (err){
                console.error(err)
            }else{
                res.writeHead(200,{"Content-type": "text/html"})
                res.write(data)
                res.end()
            }
        })
    }else if (req.method === "GET" && req.url === "/about"){
        let pathFile = path.join(path.resolve(), "public", "about.html")
        fs.readFile(pathFile, "utf-8", (err, data)=>{
            if (err){
                console.error(err)
            }else{
                res.writeHead(200,{"Content-type": "text/html"})
                res.write(data)
                res.end()
            }
        })
    
    }else if (req.url !== "/" && req.url !== "/about"){
        let pathFile = path.join(path.resolve(), "public", "404.html")
        let data = fs.readFileSync(pathFile, "utf-8")
        res.writeHead(200, {"Content-type": "text/html"})
        res.end(data)
    }
});

console.log(port, hostName)
server.listen(port,hostName,() =>{ console.log("Server ishga tushdi")});