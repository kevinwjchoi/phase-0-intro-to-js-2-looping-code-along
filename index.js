
function writeCards(names, eventName){
    const newMessages = [];
    for (let i = 0; i < names.length; i++){
        newMessages.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
    }
    return newMessages;
    
}

function countDown(number){
    for (let i = number; i >= 0; i--){
        console.log(i);
    }
     
} 