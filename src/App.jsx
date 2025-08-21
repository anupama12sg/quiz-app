import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Quiz from './components/Quiz/Quiz'
import Questions from './components/Teacher/Questions'
import Home from './components/Home/Home'
import Student from './components/Student/TakeQuiz'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/quiz' element={<Quiz />} />
        <Route path='/questions' element={<Questions />} />
        <Route path='/home' element={<Home />} />
        <Route path='/student' element={<Student />} />
      </Routes>
    </>
  )
}

export default App
