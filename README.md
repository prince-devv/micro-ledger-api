# Micro-Ledger API

API de processamento financeiro e micro-ledger, desenvolvida em **Node.js puro** (sem frameworks), como projeto de portfólio para praticar arquitetura em camadas, regras de negócio e construção de um servidor HTTP do zero.

## 🛠️ Tecnologias

- Node.js (módulo nativo `http`, sem Express ou outro framework)
- JavaScript (ES Modules — `import`/`export`)
- Armazenamento em memória (`Map`), sem banco de dados externo

## 📦 Como rodar

```bash
git clone https://github.com/prince-devv/micro-ledger-api.git
cd micro-ledger-api
node src/app.js
```

O servidor sobe em `http://localhost:3000`.

## 🏗️ Arquitetura

O projeto segue uma arquitetura em camadas:

- CONTROLLERS — recebem a requisição HTTP, leem o corpo (`body`) e devolvem a resposta
- SERVICES — contêm as regras de negócio (validações, cálculos de saldo, estorno)
- REPOSITORIES — responsáveis por guardar e buscar os dados (em memória, via `Map`)

## 📋 Regras de negócio

- Uma conta nunca pode ficar com saldo negativo
- Todo depósito e saque gera uma transação, guardada no histórico
- Transações podem ser estornadas, revertendo o efeito da operação original no saldo

## 🔌 Rotas disponíveis

### Criar conta
`POST /contas`
```json
{
  "dono": "Glass"
}
```

### Depositar
`POST /contas/depositar`
```json
{
  "id": "id-da-conta",
  "valor": 100
}
```

### Sacar
`POST /contas/sacar`
```json
{
  "id": "id-da-conta",
}