/* Still have to solve the user input problem */
let lenEl = document.getElementById("length-el");
const len=lenEl.value;
let title =document.getElementById("title-el")
let arr=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","W","X","Y","Z",0,1,2,3,4,5,6,7,8,9,"@","#","$","%","^","&","*","(",")","!"]
let firstEl = document.getElementById("first-el")
let secondEl = document.getElementById("second-el")
let thirdEl = document.getElementById("third-el")
let fourthEl = document.getElementById("fourth-el")
let pass=""

function pwdGen(){
    let pass=""
    if (Number.isInteger(len) && (len>=1 && len<=13)){
        for (let i=0;i<len;i++){
            pass += arr[getRandom()]  
        }
        return pass 
    }else{
        title.textContent="Check your Input. Input needs to be an integer between 1 and 12"
        title.style.color="red";
    }
}
function getRandom(){
    return Math.floor(Math.random()*70)+1
}

function generatePswd(){
    firstEl.textContent=pwdGen()
    secondEl.textContent=pwdGen()
    thirdEl.textContent=pwdGen()
    fourthEl.textContent=pwdGen()
}
