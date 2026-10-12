
let name = "Annanya";
let age = 20;
let isStudent = true;
let marks = [80, 90, 85];
let student = { name: "Annanya" };
let address = null;
let phone;

console.table([
    { value: name, type: typeof name },
    { value: age, type: typeof age },
    { value: isStudent, type: typeof isStudent },
    { value: marks, type: Array.isArray(marks) ? "array" : typeof marks },
    { value: student, type: typeof student },
    { value: address, type: "null" },
    { value: phone, type: typeof phone }
]);
