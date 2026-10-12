
let expenses = [2000, 1000, 5000, 1500, 500];

let total = 0;

for (let i = 0; i < expenses.length; i++) {
    total += expenses[i];
}

let average = total / expenses.length;
let tax = total * 0.10;
total += tax;

console.log("Total Expenses: " + (total - tax).toFixed(2));
console.log("Average Expenses: " + average.toFixed(2));
console.log("Final Amount with Tax: " + total.toFixed(2));
