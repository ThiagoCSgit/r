import { useState } from 'react';
import { CharacterSides } from '../types/CharacterSides';
import { mapSpots } from '../data/mapSpots';

export default function useCharacter(){
    const [pos, setPos] = useState({x: 3, y: 5});
    const [side, setSide] = useState<CharacterSides>('down')
    
    function moveLeft(){
        setPos(pos => ({
            x: canMove(pos.x - 1, pos.y) ? pos.x - 1 : pos.x,
            y: pos.y
        }))

        setSide('left')
    }
    
    function moveRight(){
        setPos(pos => ({
        x: canMove(pos.x + 1, pos.y) ? pos.x + 1 : pos.x,
        y: pos.y
        }))
        setSide('right')
    }
    
    function moveDown(){
        setPos(pos => ({
            x: pos.x,
            y: canMove(pos.x, pos.y + 1) ? pos.y + 1 : pos.y
        }))
        setSide('down')
    }
    
    function moveUp(){
        setPos(pos => ({
            x: pos.x,
            y: canMove(pos.x, pos.y - 1) ? pos.y - 1 : pos.y
        }))
        setSide('up')
    }

    function canMove(x: number, y: number){
        if(mapSpots[y] !== undefined && mapSpots[x] !== undefined){
            return mapSpots[y][x] === 1
        }
        return false
    }
    
    return {
        x: pos.x,
        y: pos.y,
        moveLeft,
        moveRight,
        moveDown,
        moveUp,
        side
    }
}