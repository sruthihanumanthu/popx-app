const Button = ({ 
  children, 
  type = 'button', 
  variant = 'primary', 
  onClick, 
  fullWidth = true,
  className = '' 
}) => {
  return (
    <button
      type={type}
      className={`btn btn-${variant} ${fullWidth ? 'btn-full' : ''} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button