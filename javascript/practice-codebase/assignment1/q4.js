
let marks = [90, 80, 75, 85, 70];

let total = 0;
let detained = false;

for (let i = 0; i < marks.length; i++) {
    total += marks[i];

    if (marks[i] < 35) {
        detained = true;
    }
}

let average = total / 5;
let percentage = (total / 500) * 100;

console.log("Average: " + average.toFixed(2));
console.log("Percentage: " + percentage.toFixed(2) + "%");

if (detained || percentage < 50) {
    console.log("Detained");
} else if (percentage >= 85) {
    console.log("Promoted with Distinction");
} else {
    console.log("Promoted");
}
