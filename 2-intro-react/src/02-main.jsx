import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


// const h1 = React.createElement('div', null, React.createElement('ul', null, React.createElement('li', null, 'item 1')));

// const h1 = <div><ul><li>Hola mundo</li></ul></div>;

const ul = React.createElement('section', null, React.createElement('div', null, React.createElement('ul', null, React.createElement('li', null, 1),React.createElement('li', null, 2),React.createElement('li', null, 3),React.createElement('li', null, 4),React.createElement('li', null, 5))))


createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>,
  ul
)
