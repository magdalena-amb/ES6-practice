// Zadanie 1 //
const a = "Hello";
const b = "World";
const c = `${a} ${b}`;
//console.log(c);

// Zadanie 2 //
const multiply = (a=1, b=1) => a* b;
//console.log(multiply());

// Zadanie 3 //
const average = (...args) => {
    let sum = 0;
    args.forEach(arg => {
        sum+=arg;
        return sum;
    });
    return sum / args.length;
}
//console.log(average(1,2,3));

// Zadanie 4 //
const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
//console.log(average(...grades));

// zadanie 5 //
const dataArr = [1, 4, 'Iwona', false, 'Nowak'];
const newArr = dataArr.filter(el => typeof(el)=== "string");
//console.log(newArr);
[firstname,lastname] = newArr; 
console.log(firstname);
console.log(lastname);

