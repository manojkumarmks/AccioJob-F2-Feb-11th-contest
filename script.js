/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentbyMap() {
  arr.map(student => student.marks >= 50 && console.log(student));
}

function PrintStudentbyForEach() {
  arr.forEach(student => student.marks >= 50 && console.log(student));
}

function addData() {
  arr.push({ id: 4, name: "susan", age: "20", marks: 45 });
  console.log(arr[arr.length - 1]);
}

function removeFailedStudent() {
  arr = arr.filter(student => student.marks >= 50);
  console.log(arr);
}

function ConcatenateArray() {
  arr = arr.concat([
    { id: 5, name: "Alex", age: "19", marks: 65 },
    { id: 6, name: "Jane", age: "20", marks: 80 },
    { id: 7, name: "Tom", age: "18", marks: 90 }
  ]);
  console.log(arr);
}
PrintStudentbyMap();
PrintStudentbyForEach();
addData();
removeFailedStudent();
ConcatenateArray();
