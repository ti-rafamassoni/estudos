var banco = {
    conta: "123456",
    saldo: 10000,
    tipoConta: "Corrente",
    agencia: "234",
    buscarSaldo: function () {alert("O saldo é " + this.saldo);},
    deposito: function (valorDeposito) {
        this.saldo += valorDeposito;
        alert("Depósito de " + valorDeposito + ". O novo saldo é " + this.saldo);
    },
    saque: function (valorSaque) {
        this.saldo -= valorSaque;
        alert("Saque de " + valorSaque + ". O novo saldo é " + this.saldo);
    },
    numeroConta: function () {alert("O número da conta é " + this.conta);}
}
banco.buscarSaldo();
banco.deposito(2000);
banco.saque(4000);
banco.numeroConta();