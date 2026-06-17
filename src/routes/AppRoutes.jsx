import { Routes, Route } from 'react-router-dom'
import Welcome from '../pages/Welcome'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Account from '../pages/Account'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/account" element={<Account />} />
    </Routes>
  )
}

export default AppRoutes