import { useState } from 'react'
import './App.css'
import Nav from './components/Nav/Nav.jsx';
import { Body } from './components/Body/Body.jsx';
import Footer from './components/Footer/Footer.jsx';
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Nav></Nav>
    <Body/>
    <Footer></Footer>
    </>
  )
}

export default App
