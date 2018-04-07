"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
fs_1.unlinkSync('MeusDados.json');
fs_1.writeFileSync('MeusDados.json', JSON.stringify([{ nome: "Erick-" + Date.now() }]));
console.log('finalizou');
