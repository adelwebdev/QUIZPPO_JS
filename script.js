class Question {
    constructor(text, chioces, answer){
        this.text = text;
        this.chioces = chioces;
        this.answer = answer;
    }
    isCorrectAnswer(chioce){
        return this.answer === chioce;
    }
}
let questions = [
    new Question("Quelle méthode Javascript permet de filtrer les éléments d'un tableau", ["indexOf()", "map()", "filter()", "reduce()"], "filter()"),
    new Question("Quelle méthode Javascript permet de vérifier si un élément figure dans un tableau", ["isNaN()","includes()", "findIndex()", "isOdd()"], "includes()"),
    new Question("Quelle méthode transforme du JSON en un objet Javascript ?", ["JSON.parse()","JSON.stringify()", "JSON.object()", "JSON.toJS"], "JSON.parse()"),
    new Question("Quel objet Javascript permet d'arrondir à l'entier le plus proche", ["Math.ceil()","Math.floor()", "Math.round()", "Math.random()"], "Math.round()")
  ];

  console.log(questions); 

  class Quiz{
      constructor(questions){
          this.score = 0;
          this.questions = questions;
          this.currentQuestionIndex = 0;
      }
      getCurrentQuestion(){
          return this.questions[this.currentQuestionIndex];
      }
      guess(answer){
          if (this.getCurrentQuestion().isCorrectAnswer(answer)){
              this.score++;
          } 
          this.currentQuestionIndex++;
      }  
      hasEnded(){
          return this.currentQuestionIndex >= this.questions.lenght;
      }
  }


  // regroup all function relative 
  const display = {
      elementShown: function(id, text){
           let element = document.getElementById(id);
           element.innerHTML = text;
      },
      endQuiz: function(){
          let endQuizHTML = `
          <h1>Quiz termine!</h1>
          <h3>Votre score est de : ${quiz.score}/ ${quiz.questions.lenght}</h3>
          `;
          this.elementShown("question", endQuizHTML)
      },
      question: function(){
          this.elementShown("question", quiz.getCurrentQuestion().text)
      }
  }


  // game logic
  quizApp = () => {
      if (quiz.hasEnded()){
          display.endQuiz();
      } else{
          display.question(); 
          //logic
          //questiom
          //choice
      }
  }



  //create quiz
  let quiz = new Quiz(questions);
  quizApp();
  console.log(quiz);