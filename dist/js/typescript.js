let valor = 3000;
// Array
const nomes = [];
nomes.push('ava', 'Rita');
// Enum
var TipoTransacao;
(function (TipoTransacao) {
    TipoTransacao["DEPOSITO"] = "Dep\u00F3sito";
    TipoTransacao["TRANSFERENCIA"] = "Transfer\u00EAncia";
    TipoTransacao["PAGAMENTO_BOLETO"] = "Pagamento de Boleto";
})(TipoTransacao || (TipoTransacao = {}));
const novaTransacao = {
    TipoTransacao: TipoTransacao.DEPOSITO,
    data: new Date(),
    valor: 0,
};
