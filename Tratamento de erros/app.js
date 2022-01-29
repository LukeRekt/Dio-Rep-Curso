function validaArray(arr, num){
  try{ 
    if(!arr && !num) throw new ReferenceError("Envie os parametros");
    if(typeof arr !== 'object') throw new TypeError("O array precisa ser do tipo object");
    if(typeof num !== 'number') throw new TypeError("O Num precisa ser do tipo number");
    if(arr.length !== num) throw new RangeError("Tamanho inválido");
    return arr;
}
    catch(e){
        if(e instanceof ReferenceError){
            console.log("Reference Error")
            console.log(e.message);
        } else if(e instanceof TypeError){
            console.log("Type Error")
            console.log(e.message);
        }else if(e instanceof RangeError){
            console.log("Range Error")
            console.log(e.message);
        }else{
            console.log("Ocorreu um erro inesperado: " + e);
        }
    }
}
console.log(validaArray());
console.log(validaArray(5, 5));
console.log(validaArray([], 'a'));
console.log(validaArray([], 5));
console.log(validaArray([1, 2, 3, 4, 5], 5));