var http = require('http');
var server = http.createServer(function(req, res) {
    var opcao = req.url;
    if(opcao == '/historia') {
        res.end("<html><body>Historia da Fatec</body></html>");
    } else if(opcao == '/cursos') {
        res.end("<html><body>Cursos da Fatec</body></html>");
    } else if(opcao == '/professores') {
        res.end("<html><body>Professores da Fatec</body></html>");
    } else {
        res.end("<html><body>Site da Fatec</body></html>");
    }
    
});

server.listen(3000);