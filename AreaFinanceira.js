import prompt from "prompt-sync";
let ler = prompt();

import { banner, verm, ama, ver, azul, cia, mage, bra, pre, fundPre, fundVerm, fundAma, fundVer,fundAzu, fundCia, fundMag, fundBra} from "./design.js"; 



export function depositar(saldo){
    console.clear();
    banner()
    console.log(mage ,'Quantos você deseja depositar');
    let depositado = Number(ler());

let x = true

    while(depositado <= 0){
        console.log(mage,'Quantos você deseja depositar');
        depositado = Number(ler());

    
    if(depositado == 'c' || saldo == 'c'){
        x = false
    }
}
        
let tld = depositado + saldo

console.log(ver,'Seu saldo atual é de: ' + tld);

    return tld
}

export function sacar(saldo){
    console.clear();
    banner()
    console.log(mage, 'Qual o valor a ser sacado:');
    let sacado = Number(ler());

let x = true

    while(sacado <= 0){
        console.log(mage,'Qual o valor a sacar: ');
        sacado = Number(ler());

    
    if(sacado == 'c' || saldo == 'c'){
        x = false
    }
}
        
let tls = saldo - sacado

console.log(ver,`seu saldo atual é ${tls}`);

    return tls
}

export function saldofinal(saldo){
    console.clear();
    banner();
    console.log(ver, `Seu saldo atual é de: ${saldo}`);
}

export function lerJurosComposto(saldo, juros, tempo) {
    let jurosComposto = saldo * Math.pow(( 1 + ( juros / 100 )), tempo)
    return jurosComposto
}
