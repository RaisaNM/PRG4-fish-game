import * as PIXI from 'pixi.js'
import {Game} from './game'

export class Fish extends PIXI.Sprite {
    speed: number = 0
    game: Game

    //how they look like
    constructor(texture: PIXI.Texture, game: Game){
        super(texture)
        this.game = game
        
        this.x = Math.random() * game.pixi.screen.right
        this.y = Math.random() * game.pixi.screen.bottom
        this.tint = Math.random() * 0xFFFFFF
        this.scale.set(-1,1)

        this.interactive = true
        this.on('pointerdown', () => this.onClick());

        //Keyboard
        window.addEventListener("keydown", (e: KeyboardEvent) => this.onKeyDown(e))
        window.addEventListener("keyup", (e: KeyboardEvent) => this.onKeyUp(e))
    }
    
    //als je op de knop niet klikt
    onKeyUp(e: KeyboardEvent): any {
        console.log(e.key)
        if (e.key == "ArrowRight"){
            this.speed = 0
        }

    }

    //als je op een knop klikt
    onKeyDown(e: KeyboardEvent): any {
        console.log(e.key)
        if (e.key == "ArrowRight"){
            this.speed = 5
        }
    }

    onClick(){
        console.log("Click")
        this.game.pixi.stage.removeChild(this)
    }

    //Behaviour
    update(delta: number) {
        this.x += this.speed*delta
        // this.y += Math.sin(this.x * 0.02) * 2

        this.keepInScreen()
    }

    keepInScreen(){
        if (this.getBounds().left > this.game.pixi.screen.right){
            this.x = -this.getBounds().width
        }
    }
}