import prompt from "prompt-sync";
let ler = prompt();

import { menu } from "./areaDeExibição.js";


console.log('Digite o valor do saldo: ');
let saldo= Number(ler())

let result = menu(saldo)