
function Question (theQuestion, theAnswer) {
  this.question=theQuestion;
  this.answer=theAnswer;

  }
  function multiChoiceQuestion (theQuestion, theAnswer,theChoices)
  {
    Question.call(this, theQuestion,theAnswer, theChoices);
    this.theChoices=theChoices;
  }
  multiChoiceQuestion.prototype=Object.create(Question.prototype);

  multiChoiceQuestion.prototype.multiChoice=function()
  {
    let li = event.target;
    let answerSpace = li.parentElement.nextElementSibling;
    if (li.textContent === this.theAnswer) {
      answerSpace.textContent = "Correct!";
    } else {
      answerSpace.textContent = "Try Again.";
    }
  }




  this.display = function () {
    let source = document.querySelector('#question').innerHTML;
    let template = Handlebars.compile(source);
    let html = template(this);
    document.querySelector('#quiz').insertAdjacentHTML('beforeend', html);
    document.querySelector('#quiz article:last-of-type ul').addEventListener('click', this.isCorrect.bind(this));
  }
}
let question1 = new Question('The keyword or the property that you use to refer to an object through which they were invoked is ', ['from', 'to', 'this', 'object'], 'this');
let question2 = new Question('The behaviour of the instances present of a class inside a method is defined by', ['Method', 'Classes', 'Interfaces', 'Classes and Interfaces'], 'Classes');
[question1, question2].forEach(question => question.display());
