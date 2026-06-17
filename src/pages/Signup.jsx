import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Layout from '../components/Layout'
import InputField from '../components/InputField'
import Button from '../components/Button'
import '../styles/signup.css'

const Signup = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    password: '',
    companyName: '',
    isAgency: true,
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    })
  }

  const handleRadioChange = (value) => {
    setFormData({ ...formData, isAgency: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Save signup data to localStorage
    localStorage.setItem('userData', JSON.stringify({
      fullName: formData.fullName,
      phoneNumber: formData.phoneNumber,
      email: formData.email,
      companyName: formData.companyName,
      isAgency: formData.isAgency,
      isLoggedIn: true
    }))
    navigate('/account')
  }

  return (
    <Layout showProgress currentStep={3} totalSteps={4}>
      <div className="signup-content">
        <h1 className="signup-title">Create your PopX account</h1>
        <form onSubmit={handleSubmit} className="signup-form">
          <InputField
            label="Full Name*"
            type="text"
            placeholder="Enter full name"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
          <InputField
            label="Phone number*"
            type="tel"
            placeholder="Enter phone number"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
          <InputField
            label="Email address*"
            type="email"
            placeholder="Enter email address"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <InputField
            label="Password *"
            type="password"
            placeholder="Enter password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <InputField
            label="Company name"
            type="text"
            placeholder="Enter company name"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
          />
          <div className="radio-group">
            <label className="radio-label">Are you an Agency?*</label>
            <div className="radio-options">
              <label className="radio-option">
                <input
                  type="radio"
                  name="isAgency"
                  checked={formData.isAgency === true}
                  onChange={() => handleRadioChange(true)}
                />
                Yes
              </label>
              <label className="radio-option">
                <input
                  type="radio"
                  name="isAgency"
                  checked={formData.isAgency === false}
                  onChange={() => handleRadioChange(false)}
                />
                No
              </label>
            </div>
          </div>
          <Button type="submit" variant="primary">
            Create Account
          </Button>
        </form>
      </div>
    </Layout>
  )
}

export default Signup