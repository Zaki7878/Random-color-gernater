// let Number = Math.random()
// let randomNumber = Math.floor(Number*100)
function randomColor(){
    let value1 = Math.floor(Math.random()*255)
    let value2 = Math.floor(Math.random()*255)
    let value3 = Math.floor(Math.random()*255)
    return` rgb(${value1}, ${value2}, ${value3})`

}


setInterval(() => {
    document.getElementsByClassName("main")[0].style.backgroundColor=randomColor();
 
    for(i= 0 ; i<=5; i++){
    document.getElementsByClassName("boxes")[i].style.backgroundColor=randomColor();
    }
}, 1000);



   
