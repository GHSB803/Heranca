"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Horista = void 0;
const Empregado_1 = require("./Empregado");
class Horista extends Empregado_1.Empregado {
    constructor(_nome, _cpf, _valorHora, _horaTrabalhada) {
        super(_nome, _cpf);
        this.valorHora = _valorHora;
        this.horaTrabalhada = _horaTrabalhada;
    }
    setValorHora(_valorHora) {
        this.valorHora = _valorHora;
    }
    getValorHora() {
        return this.valorHora;
    }
    setHoraTrabalhada(_horaTrabalhada) {
        this.horaTrabalhada = _horaTrabalhada;
    }
    getHoraTrabalhada() {
        return this.horaTrabalhada;
    }
    vencimento() {
        return this.valorHora * this.horaTrabalhada;
    }
}
exports.Horista = Horista;
//# sourceMappingURL=Horista.js.map