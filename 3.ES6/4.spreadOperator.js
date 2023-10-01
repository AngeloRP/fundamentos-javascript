/* 
            Sintaxe de espelhamento
            no exemplo usado na aula
            copiamos um array.
*/

const arr1 = ['jan', 'fev', 'mar', 'abril', 'maio'];
// quero copiar, uso o outro array

let arr2 = [...arr1];
console.log(arr2);
arr2.push('julho')
console.log(arr2);

