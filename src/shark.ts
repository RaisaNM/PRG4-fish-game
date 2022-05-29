import * as PIXI from 'pixi.js'
import {Game} from './game'

export class Shark extends PIXI.Sprite{
    game: Game

    constructor(texture: PIXI.Texture, game: Game){
        super(texture)
        this.game = game
        this.x = 300
        this.y = 700
    }

    public update(){
        this.x -= 3
    }
}