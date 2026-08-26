import http from "node:http";
import { criarConta, depositar, sacar, estornar, buscarPorContaId } from "./services/contaService.js";
import {criarContaController, depositarController, sacarController, estornarController, extratoController} from "./controllers/contaController.js"


const server = http.createServer((req, res) => {
  if (req.method === "POST" && req.url === "/contas") {
  criarContaController(req, res);
}

else if (req.method === "POST" && req.url === "/contas/depositar") {
  depositarController(req, res);
}

else if (req.method === "POST" &&  req.url === "/contas/sacar") {
  sacarController(req, res);
}

else if  (req.method === "POST" && req.url === "/contas/estornar") {
  estornarController(req, res);
} 

else if (req.method === "GET" && req.url.startsWith("/contas/extrato")) {
  extratoController(req, res);
} 

else {
    res.end("Rota não encontrada");
  }
});


 
server.listen(3000);
console.log("Servidor rodando na porta 3000");