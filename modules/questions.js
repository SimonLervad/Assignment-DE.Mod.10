import {$} from "./id.js";

let Question = {
    init(id, number, question, answer1, answer2, answer3, correct) {
        this.id = id;
        this.number = number;
        this.question = question;
        this.optionOne = answer1;
        this.optionTwo = answer2;
        this.optionThree = answer3;
        this.correct = correct;
    },

    draw() {
        let form = $("quiz");

        let list = document.createElement("FORM");
        list.setAttribute("id", this.id)


        let para = document.createElement("P");
        para.innerHTML = this.question;
        list.appendChild(para);

        let answerOne = document.createElement("LABEL");
        answerOne.innerHTML = this.optionOne;

        let answerTwo = document.createElement("LABEL");
        answerTwo.innerHTML = this.optionTwo;

        let answerThree = document.createElement("LABEL");
        answerThree.innerHTML = this.optionThree; 

        let opt1 = document.createElement("INPUT");
        opt1.setAttribute("type", "radio");
        opt1.setAttribute("name", this.number);
        opt1.setAttribute("value", this.optionOne);
        list.appendChild(answerOne);
        list.appendChild(opt1);
        
        let opt2 = document.createElement("INPUT");
        opt2.setAttribute("type", "radio");
        opt2.setAttribute("name", this.number);
        opt2.setAttribute("value", this.optionTwo);
        list.appendChild(answerTwo);
        list.appendChild(opt2);

        let opt3 = document.createElement("INPUT");
        opt3.setAttribute("type", "radio");
        opt3.setAttribute("name", this.number);
        opt3.setAttribute("value", this.optionThree);
        list.appendChild(answerThree);
        list.appendChild(opt3);

        form.appendChild(list);
    }
};
console.log("questions.js");
export {Question};