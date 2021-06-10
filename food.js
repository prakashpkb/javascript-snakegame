
import {onSnake, expandSnake} from './snake.js'
import { randomGridPosition } from './grid.js'
let food=getrandomFoodPosition()
const expansion_rate=1
export function update(){
   if(onSnake(food)){
       expandSnake(expansion_rate)
       food=getrandomFoodPosition()
   }
}
export function draw(gameBoard){
   
        const foodElement = document.createElement('div')
        foodElement.style.gridRowStart = food.y
        foodElement.style.gridColumnStart = food.x
        foodElement.classList.add('food')
        gameBoard.appendChild(foodElement)
    }
function getrandomFoodPosition(){
    let newFoodPosition
    while(newFoodPosition == null || onSnake(newFoodPosition)){
        newFoodPosition= randomGridPosition()
    }
    return newFoodPosition
}
