import './App.css'
import Footer from './components/footer/Footer.jsx'
import Bridge from './pages/Bridge.jsx'
import Portal from './pages/Portal.jsx'
import CanvasAndBadges from './pages/CanvasAndBadges.jsx'
import Header from './components/header/Header.jsx'
import Ecosystem from './pages/Ecosystem.jsx'
import Sessions from './pages/Sessions.jsx'
import Community from './pages/Community.jsx'
import Blog from './pages/Blog.jsx'
import JoinUs from './pages/JoinUs.jsx'
import './index.css'
// react router import
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Bridge />} />
          <Route path='/portal' element={<Portal />} />
          <Route path='/canvas-and-badges' element={<CanvasAndBadges />} />
          <Route path='/ecosystem' element={<Ecosystem />} />
          <Route path='/sessions' element={<Sessions />} />
          <Route path='/community' element={<Community />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/join-us' element={<JoinUs />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App;

