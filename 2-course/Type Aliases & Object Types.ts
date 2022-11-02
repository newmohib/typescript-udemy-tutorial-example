// Type aliases can be used to "create" your own types. 
// You're not limited to storing union types though - you can also provide an alias to a (possibly complex) object type.


type Combinable = number | string ;
type ConversionDescriptor = 'as-number' | 'as-text' // literal Type/ enum/ union type


function combine(
    input1: Combinable,
    input2: Combinable,
    resultConversion: ConversionDescriptor
    ){
    let result;
    if ( typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        result = +input1 + +input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    return result;
}

const combinedAges = combine(30, 26, 'as-number');
console.log(combinedAges)

const combinedAgesNames = combine('30', '26', 'as-number');
console.log(combinedAgesNames)

const combinedNames = combine("mohib", "rahman", 'as-text');
console.log(combinedNames);


type User = { name: string; age: number };

const u1: User = { name: 'Max', age: 30 }; // this works!

function greet(user: { name: string; age: number }) {
    console.log('Hi, I am ' + user.name);
  }
   
  function isOlder(user: { name: string; age: number }, checkAge: number) {
    return checkAge > user.age;
  }
 
   
  function greet2(user: User) {
    console.log('Hi, I am ' + user.name);
  }
   
  function isOlder2(user: User, checkAge: number) {
    return checkAge > user.age;
  }

  
