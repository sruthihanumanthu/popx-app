const Layout = ({ children, showProgress, currentStep, totalSteps }) => {
  return (
    <div className="app-container">
      <div className="mobile-frame">
        {showProgress && (
          <div className="progress-bar">
            <div className="progress-indicator">
              {currentStep} of {totalSteps}
            </div>
          </div>
        )}
        <div className="content-wrapper">{children}</div>
      </div>
    </div>
  )
}

export default Layout