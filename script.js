let doorImage1=document.getElementById('door1')
let doorImage2=document.getElementById('door2')
let doorImage3=document.getElementById('door3')
const botDoorPath='https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg'
const beachDoorPath='https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg'
const spaceDoorPath='https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg'
const cloedDoorPath="https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg"
let numCloesdDoors=3;
let openDoor1,openDoor2,openDoor3
let currentlyPlaying=true;
let score=0
let highScore=0
let currentStreak = document.getElementById('score-number');
let bestStreak = document.getElementById('high-score-number');
currentStreak.innerHTML = score;
bestStreak.innerHTML = highScore;
doorImage1.onclick=()=>{
    if(currentlyPlaying===true && !isClicked(doorImage1)){
        doorImage1.src=openDoor1
        playDoor(doorImage1)
    }
}
doorImage2.onclick=()=>{
    if(currentlyPlaying===true && !isClicked(doorImage2)){
        doorImage2.src=openDoor2
        playDoor(doorImage2)
    }
}
doorImage3.onclick=()=>{
    if(currentlyPlaying===true && !isClicked(doorImage3)){
        doorImage3.src=openDoor3
        playDoor(doorImage3)
    }
}
const startButton=document.getElementById('start')
startButton.onclick=()=>startRound()
const startRound=()=>{
    if(!currentlyPlaying){
        numCloesdDoors=3    
        doorImage1.src=cloedDoorPath
        doorImage2.src=cloedDoorPath
        doorImage3.src=cloedDoorPath
        startButton.innerHTML='Good luck!'
        currentlyPlaying=true
        randomChoreDoorGenerator()
    }
}
const gameOver=(status)=>{
    if(status==='win'){
        startButton.innerHTML='You Win! Play again?'
        getYourScore()
    }
    else{
        startButton.innerHTML="Game over! Play again?"
        score=0
        currentStreak.innerHTML=score
    }
    currentlyPlaying=false    
}
const randomChoreDoorGenerator=()=>{
    const choreDoor = Math.floor(Math.random() * 6);
    switch (choreDoor) {
        case 0:
          openDoor1 = botDoorPath;
          openDoor2 = beachDoorPath;
          openDoor3 = spaceDoorPath;
          break;
        case 1:
          openDoor1 = botDoorPath;
          openDoor2 = spaceDoorPath;
          openDoor3 = beachDoorPath;
          break;
        case 2:
          openDoor2 = botDoorPath;
          openDoor1 = beachDoorPath;
          openDoor3 = spaceDoorPath;
          break;
        case 3:
          openDoor2 = botDoorPath;
          openDoor1 = spaceDoorPath;
          openDoor3 = beachDoorPath;
          break;
        case 4:
          openDoor3 = botDoorPath;
          openDoor1 = beachDoorPath;
          openDoor2 = spaceDoorPath;
          break;
        case 5:
          openDoor3 = botDoorPath;
          openDoor1 = spaceDoorPath;
          openDoor2 = beachDoorPath;
          break;
      }}
const isBot=door=>{
    if(door.src===botDoorPath){
        return true
    }else return false
}
const isClicked=(door)=>{
    if(door.src===cloedDoorPath)
        return false
    else return true
}
const playDoor=door=>{
  numCloesdDoors--
  if (numCloesdDoors===0)
    gameOver('win')
  else if(isBot(door)){
    gameOver()
  }  
}
const getYourScore = () => {
    score++;
    currentStreak.innerHTML = score;
    if (score > highScore) {
      highScore = score;
      bestStreak.innerHTML = highScore;
    }
  }
startRound()