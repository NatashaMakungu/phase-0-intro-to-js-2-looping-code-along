const names = ["Charlie", "Samip", "Ali"];
const eventName = ["birthday"];

function writeCards(names, eventName) {
    let messages = []; 
    for (let i = 0; i < names.length; i++) {
      
      let message = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`;
      messages.push(message); 
      debugger;
    }
    return messages; 
}
  // Example usage:
  console.log(writeCards(["Charlie", "Samip", "Ali"], "birthday"));

function countDown(num) {
    while (num >= 0) {
        console.log(num);
        num--;
    }
}


  

    
  
  
  
  
  