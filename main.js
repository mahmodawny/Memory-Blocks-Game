document.querySelector(".control-buttons span").addEventListener('click',()=>{

  let yourName = prompt("What's your name?")

  if(yourName == null || yourName==""){
    document.querySelector(".name span").innerHTML ="Unknown"
  }else{
    document.querySelector(".name span").innerHTML = yourName;
  }
  document.querySelector(".control-buttons").remove()
})

let duration = 1000;

let blockContainer = document.querySelector(".memory-game-blocks");

let blocks = Array.from(blockContainer.children)

let orderRange = [...Array(blocks.length).keys()]

