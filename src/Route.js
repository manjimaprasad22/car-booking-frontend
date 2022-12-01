import React, { createContext, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Booking from './Booking'
import Home from './Home'
import Login from './Login'
import Logout from './Logout'
import Register from './Register'
import Sidenav from './Sidenav'
const NewContext = createContext()
const Routing = () => {
    const [hide, sethide] = useState(true)
  return (
    <div>
      <NewContext.Provider value={[hide, sethide]}>
        <BrowserRouter>
        <App/>
        <div className='side'>
        {hide? <Sidenav/>:<Logout/>} 
          
        
    </div>
        <Routes>
            <Route path='/home' element={<Home/>}></Route>
            <Route path='/booking' element={<Booking/>}></Route>
            <Route path='/' element={<Login/>}></Route>
            <Route path='/register' element={<Register/>}></Route>

        </Routes>
        </BrowserRouter>
        </NewContext.Provider>
    </div>
  )
}

export default Routing
export {NewContext}