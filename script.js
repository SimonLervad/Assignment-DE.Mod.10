import {Question} from "./modules/questions.js";
import {$} from "./modules/id.js";

console.log("script.js")

let questions = ["", ];
let j = 1;
let counter = 0;

var insert = function () {
    for (let i = 1; i < questions.length; i++) {
        console.log(i);
        questions[i].draw();
        $(i).style.display = "none";
    }
    $("1").style.display = "inherit";
}

var initialize = function () {
let question1 = Object.create(Question);
question1.init(1, 1, "Tryk på q", "q", "w", "e", "q");
questions.push(question1);
let question2 = Object.create(Question);
question2.init(2, 2, "Tryk på r", "y", "t", "r", "r");
questions.push(question2);
let question3 = Object.create(Question);
question3.init(3, 3, "Tryk på i", "u", "i", "o", "i");
questions.push(question3);
let question4 = Object.create(Question);
question4.init(4, 4, "Tryk på s", "a", "s", "d", "s");
questions.push(question4);
let question5 = Object.create(Question);
question5.init(5, 5, "Tryk på j", "j", "h", "k", "j");
questions.push(question5);
insert();
start();
}

function count() {
    counter = counter + 1;
    $("total").innerHTML = counter;
}

const check = function(e) {
    console.log(j);
    console.log(e.target.value);
    if (questions[j].correct === e.target.value) {
        $("answer").innerHTML = "Du har svaret rigtig";
        count();
        $(j).style.display = "none";
        j++;
        $(j).style.display = "inherit";
    } else {
        $("answer").innerHTML = "Du har svaret forkert";
        j++;
    }
}

const start = function() {
    document.getElementById('quiz').addEventListener('change', check);
}

console.log(questions);

window.addEventListener('load', initialize);