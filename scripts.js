// let accordion = document.getElementsByClassName('accordion')
// let i

// for (i = 0; i < accordion.length; i++) {
//     accordion[i].addEventListener("click", function () {
//         this.classList.toggle("active")

//         let answer = this.nextElementSibling
//         if (answer.style.display === "block") {
//             answer.style.display = "none"
//         } else {
//             answer.style.display = "block"
//         }
//     })
// }

const accordion1 = document.querySelector('.accordion1')
const accordion2 = document.querySelector('.accordion2') 
const accordion3 = document.querySelector('.accordion3') 
const accordion4 = document.querySelector('.accordion4')
const accordion5 = document.querySelector('.accordion5')

const qaItem = document.querySelectorAll('.question')

const answer1 = document.querySelector('.answer1')
const answer2 = document.querySelector('.answer2')
const answer3 = document.querySelector('.answer3')
const answer4 = document.querySelector('.answer4')
const answer5 = document.querySelector('.answer5')

const icon = document.querySelector('.arrow')

let questions = [accordion1, accordion2, accordion3, accordion4, accordion5]
let answers = [answer1, answer2, answer3, answer4, answer5]

answers.forEach(element => {
   element.style.display = 'none'
});

qaItem.forEach( (element, i) => {
    element.addEventListener('click', (e) => { 
     if (answers[i].style.display == 'none') {
        answers.forEach(element => {
           element.style.display = 'none'
        })
        questions.forEach(element => {
           element.childNodes[1].childNodes[0].style.transform = ''
           element.style.fontWeight = '400'
        })

        answers[i].style.display = 'block'
        questions[i].childNodes[1].childNodes[0].style.transform = 'rotate(180deg)'
        questions[i].style.fontWeight = '700'
     }
     else {
        answers[i].style.display = 'none'
        questions[i].childNodes[1].childNodes[0].style.transform = ''
        questions[i].style.fontWeight = '400'

     }    
    })  
});
