const http = require('http');
const fs = require('fs');
const path = require('path');


http.createServer( (req,res) => {
    
    const file = path.join(__dirname,"public", `${ req.url === "/" ? "index" : req.url}.html`)

    fs.readFile( file , (err,content) => {
        if(!err){
            res.writeHead(200 , {'File-Type':'text/html'})
            res.end(content)
        }

        if(err){
            if(err.code == 'ENOENT'){
                fs.readFile( path.join(__dirname , "public/404.html") , (err , content) => {
                    if(!err){
                        res.end(content)
                    }

                    if(err){
                        res.end("404");
                    }
                })
            }
        }

        
    })
}).listen(8000 , () => {
    console.log(`server started at PORT NO ${process.env.PORT}`);
})