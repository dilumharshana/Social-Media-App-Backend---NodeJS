const http = require('http');

const server = http.createServer( (req,res) => {
   switch(req.url){
       case "/stocks":
           res.end("<h1>HELOOOOO</h1>");
           break;
        case "/aboutus":
            res.end("0766324349");
        case "/":
            res.end("welcome to free pos");
        default:
            res.end();
   }
})

server.listen(6000 , () => console.log("server running.."))