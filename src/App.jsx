import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Square from './square'
import Board from './Board'
import Game from './Game'

function App() {
  return (
    <>
    <h1>Tic Tac Toe</h1>
    <Game/>
    </>
  )
}

export default App
