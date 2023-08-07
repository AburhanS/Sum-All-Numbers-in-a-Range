function sumAll(array){
    let i = array[0];
    let j = array[1];
    let total = 0;
    if(i === j){
        total = i;
    } else if(i < j){
        for(; i <= j; i++){
            total += i;
        }
    } else{
        for(; i >= j; i--){
        total += i;
    }
    }

    return total;
}

console.log(sumAll([4,4]));
console.log(sumAll([1, 4]));
console.log(sumAll([4, 1]));
console.log(sumAll([5, 10]));