const celsius = (prompt("Enter a number: "))
let fahrenheit = convertTemp(celsius)
console.log('Given number is '+ celsius)
console.log('Converted number is '+ fahrenheit)
function convertTemp (celsius) {
    return (celsius * 9/5) + 32
} 