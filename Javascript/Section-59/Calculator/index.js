let input = document.querySelector("input")

function addValue(elementVal){
    input.value += elementVal
}
function clearVal(){
    input.value = ""
}
function deleteCharacter(){
    input.value = input.value.slice(0, input.value.length-1)
}
function evaluateVal(){
    input.value = eval( input.value )
}