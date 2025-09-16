import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Styles.css'
import { UserApp } from './UsersApp'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BrowserRouter>
   <UserApp/>
   </BrowserRouter>
  </StrictMode>,
)
