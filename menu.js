import { saldofinal } from "./AreaFinanceira";
let ler = prompt();

export function menu (saldo){
    console.clear();
    banner()
console.log(`  
opções de menu:

1 para Depósito

2 para Saque

3 para Exibir Saldo 

4 Juros compostos \n

Escolha de 1 a 4 ou digite 'sair' para encerrar:`);
let menox = Number(ler());

let x = true
    if(menox == 1){
        let d = depositar(saldo)
        x = false
    }
    else if(menox == 2){
        let s = sacar(saldo)
        x = false
    }
    else if(menox == 3){
        let e = saldofinal(saldo)
        x = false
    }
    else{
        if(menox = 'sair'){
            x = false
        }
    }
}