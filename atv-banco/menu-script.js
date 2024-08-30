const senha = "3589";
let resultadoSenha;
let saldo = 2500;
let valorSaque;
let valorTrans;
let valorDepo;
let extrato = []



function menu() {
    let operacao = document.getElementById("operacao").value;
    switch (operacao) {
        case "saldo":
            resultadoSenha = verificaSenha()
            if (resultadoSenha == false) {
                break;
            }
            alert("Seu saldo é: R$ " + saldo);
            break;
        case "extrato":
            resultadoSenha = verificaSenha()
            if (resultadoSenha == false) {
                alert("Senha incorreta! Tente novamente")
                break;
            }
            if (extrato.length == 0) {
                alert("Nenhuma operação foi realizada");
            } else {
                alert(`EXTRATO:\n${extrato.join("\n")}`
                )
            }
            break;
        case "saque":
            resultadoSenha = verificaSenha()
            if (resultadoSenha == false) {
                alert("Senha incorreta! Tente novamente")
                break;
            }
            valorSaque = parseFloat(prompt("Digite o valor do saque: "));
            if (valorSaque <= 0) {
                alert("Operação não autorizada!");
            } else if (valorSaque > saldo) {
                alert("Saldo insuficiente");
            } else {
                saldo = saldo - valorSaque;
                alert(`Você sacou: R$ ${valorSaque}.\nSeu saldo atual é: R$ ${saldo}`);
                extrato.push(`Você sacou R$ ${valorSaque}.`)
            } break;
        case "deposito":
            resultadoSenha = verificaSenha()
            if (resultadoSenha == false) {
                alert("Senha incorreta! Tente novamente")
                break;
            }
            valorDepo = parseFloat(prompt("Digite o valor do depósito: "));
            if (valorDepo <= 0) {
                alert("Operação não autorizada!");
            } else {
                saldo = saldo + valorDepo;
                alert(`Você depositou: R$ ${valorDepo}. \nSeu saldo atual é: R$ ${saldo}`);
                extrato.push(`Você depositou R$ ${valorDepo}.`)
            } break;
        case "transferencia":
            resultadoSenha = verificaSenha()
            if (resultadoSenha == false) {
                alert("Senha incorreta! Tente novamente")
                break;
            }
            valorTrans = parseFloat(prompt("Digite o valor da transferência: "));
            if (valorTrans <= 0) {
                alert("Operação nao autorizada!")
            } else if (valorTrans > saldo) {
                alert("Saldo insuficiente");
            } else {
                saldo = saldo - valorTrans;
                alert(`Sua transferência foi de: R$ ${valorTrans}. \nSeu saldo atual é: R$ ${saldo}`);
                extrato.push(`Você fez uma transferência de: R$ ${valorTrans}`);
            }
            break;
            default:
                alert("Erro");
                break;
    }
}

function verificaSenha() {
    let valorSenha = prompt("Insira a senha");
    if (valorSenha === senha) {
        return true;
    } else {
        alert("Senha incorreta! Tente novamente")
        return false;
    }
}