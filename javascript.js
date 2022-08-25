function calcSum() 
{
let Atv = document.getElementsByName("Atv")[0].value;
let Trab = document.getElementsByName("Trab")[0].value;
let Part = document.getElementsByName("Part")[0].value;
let num4 = document.getElementsByName("num4")[0].value;

let sum = ((Number(Atv) + Number(Trab)+ Number(Part))/3)*0.4 + Number(num4)*0.6

document.getElementsByName("sum")[0].value = sum;
document.getElementsByName("Resul")[0].value = "Aprovado"

if(sum>=6){document.getElementsByName("Resul")[0].value = "Aprovado";} else {document.getElementsByName("Resul")[0].value = "Reprovado";}

}