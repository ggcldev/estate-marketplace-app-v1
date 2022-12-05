import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Discover from './pages/Discover'
import Sale from './pages/Sale'
import Profile from './pages/Profile'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import ForgotPassword from './pages/ForgotPassword'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Discover />} />
          <Route path='/sales' element={<Sale />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/sign-in' element={<SignIn />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
