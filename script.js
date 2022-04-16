function createBlock(){
    let containerMain=document.getElementById("container");
    let blockNumber=prompt("Enter number of blocks you want");
    let heightnewBlock=960/blockNumber;
    let widthnewBlock=960/blockNumber;
    for(let i=0;i<blockNumber;i++){
        for(let j=0;j<blockNumber;j++){
            let newBlock=document.createElement("div");
            newBlock.classList.add("blocks")
            containerMain.append(newBlock);
            newBlock.style.height= `${heightnewBlock}px`;
            newBlock.style.width= `${widthnewBlock}px`;
        }
    }
}
function listener(){
    let blockListener=document.querySelectorAll(".blocks");
    console.log(blockListener);
    blockListener.forEach((e)=>{
        e.addEventListener("mouseenter", ()=>{
            e.classList.remove("color-remover");
            e.classList.add("color-changer")
        })
    })
}

createBlock();
listener();


function clearGrid(){
    let gridBlocks=document.getElementById("container");
    while(gridBlocks.firstChild){
        gridBlocks.removeChild(gridBlocks.lastChild);
    }
}

let resetButton=document.querySelector(".reset-button");
resetButton.addEventListener("click", ()=>{
    clearGrid();
    createBlock();
    listener();
})

let resetColor=document.querySelector(".reset-color");
resetColor.addEventListener("click",()=>{
    let colorBlocks=document.querySelectorAll(".color-changer");
    colorBlocks.forEach((e)=>{
        e.classList.add("color-remover");
    })
})

