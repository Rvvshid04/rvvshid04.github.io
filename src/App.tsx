import { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

const BlogPage = lazy(() => import('./pages/BlogPage'))
const BlogPostPage = lazy(() => import('./pages/BlogPostPage'))
const Home = lazy(() => import('./pages/Home'))
const ContactPage = lazy(() => import('./pages/ContactPage'))
const WorkPage = lazy(() => import('./pages/WorkPage'))

const AppLayout = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <div className="flex-1">
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="/work" element={<WorkPage />} />
            <Route path="/contact" element={<ContactPage/>}/>
          </Routes>
        </Suspense>
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  )
}

function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  )
}

export default App 