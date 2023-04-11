import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header/Header';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import SignUp from './components/form/SignUp';
import LogIn from './components/form/LogIn';
import TourList from './components/Tours/ToursList';
import { ITour } from './types/Types';
import Tours from './components/Tours/Tours';
import TourDetails from './components/Tours/TourDetails';

function App() {
  const [count, setCount] = useState(0);

  const [tours, setTours] = useState<ITour[]>([])



  useEffect(() => {
    fetch('http://localhost:4200/api/v1/tours')
      .then(response => response.json())
      .then(data => setTours(data.data.data));
  }, []);




  return (
    <div className="App flex flex-col ">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="signup" element={
            <SignUp />
          }>
          </Route>
          <Route path="login" element={
            <LogIn />
          }>
          </Route>
          <Route path='tours' element={
           <Tours toursData={tours} />
          }>
          </Route>
          <Route path='tours/:_id' element={<TourDetails />} />
        </Routes>
      </BrowserRouter>,

    </div>
  )
}

export default App
