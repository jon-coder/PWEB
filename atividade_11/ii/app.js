function Account(nomeCorrentista, nomeBanco, numConta, saldo){
    this.nomeCorrentista = nomeCorrentista;
    this.nomeBanco = nomeBanco;
    this.numConta = numConta;
    this.saldo = saldo;

    this.setAccountHolder = function (nome){
        nomeCorrentista = nome;
    }
    this.setBank = function (banco){
        nomeBanco = banco;
    }
    this.setNumAccount = function(Account){
        numConta = Account;
    }
    this.setBalance = function(vSaldo){
        saldo = vSaldo;
    }
    this.getAccountHolder = function(){
        return nomeCorrentista;
    }
    this.getBank= function(){
        return nomeBanco;
    }
    this.getNumAccount = function(){
        return numConta;
    }
    this.getBalance = function (){
        return saldo;
    }
}

function Current (salEspecial){
    this.salEspecial = salEspecial;

    this.setSpecialBalance = function(valSaldoEsp){
        salEspecial = valSaldoEsp;
    }

    this.getSpecialBalance = function (){
        return salEspecial;
    }
}

function Saving (juros, dataVencimento){
    this.juros = juros;
    this.dataVencimento = dataVencimento;

    this.setInterest = function (valJuros){
        juros = valJuros;
    }

    this.setDueDate = function (dataVenc){
        dataVencimento = dataVenc;
    }

    this.getInterest = function(){
        return juros;
    }

    this.getDueDate = function (){
        return dataVencimento;
    }
}
      
Current.prototype = new Account();
var contaCorrente = new Current();

contaCorrente.setAccountHolder('João da Silva');
contaCorrente.setBank('BB');
contaCorrente.setNumAccount('13456-2');
contaCorrente.setBalance('1500,00');
contaCorrente.setSpecialBalance('1000,00');


Saving.prototype = new Account();
var contaPoupanca = new Saving();

contaPoupanca.setAccountHolder('Pedro Conrado');
contaPoupanca.setBank('Banco Inter');
contaPoupanca.setNumAccount('2022-5');
contaPoupanca.setBalance('90.000,00');
contaPoupanca.setInterest('0,5%');
contaPoupanca.setDueDate("15/11/2021");


document.getElementById('current').innerHTML = `Conta Corrente<br>Nome: ${contaCorrente.getAccountHolder()}<br>Banco: ${contaCorrente.getBank()}<br>Número da Conta: ${contaCorrente.getNumAccount()}<br>Saldo: R$ ${contaCorrente.getBalance()}<br>Saldo especial: R$ ${contaCorrente.getSpecialBalance()}<br>`
document.getElementById('saving').innerHTML = `Conta Poupança<br>Nome: ${contaPoupanca.getAccountHolder()}<br>Banco: ${contaPoupanca.getBank()}<br>Número da Conta: ${contaPoupanca.getNumAccount()}<br>Saldo: R$ ${contaPoupanca.getBalance()}<br>Juros: ${contaPoupanca.getInterest()}<br>Data de Vencimento: ${contaPoupanca.getDueDate()}`
