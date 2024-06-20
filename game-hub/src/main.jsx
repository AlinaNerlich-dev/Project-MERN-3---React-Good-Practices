import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import TicTacToe_useReducer from './pages/TicTacToe_useReducer.jsx'
import Hangman from './pages/Hangman.jsx'
import Sudoku from './pages/Sudoku.jsx'
import './index.css'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter basename="/">
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="/tictactoe" element={<TicTacToe_useReducer />} />
        <Route path="/hangman" element={<Hangman />} />
        <Route path="/sudoku" element={<Sudoku />} />
      </Route>
    </Routes>
  </BrowserRouter>
</React.StrictMode>
)
