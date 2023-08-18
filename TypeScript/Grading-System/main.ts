const promptSync = require('prompt-sync')();

let gradeSystem=()=>{
    let myName=promptSync(`Whats ur name? `)
    let myMarks=promptSync("Enter your marks: ")
    let grades=["A+", "A", "B", "C" ,"D","F"]

    if(myMarks>=90 && myMarks<=100){
        console.log(`${myName}, has scored ${myMarks}, and your grade is ${grades[0]}`)
    }
    else if(myMarks>=80 && myMarks<90){
        console.log(`${myName}, has scored ${myMarks}, and your grade is ${grades[1]}`)
    }
    else if(myMarks>=70 && myMarks<80){
        console.log(`${myName}, has scored ${myMarks}, and your grade is ${grades[2]}`)
    }
    else if(myMarks>=60 && myMarks<70){
        console.log(`${myName}, has scored ${myMarks}, and your grade is ${grades[3]}`)
    }
    else if(myMarks>=40 && myMarks<60){
        console.log(`${myName}, has scored ${myMarks}, and your grade is ${grades[4]}`)
    }
    else if(myMarks>=0 && myMarks<=40){
        console.log(`${myName}, has scored ${myMarks}, and your grade is ${grades[5]}`)
    }
    else{
        console.log("marks cannot be greater than 100, enter valid marks")
    }
}

gradeSystem();