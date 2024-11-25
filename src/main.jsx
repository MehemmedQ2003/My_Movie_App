import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './components/App'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)


// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import App from './components/App.jsx'
// import { BrowserRouter } from 'react-router-dom'
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </StrictMode>,
// )