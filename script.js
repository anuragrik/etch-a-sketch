let x=prompt("Enter number of blocks you want");
let heightnewBlock=960/x;
let widthnewBlock=960/x;
let containerMain=document.getElementById("container");
function createBlock(blockNumber){
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
createBlock(x);

let blockListener=document.querySelectorAll(".blocks");
console.log(blockListener);
blockListener.forEach((e)=>{
    e.addEventListener("mouseenter", ()=>{
        e.classList.add("color-changer")
    })
})




