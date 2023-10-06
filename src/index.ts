import { Assalariado } from "./model/Assalariado";
import { Comissionado } from "./model/Comissionado";
import { Horista } from "./model/Horista";

const a1 = new Assalariado('Ter Stegen', 'G026.893.940-30', 2500);
const c1 = new Comissionado('Dorval', '462.319.500-77', 20, 20);
const h1 = new Horista('Ronaldinho', '731.067.000-09', 39, 40)

a1.setNome('Ter Stegen')
a1.setCPF('3026.893.940-30')
a1.setSalario(2500)
console.log(`Nome: ${a1.getNome()}, CPF: ${a1.getCPF()}`);
console.log(`Salário: ${a1.getSalario()}`);
console.log(`Vencimento: ${a1.vencimento()}`);
console.log('\n')

c1.setNome('Dorval')
c1.setCPF('462.319.500-77')
c1.setTotalVendas(24)
c1.setTaxaComissao(350)
console.log(`Nome: ${c1.getNome()}, CPF: ${c1.getCPF()}`);
console.log(`Taxa de comissão: ${c1.getTotalVendas()}, Total de vendas: ${c1.getTotalVendas()}`);
console.log(`Vencimento: ${c1.vencimento()}`);
console.log('\n')

h1.setNome('Ronaldinho')
h1.setCPF('731.067.000-09')
h1.setValorHora(37)
h1.setHoraTrabalhada(8)
console.log(`Nome: ${h1.getNome()}, CPF: ${h1.getCPF()}`);
console.log(`Valor das Horas: ${h1.getValorHora()}, Horas Trabalhadas: ${h1.getHoraTrabalhada()}`);
console.log(`Vencimento: ${h1.vencimento()}`);