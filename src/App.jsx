import React from 'react'
import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Cart from './Pages/Cart/Cart'
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder'
import Header from './components/Header/Header'
import FoodItem from './components/fooditem/fooditem'
import Login from './components/Login/Login'
import SignUp from './components/SignUp/SignUp'




const App = () => {


  const [showLogin, setShowLogin] = useState(false);

  const [ showSignUp, setShowSignUp ] = useState(false);

  return (
    <>
      <div className='App'>

      
      
      {showLogin && <Login setShowLogin={setShowLogin} />}


      {showSignUp && <SignUp setShowSignUp={setShowSignUp} />}

      

        <Navbar setShowLogin={setShowLogin} setShowSignUp={setShowSignUp} />
         {/* <Header/> */}


        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOrder />} />
        </Routes>


        <FoodItem/>

        {/* <Login/> */}

        {/* <SignUp/> */}

      </div>
    </>
  )
}

export default App
