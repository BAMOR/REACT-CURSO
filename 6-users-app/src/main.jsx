import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Styles.css'
import { UserApp } from './UsersApp'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <UserApp/>
  </StrictMode>,
)
