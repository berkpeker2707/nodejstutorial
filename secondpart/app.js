const http = require("http");
//request object is what client wants from us, google'in something and returning something is response etc
const server = http.createServer((req, res)=>{
// res.write("Hello world from node.js")
// res.end();
if(req.url == "/"){
    res.write("Hello world from nodejs");
    res.end();
} else{
    res.write("using some other domain");
    res.end();
}
});

server.listen("3000");