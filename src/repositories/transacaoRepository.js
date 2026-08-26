const transacoes = new  Map ();

function buscarPorContaId (id){
const todasTransacoes = Array.from(transacoes.values());
return todasTransacoes.filter(t => t.contaId === id);
}


function salvar (transacao) {
        transacoes.set(transacao.id, transacao)
}

        function buscarPorId (id) {
        return transacoes.get(id)

        }
export {buscarPorContaId,salvar, buscarPorId}