// function double(arr) {
//     return arr.map(function(val) {
//       return val * 2;
//     });
//   }

function double(arr) { return arr.map(val => val * 2) }

// function squareAndFindEvens(numbers){
//     var squares = numbers.map(function(num){
//       return num ** 2;
//     });
//     var evens = squares.filter(function(square){
//       return square % 2 === 0;
//     });
//     return evens;
//   }

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const squareAndFindEvens = (numbers) => {
    let squares = numbers.map((num) => {
        return num ** 2;
    });
    let evens = squares.filter((square) => {
        return square % 2 === 0;
    });
    return evens;
}