
//Write a function that prompts the user to input student marks.// 
//The input should be between 0 and 100.// 
//The output should correspond the correct grade, as shown below://
//A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.//

function studentGrade(marks) {
    if (marks < 0 || marks > 100) {
        return 'Error: Marks must be between 0 and 100.';
    }if (marks > 79) {
        return 'A';
    } else if (marks >= 60 && marks <= 79) {
        return 'B';
    } else if (marks >= 50 && marks <= 59) {
        return 'C';
    } else if (marks >= 40 && marks <= 49) {
        return 'D';
    } else {
        return 'E';
    }
}

console.log(studentGrade(89)); 
