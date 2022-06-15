let unit = document.getElementById("unit")
let len = document.getElementById("len")
let vol = document.getElementById("vol")
let weight = document.getElementById("weight")

unit.innerText = 6

function lenConv(){
  x=(unit.innerText*3.28084).toFixed(3)
  y=(unit.innerText*(1/3.28084)).toFixed(3)
  len.innerText = unit.innerText +" meters = "+x+" feet | " + unit.innerText + " feet = " + y +" meters."
}
lenConv()

function volConv(){
  x=(unit.innerText*0.264172).toFixed(3)
  y=(unit.innerText*(1/0.264172)).toFixed(3)
  vol.innerText = unit.innerText +" litres = "+x+" gallons | " + unit.innerText + " gallons = " + y +" litres."
}
volConv()

function weightConv(){
  x=(unit.innerText*2.20462).toFixed(3)
  y=(unit.innerText*(1/2.20462)).toFixed(3)
  weight.innerText = unit.innerText +" Kilograms = "+x+" pounds | " + unit.innerText + " pounds = " + y +" Kilograms."
}
weightConv()