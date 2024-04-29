import fs from "fs";
import http from "http";
import path from "path";

const server = http.createServer((req, res) =>{
    const result = (url) =>{
        fs.readFile(url, "utf-8", (err, data) =>{
            if (err){
                console.error(err)
            }else{
                res.writeHead(200, {"Content-type": "text/html"})
                res.write(data)
                res.end()
            }
        })
    }
    if (req.method === "GET"){
        switch (req.url){
            case "/": result(path.join(path.resolve(), "public", "home.html")); break;
            case "/product": result(path.join(path.resolve(), "public", "product.html")); break;
            case "/price": result(path.join(path.resolve(), "public", "price.html")); break;
            case "/contact": result(path.join(path.resolve(), "public", "contact.html")); break;
            case "/login": result(path.join(path.resolve(), "public", "login.html")); break;
            case "/joinus": result(path.join(path.resolve(), "public", "joinus.html")); break;
            default: result(path.join(path.resolve(), "public", "404.html")); break;
        }
    }   
});

server.listen(3000, ()=> { console.log("Server ishga tushdi ... ")})

