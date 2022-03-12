let countEl = document.getElementById("count-el")
let finalCnt = document.getElementById("final-cnt")
let count =0

function incrmnt(){
  count += 1
  countEl.innerText=count
}

function save(){
  let counter = count + " - "
  count = 0
  finalCnt.textContent += counter
  countEl.textContent = 0
}