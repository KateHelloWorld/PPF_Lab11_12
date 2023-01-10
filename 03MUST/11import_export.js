// export an array
export let months = ['Jan', 'Feb', 'Mar', 'Apr', 'Aug', 'Sep', 'Oct', 'Dec'];

// export a constant 
export const MODULES_BECME_STANDARD_YEAR = 2015;

// export a class 
export class User{
    constructor(name){
        this.name = name;
    }
}

// export function
export function sayHi(user){
    alert(`Hello, ${user}!`);
}

// import sayHi to the local variable hi 
import {sayHi as hi, sayBye as bye} from './say.js';