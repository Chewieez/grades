const scores = [82, 71, 62, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87, 60, 51, 99, 57, 97, 94, 55, 76, 98]
const grades = {
    "F": 0,
    "D": 0,
    "C": 0,
    "B": 0,
    "A": 0
} 

// loop will iterate through array and increment each perspective property in the object grades
for (let i = 0; i < scores.length; i++) {
    switch (true) {
        case (scores[i] <= 60):
            grades.F += 1;
            break;
        case (scores[i] >= 61 && scores[i] <= 70):
            grades.D += 1;
            break;
        case (scores[i] >= 71 && scores[i] <= 80):
            grades.C += 1;
            break;
        case (scores[i] >= 81 && scores[i] <= 90):
            grades.B += 1;
            break;
        case (scores[i] >= 91 && scores[i] <= 100):
            grades.A += 1;
            break;
    }
}

// iterates through the object grades and prints the value of each property to the console.
function howManyEachGrade() {
    console.log("Number of each grade: ")
    for (var prop in grades) {
        console.log(prop + ": " + grades[prop])
    }
}

howManyEachGrade();

// sorts the scores array by number from smallest to largest and outputs the first (smallest) element in the scores array.
function lowestGrade() {
    let sortOrderArray = scores.sort(function(a, b) 
        { return a - b});
    console.log("Lowest Grade: ", sortOrderArray[0]);
}

lowestGrade();

// sorts the scores array by number from largest to smallest and outputs the first (largest) element in the scores array.
function highestGrade() {
    let sortOrderArray = scores.sort(function(a, b) 
        { return b - a});
    console.log("Highest Grade: ", sortOrderArray[0]);
}

highestGrade();


// This function iterates over the object to check for the grade(s) with the most amout of scores.
function mostCommonGrade() {
    let currentGradeCount = 0;
    let mostCommonGrade;

    for (var prop in grades) {
        // checks if the value at the current property is less than the current grade counter. Then makes the counter equal the value of that property and assigns that property name (grade) to the variable mostCommonGrade. 
        if (currentGradeCount < grades[prop]) {
            currentGradeCount = grades[prop];
            mostCommonGrade = prop;
        } 
        // If the value is equal to the counter, then this appends the property name (grade) to the mostCommonGrade variable to keep a list of all the grades that have the same amount of scores when there is more than one. 
         else if (currentGradeCount === grades[prop]) {
           currentGradeCount = grades[prop];
           mostCommonGrade += ", " + prop;
         }

    }
    // This will output a list of the grade(s) with the most amount of scores and put the number of scores next to it. 
    console.log('The most common grade(s): ', mostCommonGrade, "-", currentGradeCount)
}

mostCommonGrade()


// This function iterates over the object to check for the grade(s) with the least amount of scores.
function leastCommonGrade() {
    // this uses the length of the scores array as a starting point for the counter to make sure that the starting point is high enough for arrays of scores that are vary in size.
    let currentGradeCount = scores.length;
    let leastCommonGrade;

    for (var prop in grades) {
        // checks if the value at the current property is greater than the current grade counter. Then makes the counter equal the value of that property and assigns that property name (grade) to the variable leastCommonGrade.
        if (currentGradeCount > grades[prop]) {
            currentGradeCount = grades[prop];
            leastCommonGrade = prop;
        } 
        // If the value is equal to the counter, then this appends the property name (grade) to the leastCommonGrade variable to keep a list of all the grades that have the same amount of scores when there is more than one. 
         else if (currentGradeCount === grades[prop]) {
           currentGradeCount = grades[prop];
           leastCommonGrade += ", " + prop;
         }

    }
    // This will output a list of the grade(s) with the least amount of scores and put the number of scores next to it. 
    console.log('The least common grade(s): ', leastCommonGrade, "-", currentGradeCount)
}

leastCommonGrade()

