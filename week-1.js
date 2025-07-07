function calc(x, y, oper){
    if (oper === '+') {
        return x + y;
    } else if (oper === '-') {
        return x - y;
    } else if (oper === '*') {
        return x * y;
    } else if (oper === '/') {
        return x / y;
    } else {
        throw new Error('Invalid operator');
    }
}

console.log(calc(1, 2, '+'));
console.log(calc(1, 2, '-'));
console.log(calc(1, 2, '*'));
console.log(calc(1, 2, '/'));

// Positive or Negative

function posneg(num){
    if (num > 0) {
        return 'positive';
    } else if (num < 0) {
        return 'negative';
    } else {
        return 'zero';
    }
}

console.log(posneg(4));
console.log(posneg(-4));
console.log(posneg(0));

//Fruit Loops

function fruitsLoops(fruits){
    let result = '';
    for (let i = 0; i < fruits.length; i++) {
        result += fruits[i];
        if (i < fruits.length - 1) {
            result += ', ';
        }
    }
    return result;
}

console.log(fruitsLoops(["apple", "banana", "cherry", "date"]));

// Area
const areaForm = (length, width) => length * width;

let length = 10;
let width = 4;
let area = areaForm(length, width);
console.log(area);


// Student

let student = {
    name: "Bhavya",
    grades: [85, 96, 78, 63, 87],

    getGPA: function () {
        let total = 0;
        for(let i = 0; i < this.grades.length; i++){
            total += this.grades[i];
        }
        return total / this.grades.length;
    },

    getLetterGrade: function () {
        let avg = this.getGPA();
        if (avg >= 90) 
            return "A";
        if (avg >= 80) 
            return "B";
        if (avg >= 70) 
            return "C";
        if (avg >= 60) 
            return "D";
        return "F";
    },

    getHighestGrade: function () {
        let max = this.grades[0];
        for(let i = 1; i < this.grades.length; i++){
            if(this.grades[i] > max){
                max = this.grades[i];
            }
        }
        return max;
    },

    logSummary: function () {
        console.log("Student: " + this.name);
        console.log("Average Grade: " + this.getGPA());
        console.log("Letter Grade: " + this.getLetterGrade());
        console.log("Highest Grade: " + this.getHighestGrade());
    }
}

student.logSummary();