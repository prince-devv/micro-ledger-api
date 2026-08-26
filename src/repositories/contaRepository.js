const contas = new Map(); 

function salvar (conta) {
        contas.set(conta.id, conta)
}

function buscarPorId (id) {
    return contas.get(id)

}

export { salvar, buscarPorId};