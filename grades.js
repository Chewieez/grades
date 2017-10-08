const scores = [82, 71, 62, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87, 60]
const grades = {
    "F": 0,
    "D": 0,
    "C": 0,
    "B": 0,
    "A": 0
} 

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
function howManyEachGrade() {
    console.log("Number of each grade: ")
    for (var prop in grades) {
        console.log(prop + ": " + grades[prop])
    }
}

howManyEachGrade();

function lowestGrade() {
    let sortOrderArray = scores.sort(function(a, b) 
        { return a - b});
    console.log("Lowest Grade: ", sortOrderArray[0]);
}

lowestGrade();


function highestGrade() {
    let sortOrderArray = scores.sort(function(a, b) 
        { return b - a});
    console.log("Highest Grade: ", sortOrderArray[0]);
}

highestGrade();

