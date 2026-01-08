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

orderRange = shuffle(orderRange)


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
    
    // Stop Clicking 
    stopClicking();
    
    // check Matched Blocks
    checkMatchedBlocks(allFillpedBlocks[0],allFillpedBlocks[1])

  }

}

// Stop Clicking 
function stopClicking(){

  blockContainer.classList.add('no-clicking')

  setTimeout(() => {
    
    blockContainer.classList.remove('no-clicking')

  }, duration);


}


function checkMatchedBlocks(fristBlock , secoundBlock){

  let tries = document.querySelector(".tries span");

  if(fristBlock.dataset.technology == secoundBlock.dataset.technology)
{
  fristBlock.classList.remove('is-flipped')
  secoundBlock.classList.remove('is-flipped')


  fristBlock.classList.add('has-match')
  secoundBlock.classList.add('has-match')


} else{

  tries.innerHTML = parseInt(tries.innerHTML)+1;

  setTimeout(() => {

    fristBlock.classList.remove('is-flipped')
  secoundBlock.classList.remove('is-flipped') 
   
  }, duration);
  
  


}
  

}

function shuffle(array){

  let current = array.length,
    temp,
    random;

    while(current>0){
      random = Math.floor(Math.random() * current) // random = 6

      current--;//19

      temp = array[current] // temp = 19

      array[current] = array[random] // current = 6 

      array[random] = temp // random =6

    }
      return array

}