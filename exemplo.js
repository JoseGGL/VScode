function returnEvenValues(array) {
    let evenNums = [];
    for(let i = 0; i < array.lenght; i++) {
        if(array[i] % 2 === 0 ) {
            evenNums.push(array[i]);
        }
    }   
    console.log(evenNums);
}
let array = [1, 2, 4, 5, 10, 1000, 20, 40, 56, 23, 11];
returnEvenValues(array);