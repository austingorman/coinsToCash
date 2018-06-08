// // coins to cash


// const piggyBank = {
//     quarters: 100,
//     nickels: 20,
//     dimes: 10,
//     pennies: 1
// }

// let totals = (quart, nick, dim, pen) => {
//     let grandTotal = 0
//     let quartTot = quart * 25
//     let nickTot = nick * 5
//     let dimTot = dim * 10
//     grandTotal = (quartTot + nickTot + dimTot + pen) / 100
//     return grandTotal
// }


// let dollarAmount = totals(piggyBank.quarters, piggyBank.nickels, piggyBank.dimes, piggyBank.pennies,)

// console.log(dollarAmount)


// cash to coins

const dollarAmount = 1.19
const piggyBank = {
    quarters: 0,
    dimes: 0,
    nickels: 0,
    pennies: 0, 
}


let cents = dollarAmount * 100

piggyBank.quarters =  Math.floor(cents/25)
cents = cents - (piggyBank.quarters * 25)
console.log(cents)
piggyBank.dimes = Math.floor(cents / 10)
cents = cents - (piggyBank.dimes * 10)
piggyBank.nickels = Math.floor(cents / 5)
cents = cents - (piggyBank.nickels * 5)
piggyBank.pennies = Math.floor(cents)



console.log(piggyBank)

