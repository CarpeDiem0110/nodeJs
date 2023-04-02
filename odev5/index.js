let http = require('http');


/* Burda bir server oluşturduk ve ona istek attık */ 
const server = http.createServer((req,res) => {
    const url = req.url;
    if(url === '/index'){
        res.write("<h2>index sayfasına hoşgeldiniz</h2>")
    }
    if(url == '/hakkimda'){
        res.write("<h2>Hakkımda sayfasına hoşgeldiniz</h2>")
    }
    if(url == '/iletişim'){
        res.write("<h2>İletişim sayfasına hoşgeldiniz</h2>")
    }
    console.log('Bir istek gönderildi');
   
})

const port = 5000;

/* Burda ise serverımızı porta bağladık */ 
server.listen(port, () =>{
    console.log("Server " + port + "da başlatıldı.");
})