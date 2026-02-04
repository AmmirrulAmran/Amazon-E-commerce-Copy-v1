import { formatCurrency } from "../javascript-amazon-project-main/scripts/utils/money.js";


console.log('test suit: formatCurrency')
console.log('convert cents to dollar')
if(formatCurrency(2095) === '20.95'){

    console.log('passed')
}

else{
    console.log('failed')
}


console.log('works with 0')

if(formatCurrency(0) === '0.00'){

    console.log('passed')
}

else{
    console.log('failed')
}

console.log('round up to nearest cent')

if(formatCurrency(2000.5) === '20.01'){

    console.log('passed')
}

else{
    console.log('failed')
}

// we should have 2 type of case
// basic case and edge case
// test suite - group of related test