/* many APIs and application store data in this way, Arrays can have other Arrays as elements, its useful to naviagate, multidimensional Array */

/* My Challenge;
1/ use Array indexing to access the number 15 in the multidimensionalArray and assign it to a varible: fifteen

2/ now that i know the indexes that were required to access the number 15, create a one-dimensional Array called: indexArray which contains in order the Array indicies you used to access the number 15 in the fifteen varible
*/



let multidimensionalArray = [1, 2, 3,[4, 5, 6,[7, 8, 9,[10, 11, 12,[13, 14,[15]]]]]];

// added below


let fifteen = multidimensionalArray [3][3][3][3][2][0];

let indexArray = [3, 3, 3, 3, 2, 0];

console.log(fifteen);
console.log(indexArray);