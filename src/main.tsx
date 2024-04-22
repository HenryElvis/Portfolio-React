import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import Header from './components/header'
import CardContainers from './components/card-containers'
import Footer from './components/footer'

ReactDOM.createRoot(document.getElementById('header')!).render(
  <React.StrictMode>
    <Header />
  </React.StrictMode>,
)

ReactDOM.createRoot(document.getElementById('card')!).render(
  <React.StrictMode>
    <CardContainers />
  </React.StrictMode>,
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

ReactDOM.createRoot(document.getElementById('footer')!).render(
  <React.StrictMode>
    <Footer />
  </React.StrictMode>,
)