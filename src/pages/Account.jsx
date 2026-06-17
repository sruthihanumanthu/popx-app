import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Layout from '../components/Layout'
import Button from '../components/Button'
import '../styles/account.css'

const Account = () => {
  const navigate = useNavigate()
  const [userData, setUserData] = useState({
    fullName: 'Marry Doe',
    email: 'Marry@Gmail.Com',
    isLoggedIn: false
  })

  useEffect(() => {
    // Get user data from localStorage
    const storedData = localStorage.getItem('userData')
    if (storedData) {
      const parsedData = JSON.parse(storedData)
      setUserData(parsedData)
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('userData')
    navigate('/login')
  }

  // Get initials for profile image
  const getInitials = () => {
    if (userData.fullName) {
      const names = userData.fullName.split(' ')
      if (names.length >= 2) {
        return names[0][0] + names[1][0]
      }
      return userData.fullName.substring(0, 2).toUpperCase()
    }
    return 'MD'
  }

  // Display name
  const displayName = userData.fullName || 'Marry Doe'
  const displayEmail = userData.email || 'Marry@Gmail.Com'

  return (
    <Layout showProgress currentStep={4} totalSteps={4}>
      <div className="account-content">
        <h1 className="account-title">Account Settings</h1>
        
        <div className="profile-section">
          <div className="profile-image-container">
            <div className="profile-image">
              <div className="profile-placeholder">{getInitials()}</div>
            </div>
            <div className="camera-icon">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10" r="10" fill="#6C25FF" />
                <path d="M14 7.5H13L12 6.5H8L7 7.5H6C5.5 7.5 5 8 5 8.5V12.5C5 13 5.5 13.5 6 13.5H14C14.5 13.5 15 13 15 12.5V8.5C15 8 14.5 7.5 14 7.5ZM10 12.5C8.5 12.5 7.5 11.5 7.5 10C7.5 8.5 8.5 7.5 10 7.5C11.5 7.5 12.5 8.5 12.5 10C12.5 11.5 11.5 12.5 10 12.5Z" fill="white" />
              </svg>
            </div>
          </div>
          <h2 className="user-name">{displayName}</h2>
          <p className="user-email">{displayEmail}</p>
        </div>

        <div className="account-description">
          <p>
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam 
            Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam 
            Erat, Sed Diam
          </p>
        </div>

        <hr className="divider" />

        {/* Display additional user info if available */}
        {userData.isLoggedIn && userData.phoneNumber && (
          <div className="user-info-details">
            <div className="info-row">
              <span className="info-label">Phone:</span>
              <span className="info-value">{userData.phoneNumber}</span>
            </div>
            {userData.companyName && (
              <div className="info-row">
                <span className="info-label">Company:</span>
                <span className="info-value">{userData.companyName}</span>
              </div>
            )}
            <div className="info-row">
              <span className="info-label">Agency:</span>
              <span className="info-value">{userData.isAgency ? 'Yes' : 'No'}</span>
            </div>
          </div>
        )}

        <Button 
          variant="secondary" 
          onClick={handleLogout}
          className="logout-btn"
        >
          Logout
        </Button>
      </div>
    </Layout>
  )
}

export default Account