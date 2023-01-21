
let boxContainer=document.getElementById("box-container")
let slidVal=document.getElementById("slider-val")
let slider= document.getElementById("slider")
let bigBox
let eraser= document.getElementById("eraser")
let clearer= document.getElementById("clearer")
let bgcolor= "#FFFFFF";
let count=16
let colorChosen=document.getElementById("color-chose")
let colorChose=document.getElementById("choser")

slider.value=16
slidVal.innerText=slider.value
colorChosen.value="#000000"
displayGrid(count, bgcolor)


slider.oninput=function(){
    slidVal.innerText=slider.value
}
colorChose.addEventListener("click", function(){
    bgcolor=colorChosen.value
    listen(bgcolor)
})
multiChose=document.getElementById("multi")
multiChose.addEventListener("click", function(){
    multiColorListen()
})
eraser.addEventListener("click", function(){
    bgcolor="#FFFFFF"
    listen(bgcolor)
})
clearer.addEventListener("click", function(){
    cleanGrid()
})
function cleanGrid(){
    bigBox= document.querySelectorAll(".boxes")
    bigBox.forEach((e)=>{
        e.style.background= "#FFFFFF";
    })
}


slider.addEventListener("click", function(){
    boxContainer.innerHTML=""
    count=parseInt(slider.value)
    displayGrid(count, bgcolor)
})


function listen(bgcolor){
    bigBox= document.querySelectorAll(".boxes")
    bigBox.forEach((e)=>{
        e.addEventListener("mouseenter", function(){
            e.style.background= bgcolor;
        })
    })
}
function multiColorListen(){
    bigBox= document.querySelectorAll(".boxes")
    bigBox.forEach((e)=>{
        e.addEventListener("mouseenter", function(){
            e.style.background= pxColor();
        })
    })
}
function pxColor(){
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    bgcolor= "#"+randomColor
    return bgcolor
}


function ParseFloat(str,val) {
    str = str.toString();
    str = str.slice(0, (str.indexOf(".")) + val + 1);
    return Number(str);  
}
function displayGrid(c, color){
    let dimensions=490/c
    for(let i=1;i<=c*c;i++){
        boxContainer.innerHTML+=`
            <div class="boxes" style="
            display: flex;
            box-sizing: border-box; 
            height:${ParseFloat(dimensions, 2)}px; 
            width:${ParseFloat(dimensions, 2)}px; 
            flex-basis:${ParseFloat(dimensions, 2)}px; 
            background-color: white;
            "></div>
        `
    }
}