import * as PIXI from 'pixi.js'
import fishImage from "./images/fish.png"
import bubbleImage from "./images/bubble.png"
import waterImage from "./images/water.jpg"
import sharkImage from "./images/shark.png"
import {Fish} from './fish'
import {Shark} from './shark'

export class Game {
    // // STAP 1 - maak een pixi canvas
    pixi: PIXI.Application
    fishes: Fish[] = [];
    background: PIXI.Sprite
    loader

    constructor(){
        console.log("game created")
        this.pixi = new PIXI.Application({ width: 800, height: 450 })
        document.body.appendChild(this.pixi.view)

        // // STAP 2 - preload alle afbeeldingen
        this.loader = new PIXI.Loader()
        this.loader
            .add('fishTexture', fishImage)
            .add('bubbleTexture', bubbleImage)
            .add('waterTexture', waterImage)
            .add('sharkTexture', sharkImage)
        this.loader.load(() => this.doneLoading())
    }

    doneLoading(){
        // Fishes and bubbles come into the done loading!!!
        console.log("all textures loaded!")
        this.background = new PIXI.Sprite(this.loader.resources["waterTexture"].texture!)
        this.pixi.stage.addChild(this.background)


        for(let i = 0; i<1; i++){
            let fish = new Fish(this.loader.resources['fishTexture'].texture!, this)
            this.fishes.push(fish)
            this.pixi.stage.addChild(fish)
        }

        let shark = new Shark(this.loader.resources['sharktexture'].texture!, this)
        
        
        this.pixi.ticker.add((delta: number) => this.update(delta))
    }

    update(delta: number){
        for(const fish of this.fishes){
            fish.update(delta)
        }
    }
}
new Game()
