import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Link, NavLink, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ContactPage from './pages/ContactPage'
import RecipePage from './pages/RecipePage'

function App() {
  return (
    <div className='App'>
      <nav>
        <ul>
          <li>
            <NavLink
              to='/'
              style={({ isActive }) => (isActive ? { color: 'red' } : { color: 'green' })}
            >
              Home
            </NavLink>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
          <li>
            <NavLink
              to='/recipes/myRandomIdThatCouldBeHopper?hopper=value&pizza=someOtherValue'
              style={({ isActive }) => (isActive ? { color: 'red' } : { color: 'green' })}
            >
              Recipe Details
            </NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/recipes/:recipeId' element={<RecipePage />} />

        <Route path='*' element={<h1>404 Not Found</h1>} />
      </Routes>
    </div>
  )
}

export default App
