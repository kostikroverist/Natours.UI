import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header/Header';
import { Routes, Route } from 'react-router-dom';
import SignUp from './components/form/SignUp';
import LogIn from './components/form/LogIn';
function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    fetch('http://localhost:4200/api/v1/tours').then(response => response.json()).then((data) => console.log(data))
  }, [])

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/signup" element={
          <SignUp />
        }>
        </Route>
        <Route path="/login" element={
          <LogIn />
        }>
        </Route>
      </Routes>

    </div>
  )
}

export default App
