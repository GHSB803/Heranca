import { Empregado } from "./Empregado";

export class Horista extends Empregado {
    private valorHora: number;
    private horaTrabalhada: number;

    public constructor(_nome: string, _cpf: string, _valorHora: number, _horaTrabalhada: number){
        super(_nome, _cpf)
        this.valorHora = _valorHora;
        this.horaTrabalhada = _horaTrabalhada;
    }

    public setValorHora(_valorHora: number):void{
        this.valorHora = _valorHora;
    }

    public getValorHora(){
        return this.valorHora;
    }

    public setHoraTrabalhada(_horaTrabalhada: number):void{
        this.horaTrabalhada = _horaTrabalhada;
    }

    public getHoraTrabalhada(){
        return this.horaTrabalhada;
    }

    public vencimento(): number {
        return this.valorHora * this.horaTrabalhada;
    }
}
