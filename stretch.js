const createBase = function(base){
    return function(num){
        return num + base;
    }
}
const addSix = createBase(6)
console.log(addSix(10))
console.log(addSix(21))