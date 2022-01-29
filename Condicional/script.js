x = prompt("Insira um numero");
y = prompt("Insira outro numero");

num1 = parseInt(x);
num2 = parseInt(y);

sim = num1 === num2;
soma = num1 + num2;

if(sim == true){
if(num1 + num2 <= 10){
    alert(`Os Numeros ${num1} e ${num2} sao iguais. Sua soma eh ${soma}. menor que 10 e menor que 20`)
} else if(num1 + num2 > 10 && num1 + num2 < 20){
    alert(`Os Numeros ${num1} e ${num2} sao iguais. Sua soma eh ${soma}. maior que 10 e menor que 20`)
}else if(num1 + num2 >= 20){
    alert(`Os Numeros ${num1} e ${num2} sao iguais. Sua soma eh ${soma}. maior que 10 e maior que 20`)

}
    
}else{
    if(num1 + num2 <= 10){
        alert(`Os Numeros ${num1} e ${num2} sao diferentes. Sua soma eh ${soma}. menor que 10 e menor que 20`)
    } else if(num1 + num2 > 10 && num1 + num2 < 20){
        alert(`Os Numeros ${num1} e ${num2} sao diferentes. Sua soma eh ${soma}. maior que 10 e menor que 20`)
    }else if(num1 + num2 >= 20){
        alert(`Os Numeros ${num1} e ${num2} sao diferentes. Sua soma eh ${soma}. maior que 10 e maior que 20`)
    
    }
}