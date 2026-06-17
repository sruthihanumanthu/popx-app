import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Layout from '../components/Layout'
import Button from '../components/Button'
import '../styles/welcome.css'

const Welcome = () => {
  const navigate = useNavigate()

  useEffect(() => {
    // Check if user is already logged in
    const userData = localStorage.getItem('userData')
    if (userData) {
      const parsedData = JSON.parse(userData)
      if (parsedData.isLoggedIn) {
        navigate('/account')
      }
    }
  }, [navigate])

  return (
    <Layout showProgress currentStep={1} totalSteps={4}>
      <div className="welcome-content">
        <div className="welcome-icon">
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
            <circle cx="40" cy="40" r="40" fill="#6C25FF" opacity="0.1" />
            <path d="M40 20L44 36H60L48 46L52 62L40 52L28 62L32 46L20 36H36L40 20Z" fill="#6C25FF" />
          </svg>
        </div>
        <h1 className="welcome-title">Welcome to PopX</h1>
        <p className="welcome-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className="welcome-buttons">
          <Button variant="primary" onClick={() => navigate('/signup')}>
            Create Account
          </Button>
          <Button variant="secondary" onClick={() => navigate('/login')}>
            Already Registered? Login
          </Button>
        </div>
      </div>
    </Layout>
  )
}

export default Welcome