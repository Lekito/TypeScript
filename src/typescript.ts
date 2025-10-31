let valor = 3000;

type Transacao = {
    TipoTransacao: TipoTransacao;
    data: Date;
    valor: number;
}

// Array
const nomes: string[] = []

nomes.push('ava', 'Rita')

// Enum
enum TipoTransacao {
    DEPOSITO = 'Depósito',
    TRANSFERENCIA = 'Transferência',
    PAGAMENTO_BOLETO = 'Pagamento de Boleto'
}

const novaTransacao: Transacao = {
    TipoTransacao: TipoTransacao.DEPOSITO,
    data: new Date(),
    valor: 0,
}