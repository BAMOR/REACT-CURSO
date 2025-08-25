import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HelloWorldApp } from './HelloWorldApp';

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <HelloWorldApp user = {{name: 'pepe', lastName: 'doe'}} 
  id = {1} 
  title = 'Hola Mundo desde React!'
  book = 'El libro de React'
  />
  </StrictMode>
  
)
