"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

// Zadanie 1 //
var a = "Hello";
var b = "World";
var c = a + " " + b;
//console.log(c);

// Zadanie 2 //
var multiply = function multiply() {
    var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    return a * b;
};
//console.log(multiply());

// Zadanie 3 //
var average = function average() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
    }

    var sum = 0;
    args.forEach(function (arg) {
        sum += arg;
        return sum;
    });
    return sum / args.length;
};
//console.log(average(1,2,3));

// Zadanie 4 //
var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
//console.log(average(...grades));

// zadanie 5 //
var dataArr = [1, 4, 'Iwona', false, 'Nowak'];
var newArr = dataArr.filter(function (el) {
    return typeof el === "string";
});
//console.log(newArr);

var _newArr = _slicedToArray(newArr, 2);

firstname = _newArr[0];
lastname = _newArr[1];

console.log(firstname);
console.log(lastname);
