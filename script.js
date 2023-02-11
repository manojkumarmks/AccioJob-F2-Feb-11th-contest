/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
  arr.map(student => {
    if (student.marks >= 50) {
      console.log(student);
    }
  });
}

function PrintStudentsbyForEach() {
  arr.forEach(student => {
    if (student.marks >= 50) {
      console.log(student);
    }
  });
}

function addData() {
  const newStudent = { id: 4, name: "susan", age: "20", marks: 45 };
  arr.push(newStudent);
  console.log(newStudent);
}

function removeFailedStudent() {
  const updatedArray = arr.filter(student => student.marks >= 50);
  console.log(updatedArray);
}

function concatenateArray() {
  const newArray = [
    { id: 5, name: "Alex", age: "19", marks: 65 },
    { id: 6, name: "Jane", age: "20", marks: 80 },
    { id: 7, name: "Tom", age: "18", marks: 90 }
  ];
  arr = arr.concat(newArray);
  console.log(arr);
}
PrintStudentswithMap();
PrintStudentsbyForEach();
addData();
removeFailedStudent();
concatenateArray();
