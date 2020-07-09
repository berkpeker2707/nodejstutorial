const _ = require("lodash");

let example = _.fill([1,2,3,4,5,], "banana", 1,4 );
console.log(example);

//npm uninstall loadash - cd to main directory
//package.json says lets say 4.17.11
//4 means major update, 17 means minor update, 11 means patch
//lets say ^4.17.11 = this means no major update, but if there is a minor or patch, go ahead and download those.
//lets say ~4.17.x this means I want only patch updates
//if its just numbers, then it means only that version