document.querySelector(".control-buttons span").addEventListener('click', () => {

  let yourName = prompt("What's your name?")

  if (yourName == null || yourName == "") {
    document.querySelector(".name span").innerHTML = "Unknown"
  } else {
    document.querySelector(".name span").innerHTML = yourName;
  }
  document.querySelector(".control-buttons").remove()

  setTimeout(() => {
    blocks.forEach(block => block.classList.add('is-flipped'));
    
    setTimeout(() => {
      blocks.forEach(block => block.classList.remove('is-flipped'));
  
      
      blocks.forEach(block => {
        block.addEventListener('click', () => flipBlock(block));
      });
  
    }, 2000);
  }, 0);
})

let successSound = document.getElementById("success-sound");
let failSound = document.getElementById("fail-sound");


let duration = 1000;

let blockContainer = document.querySelector(".memory-game-blocks");

let blocks = Array.from(blockContainer.children)

let orderRange = [...Array(blocks.length).keys()]


orderRange = shuffle(orderRange)



// Add order Css property

blocks.forEach((block ,index)=> {
  
  
  block.style.order = orderRange[index]

  
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


function checkMatchedBlocks(firstBlock, secondBlock){

  let tries = document.querySelector(".tries span");

  if (firstBlock.dataset.technology === secondBlock.dataset.technology) {

    setTimeout(() => {
      
      firstBlock.style.visibility = "hidden";
    secondBlock.style.visibility = "hidden";


    firstBlock.classList.remove('is-flipped')
    secondBlock.classList.remove('is-flipped')

    firstBlock.classList.add('has-match');
    secondBlock.classList.add('has-match');

    successSound.play()

    }, duration);


    

  } else {
    tries.innerHTML = parseInt(tries.innerHTML) + 1;

    setTimeout(() => {
      firstBlock.classList.remove('is-flipped');
      secondBlock.classList.remove('is-flipped');

      failSound.play()

      
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