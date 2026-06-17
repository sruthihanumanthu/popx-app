const InputField = ({
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  required = false,
  name,
  className = '',
}) => {
  return (
    <div className={`input-group ${className}`}>
      {label && <label className="input-label">{label}</label>}
      <input
        type={type}
        className="input-field"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        name={name}
      />
    </div>
  )
}

export default InputField