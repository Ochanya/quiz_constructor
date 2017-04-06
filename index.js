
function Question (theQuestion, theChoices, theAnswer) {
  this.question = theQuestion;
  this.answer = theAnswer;
  this.choices = theChoices;

  this.isCorrect = function (event) {

    let input = event.target;
    let answer = input.parentElement.parentElement.parentElement.nextElementSibling;
    if (input.textContent === this.answer) {
      answer.textContent = "Correct!";
    } else {
      answer.textContent = "Try Again.";
    }
  }

  this.display = function () {
    let source = document.querySelector('#question').innerHTML;
    let template = Handlebars.compile(source);
    let html = template(this);
    document.querySelector('#quiz').insertAdjacentHTML('beforeend', html);
    document.querySelector('#quiz article:last-of-type fieldset').addEventListener('click', this.isCorrect.bind(this));
  }
}
let question1 = new Question('The keyword or the property that you use to refer to an object through which they were invoked is ', ['from', 'to', 'this', 'object'], 'this');
let question2 = new Question('The behaviour of the instances present of a class inside a method is defined by', ['Method', 'Classes', 'Interfaces', 'Classes and Interfaces'], 'Classes');
[question1, question2].forEach(question => question.display());
