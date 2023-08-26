//generate random number
function randomNumber(){
    return Math.floor(Math.random() * 5);
}

//create messages

let messages = [
    'You are a super star.',
    'Keep going.',
    'you can do it.',
    'You are worth.',
    'Know your respect.'
]

//random Message generator
function messageGenerator(listMessage){
    return listMessage[randomNumber()].toUpperCase();
}

console.log(messageGenerator(messages));