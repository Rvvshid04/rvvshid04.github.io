import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Projects from './pages/Projects'
import ScrollToTop from './components/ScrollToTop'
import BlogPage from './pages/BlogPage'
import Home from './pages/Home'
import ServicePage from './pages/ServicePage'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white flex flex-col">
        <Navbar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/service" element={<ServicePage/>} />
          </Routes>
        </div>
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  )
}

export default App 