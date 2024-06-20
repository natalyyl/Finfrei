import prompt from "prompt-sync";
let ler = prompt();

import { banner, verm, ama, ver, azul, cia, mage, bra, pre, fundPre, fundVerm, fundAma, fundVer,fundAzu, fundCia, fundMag, fundBra} from "./design.js"; 
import { lerJurosComposto } from "./AreaFinanceira.js";

export function depositar(saldo){
    console.clear();
    banner();
    console.log(mage, 'Valor a depositar: ');
    let depositado = Number(ler());

let x = true

    while(depositado <= 0){
        console.log(mage, 'Quantos você deseja depositar: ');
        depositado = Number(ler());

    
    if(depositado == 'c' || saldo == 'c'){
        x = false
    }
}
        
let tld = depositado + saldo

console.log(ver, `saldo atual:R$${tld}`);

    return tld
}

export function sacar(saldo){
    console.clear();
    banner();
    console.log(mage, 'Valor a sacar');
    let sacado = Number(ler());

let x = true

    while(sacado <= 0){
        console.log(mage, 'Qual o valor a sacar');
        sacado = Number(ler());

    
    if(sacado == 'c' || saldo == 'c'){
        x = false
    }
}
        
let tls = saldo - sacado

console.log(ver, `Saldo atual:R$ ${tls}`);

    return tls
}

export function exibirsaldo(saldo){
    console.clear();
    banner();
    console.log(ver, `Seu saldo atual é de:R$ ${saldo}`);
}


export function menu (saldo){
    console.clear();
    banner();
console.log(azul, `   
Aqui estão algumas de nossas opções de menu:


1 para Depósito

2 para Saque

3 para Exibir Saldo 

4 Juros Composto\n

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
        let e = s(saldo)
        x = false
    }
    else if ( menox == 4 ) {
        console.clear();
        banner()
        let saldex= Number(ler("Insira um capital: "))
        let Juros = Number (ler("Qual o juros: "))
        let tempo = Number(ler("Em quanto tempo: "))
        let result = lerJurosComposto(saldex, Juros, tempo);
        console.log(mage,`Em ${tempo} anos, seu acumulo será de ${result.toFixed(5)}`);

    }
    else{
        if(menox == 'sair'){
            x = false
        }
    }
}