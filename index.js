const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordLength = 15
let generateButton = document.getElementById("gen-btn")
let firstPass = document.getElementById("first-pass")
let secondPass = document.getElementById("second-pass")
let generatedPasswordOne = []
let generatedPasswordTwo = []


function getRandomChar(){
    for (let i = 0; i < passwordLength; i++){
        
    let randomChar1 = Math.floor( Math.random() * characters.length )
    generatedPasswordOne += characters[randomChar1]
    firstPass.textContent = generatedPasswordOne
    
    let randomChar2 = Math.floor( Math.random() * characters.length )
    generatedPasswordTwo += characters[randomChar2]
    secondPass.textContent = generatedPasswordTwo
    
    }
}

function generatePassword(){
    generatedPasswordOne = []
    generatedPasswordTwo = []
    getRandomChar()
}