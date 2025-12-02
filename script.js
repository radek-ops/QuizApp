let questions = [{
    "question": "Welche CSS-Eigenschaft ändert die Hintergrundfarbe eines Elements?",
    "answer_1": "color",
    "answer_2": "text-color",
    "answer_3": "background-color",
    "answer_4": "bgcolor",
    "correct_answer": "answer_3"
},
{
    "question": "Welches Schlüsselwort deklariert eine veränderbare Variable in JavaScript (außer 'var')?",
    "answer_1": "const",
    "answer_2": "let",
    "answer_3": "varies",
    "answer_4": "integer",
    "correct_answer": "answer_2"
},
{

    "question": "Welches Element definiert eine nummerierte Liste?",
    "answer_1": "<ul>",
    "answer_2": "<list>",
    "answer_3": "<nl>",
    "answer_4": "<ol>",
    "correct_answer": "answer_4"
},
{

    "question": "Mit welchem Zeichen wählt man in CSS eine Klasse aus?",
    "answer_1": "#",
    "answer_2": ".",
    "answer_3": "*",
    "answer_4": ":",
    "correct_answer": "answer_2"
},
{

    "question": "Wie schreibt man einen Kommentar in einer einzigen Zeile in JavaScript?",
    "answer_1": "<!-- Kommentar -->",
    "answer_2": "// Kommentar",
    "answer_3": "/* Kommentar */",
    "answer_4": "# Kommentar",
    "correct_answer": "answer_2"
},
{

    "question": "Welcher Tag wird verwendet, um das größte Überschrift-Element zu definieren?",
    "answer_1": "<h1>",
    "answer_2": "<h6>",
    "answer_3": "<head>",
    "answer_4": "<big>",
    "correct_answer": "answer_1"
},
{
    "question": "Welche Einheit ist eine feste, absolute Längeneinheit?",
    "answer_1": "em",
    "answer_2": "vw",
    "answer_3": "%",
    "answer_4": "px",
    "correct_answer": "answer_4"
},
{
    "question": "Welche Methode wird verwendet, um eine Meldung in der Browser-Konsole auszugeben?",
    "answer_1": "window.print()",
    "answer_2": "console.log()",
    "answer_3": "alert()",
    "answer_4": "document.write()",
    "correct_answer": "answer_2"
},
{
    "question": "Welcher Bereich eines HTML-Dokuments enthält Metadaten wie den Titel der Seite?",
    "answer_1": "<body>",
    "answer_2": "<footer>",
    "answer_3": "<header>",
    "answer_4": "<head>",
    "correct_answer": "answer_4"

}];


let currentQuestions = 0;
let numberOfQuestions = document.getElementById('questionNumber');


function init() {
    let allQuestions = document.getElementById('allQuestions');
    allQuestions.innerHTML = '';
    allQuestions.innerHTML = questions.length;
    showQuestions();
}


function showQuestions() {

    if (currentQuestions >= questions.length) {

        document.getElementById('mainScreen').style = 'display:none';
        document.getElementById('endScreen').style = '';
        document.getElementById('sum').style = '';
        document.getElementById('playAgin').style = '';

    } else {

        let question = questions[currentQuestions]; // = let question  = questions[0];
        let nextQuestion = document.getElementById('question');
        nextQuestion.innerHTML = question.question;  //  oder question.['question']
        answer();
    }
}


function answer() {
    document.getElementById('questionNumber').innerHTML = currentQuestions + 1;
    let question = questions[currentQuestions];
    let answer1 = document.getElementById('answer_1');
    answer1.textContent = question.answer_1;
    let answer2 = document.getElementById('answer_2');
    answer2.textContent = question.answer_2;
    let answer3 = document.getElementById('answer_3');
    answer3.textContent = question.answer_3;
    let answer4 = document.getElementById('answer_4');
    answer4.textContent = question.answer_4;
    document.getElementById('next-button').disabled = true;
}


function selectAnswer(selection) {

    let question = questions[currentQuestions]; // = let question  = questions[0];
    let correctAnswer = question.correct_answer;


    if (selection == correctAnswer) {
        let newClass = document.getElementById(selection);
        newClass.parentNode.classList.add('bg-success');
        document.getElementById('next-button').disabled = false;


    } else {
        let newClass = document.getElementById(selection);
        newClass.parentNode.classList.add('bg-danger');  //.parentNode =  ein übergeordnetes <div> ansprechen für die hintergrundfarbe
        newClass = document.getElementById(correctAnswer); //oder so =   document.getElementById(correctAnswer).prantNode.classList.add('bg-success);
        newClass.parentNode.classList.add('bg-success');
        document.getElementById('next-button').disabled = false;
    }
}


function newCard() {
    currentQuestions++; // Veriable wird  von null um eins erhöht
    showQuestions();
    document.getElementById('next-button').disabled = true;
    restAllAnswer();
}


function restAllAnswer() {
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger', 'bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger', 'bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger', 'bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger', 'bg-success');
}


function numberOfQuestion() {
    numberOfQuestions.innerHTML++; // erhöhe den wert um  eins von id="questionNumber

}

