const maca = {
    value: 2,
};
const laranja = {
    value: 3,
};

function mapComThis(arr, thisArg){
    return arr.map(function(item){
        return item * this.value;
    }, thisArg);
}

const nums = [1, 2];
console.log('----------------------');
console.log('MAP COM THIS');
console.log('this -> maca ' + mapComThis(nums, maca));

console.log('this -> laranja ' + mapComThis(nums, laranja));

function mapSemThis(arr){
   return arr.map(function(item){
        return item * 2
    });
}

const nums2 = [2, 4, 6, 8, 10];
console.log('----------------------');
console.log('MAP SEM THIS');
console.log(mapSemThis(nums2));
console.log('----------------------');