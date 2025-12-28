document.querySelector(".control-buttons span").addEventListener('click', () => {

  let yourName = prompt("What's your name?")

  if (yourName == null || yourName == "") {
    document.querySelector(".name span").innerHTML = "Unknown"
  } else {
    document.querySelector(".name span").innerHTML = yourName;
  }
  document.querySelector(".control-buttons").remove()
})

let duration = 1000;

let blockContainer = document.querySelector(".memory-game-blocks");

let blocks = Array.from(blockContainer.children)

let orderRange = [...Array(blocks.length).keys()]
console.log(orderRange);
console.log(shuffle(orderRange));


// Add order Css property

blocks.forEach((block ,index)=> {
  
  
  block.style.order = orderRange[index]

  block.addEventListener('click',()=>{

    flipBlock(block)
  })
})

function flipBlock(selectedBlock){
  selectedBlock.classList.add('is-flipped')

  let allFillpedBlocks = blocks.filter(fillpedBlock=>fillpedBlock.classList.contains('is-flipped'))

  if(allFillpedBlocks.length === 2){
    
    
    

  }

}

function shuffle(array){

  let current = array.length,
    temp,
    radom;

    while(current>0){
      radom = Math.floor(Math.random() * current) // radom = 6

      current--;//19

      temp = array[current] // temp = 19

      current = array[radom] // current = 6 

      array[radom] = temp // radom =6

    }
      return array

}