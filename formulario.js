var nome_completo = "Rodrigo Argenton Barbosa";
var aniversario = new Date(2000,7,3);
var dia_semana = ["Domingo","Segunda","Terça","Quarta","Quinta","Sexta","Sábado"]
console.log(nome_completo + " nasceu " + dia_semana[aniversario.getDay()]);