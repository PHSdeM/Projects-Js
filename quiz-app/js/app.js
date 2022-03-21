var answers = {}
var tamanho = document.getElementsByClassName('question').length

var messageError = document.getElementById('message-error')

var question_one = document.getElementById('question-1')
var question_two = document.getElementById('question-2')
var question_three = document.getElementById('question-3')
var question_four = document.getElementById('question-4')
var question_five = document.getElementById('question-5')

function storeAnswer(question_number, event){
    if(event.target.type === 'radio'){
        answers['question'+question_number] = parseInt(event.target.value)
    }
}

question_one.addEventListener('click', function(event){
    storeAnswer(1, event)
})
question_two.addEventListener('click', function(event){
    storeAnswer(2, event)
})
question_three.addEventListener('click', function(event){
    storeAnswer(3, event)
})
question_four.addEventListener('click', function(event){
    storeAnswer(4, event)
})
question_five.addEventListener('click', function(event){
    storeAnswer(5, event)
})
function totalScore(){
   var total_score = answers.question1+
    answers.question2+
    answers.question3+
    answers.question4+ 
    answers.question5

    return total_score || 0
}


function getInfoBasedOnScore(){
    if(totalScore() < 3 ){
        var score_info = "You need to get better!"
    } else if(totalScore() > 3){
        var score_info = "Congratulations!!!!!!!!!!!"
    }else{
        var score_info = 'Practice more!!!!!!'
    }
    return score_info
}

var submit1 = document.getElementById('submit1')
var submit2 = document.getElementById('submit2')
var submit3 = document.getElementById('submit3')
var submit4 = document.getElementById('submit4')
var submit5 = document.getElementById('submit5')

function nextQuestion(question_number){
    var current_question_number = question_number - 1
    var question_number = question_number.toString()
    var current_question_number = current_question_number.toString()

    var el = document.getElementById('question-'+question_number)
    var el2 = document.getElementById('question-'+current_question_number)

    el.style.display = "block"
    el2.style.display = "none"

}

submit1.addEventListener('click', function(){
    if((document.querySelectorAll('input[class="question-1"]:checked').length === 0)){
        messageError.innerHTML = `<li> Por favor, selecione uma opcao</li>`
        messageError.style.display = 'block'
    }else{
        nextQuestion(2)
        growProgressBar('40%')
        if(answers.question1 === 1){
            document.getElementById('quest-1').innerHTML = 'correct'
            var el = document.getElementById('quest-1')
            el.style.color = 'green'
        }else{
            document.getElementById('quest-1').innerHTML = 'incorrect'
            var el = document.getElementById('quest-1')
            el.style.color = 'red'
        }
        messageError.style.display = 'none'
    }
})
submit2.addEventListener('click', function(){
    if((document.querySelectorAll('input[class="question-2"]:checked').length === 0)){
        messageError.innerHTML = `<li> Por favor, selecione uma opcao</li>`
        messageError.style.display = 'block'
    }else{
        nextQuestion(3)
        growProgressBar('60%')
        if(answers.question2 === 1){
            document.getElementById('quest-2').innerHTML = 'correct'
            var el = document.getElementById('quest-2')
            el.style.color = 'green'
        }else{
            document.getElementById('quest-2').innerHTML = 'incorrect'
            var el = document.getElementById('quest-2')
            el.style.color = 'red'
        }
        messageError.style.display = 'none'
    }
})
submit3.addEventListener('click', function(){
    messageError.style.display = 'none'
    if((document.querySelectorAll('input[class="question-3"]:checked').length === 0)){
        messageError.innerHTML = `<li> Por favor, selecione uma opcao</li>`
        messageError.style.display = 'block'
    }else {
        nextQuestion(4)
        growProgressBar('80%')
        if(answers.question3 === 1){
            document.getElementById('quest-3').innerHTML = 'correct'
            var el = document.getElementById('quest-3')
            el.style.color = 'green'
        }else{
            document.getElementById('quest-3').innerHTML = 'incorrect'
            var el = document.getElementById('quest-3')
            el.style.color = 'red'
        }
        messageError.style.display = 'none'
    }
})
submit4.addEventListener('click', function(){
    messageError.style.display = 'none'
    if((document.querySelectorAll('input[class="question-4"]:checked').length === 0)){
        messageError.innerHTML = `<li> Por favor, selecione uma opcao</li>`
        messageError.style.display = 'block'
    }else{
        nextQuestion(5)
        growProgressBar('90%')
        if(answers.question4 === 1){
            document.getElementById('quest-4').innerHTML = 'correct'
            var el = document.getElementById('quest-4')
            el.style.color = 'green'
        }else{
            document.getElementById('quest-4').innerHTML = 'incorrect'
            var el = document.getElementById('quest-4')
            el.style.color = 'red'
        }
        messageError.style.display = 'none'
    }
})
submit5.addEventListener('click', function(){
    messageError.style.display = 'none'
    if((document.querySelectorAll('input[class="question-5"]:checked').length === 0)){
        messageError.innerHTML = `<li> Por favor, selecione uma opcao</li>`
        messageError.style.display = 'block'
    }else{
        nextQuestion(6);
        growProgressBar('100%');
        if(answers.question5 === 1){
            document.getElementById('quest-5').innerHTML = 'correct'
            var el = document.getElementById('quest-5')
            el.style.color = 'green'
        }else{
            document.getElementById('quest-5').innerHTML = 'incorrect'
            var el = document.getElementById('quest-5')
            el.style.color = 'red'
        }
        messageError.style.display = 'none'
    }
})
submit5.addEventListener('click', function(){
    document.getElementById('printtotalscore').innerHTML = (totalScore() + "/" + tamanho);
    document.getElementById('printscoreinfo').innerHTML = getInfoBasedOnScore();
})


function growProgressBar(percentage_width){
    var bar = document.getElementById('progress_bar')
    bar.style.width = percentage_width
}
