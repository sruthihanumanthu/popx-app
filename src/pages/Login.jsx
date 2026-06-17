import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Layout from '../components/Layout'
import InputField from '../components/InputField'
import Button from '../components/Button'
import '../styles/login.css'

const Login = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Save login data to localStorage
    localStorage.setItem('userData', JSON.stringify({
      email: formData.email,
      name: 'Marry Doe',
      isLoggedIn: true
    }))
    navigate('/account')
  }

  return (
    <Layout>
      <div className="login-content">
        <h1 className="login-title">Signin to your PopX account</h1>
        <p className="login-subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <form onSubmit={handleSubmit} className="login-form">
          <InputField
            label="Email Address"
            type="email"
            placeholder="Enter email address"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <InputField
            label="Password"
            type="password"
            placeholder="Enter password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <Button type="submit" variant="primary">
            Login
          </Button>
        </form>
      </div>
    </Layout>
  )
}

export default Login