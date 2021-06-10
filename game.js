import {update as updateSnake, draw as drawSnake, snake_speed , getSnakeHead, snakeIntersection} from './snake.js'

import{ update as updateFood , draw as drawFood } from './food.js'
import {outsideGrid} from './grid.js'
let lastRenderTime = 0
let gameover =false
const gameBoard = document.getElementById('game-board')

function main(currentTime){
    if (gameover){
        if(confirm('you lost!! press ok to restart')){
            window.location='/'
        }
        return 
    }
    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime-lastRenderTime)/1000
    if(secondsSinceLastRender < 1/snake_speed) return
   

    lastRenderTime=currentTime

    update()
    draw()
}
window.requestAnimationFrame(main)

function update(){
    updateSnake()
    updateFood()
    checkDeath()
}

function draw(){
    gameBoard.innerHTML=''
    drawSnake(gameBoard)
    drawFood(gameBoard)
}

function checkDeath(){
    gameover= outsideGrid(getSnakeHead()) || snakeIntersection()
}