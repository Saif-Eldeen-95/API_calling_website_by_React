
import {Routes , Route , Link } from 'react-router-dom'
import './styling/App.css'
import FetchData from './FetchData'
import Home from './Home'
import About from './about'
import PostDetails from './PostDetails'

function App() {
  

  return (
    <>
    <nav className="nav">
      <div className="nav-brand">API Explorer</div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/fetch">Fetch Data</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
    <main className="content">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/fetch" element={<FetchData />} />
      <Route path="/fetch/:id" element={<PostDetails />} />
    </Routes>
    </main>
    </>
  )
}

export default App
