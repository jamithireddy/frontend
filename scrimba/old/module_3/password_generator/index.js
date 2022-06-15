const titleEl=document.getElementById("title-el")
const lenEl=document.getElementById("pwd-len")
const generatePswd =document.getElementById("generate-pwd")
const firstEl=document.getElementById("first-el")
const secondEl=document.getElementById("second-el")
const thirdEl=document.getElementById("third-el")
const fourthEl=document.getElementById("fourth-el")
let pw=[]
arr=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",1,2,3,4,5,6,7,8,9,0,"!","@","#","$","%","^","&","*","(",")"]

generatePswd.addEventListener("click",genPswd)
function randNum(){
    return Math.floor(Math.random()*71)+1
}
 
function genPswd(){
    if (Number.isInteger(parseInt(lenEl.value)) && (parseInt(lenEl.value) >=1 && parseInt(lenEl.value)<=13)){
        for (let i=0;i<4;i++){
            let pass=""
            for(let j=0;j<parseInt(lenEl.value);j++){
                pass+=arr[randNum()]
            }
            pw.push(pass)
        }
    firstEl.textContent=pw[0]
    secondEl.textContent=pw[1]
    thirdEl.textContent=pw[2]
    fourthEl.textContent=pw[3]  
    }else{
        titleEl.textContent="Enter a Integer value between 1 and 13"
        titleEl.style.color="red";
    }
}





