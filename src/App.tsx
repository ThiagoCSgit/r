import { useEffect } from 'react'
import * as C from './App.styles'
import Character from './components/Character'
import useCharacter from './hooks/useCharacter'


export default function App(){
  const char = useCharacter()

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
  },[])

  function handleKeyDown(e: KeyboardEvent){
    if(e.code === 'KeyA' || e.code === 'ArrowLeft'){
      char.moveLeft()
    }
    else if(e.code === 'KeyW' || e.code === 'ArrowUp'){
      char.moveUp()
    }
    else if(e.code === 'KeyD' || e.code === 'ArrowRight'){
      char.moveRight()
    }
    else if(e.code === 'KeyS' || e.code === 'ArrowDown'){
      char.moveDown()
    }
  }
  

  return (
    <C.Container>
      <C.Map>
        <Character x={char.x} y={char.y} side={char.side}></Character>
      </C.Map>
    </C.Container>
  )
}