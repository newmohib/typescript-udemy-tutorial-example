function _add(n1: number, n2: number){
    return n1+ n2;
}

// this function is can not return any value
function printResult(num: number): void{
    console.log('Result: '+ num)
}



printResult(5)

let combineValues: (a: number, b: number)=> number;

 combineValues = _add;

console.log(combineValues(8, 8))

// callback function // cb()

function addAndHandle(n1: number, n2: number, cb: (num: number)=>void){
    const result = n1 + n2;
    cb(result)
}

addAndHandle(5, 5, (result)=>{console.log(result)})