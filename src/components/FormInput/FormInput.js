import './FormInput.css'

const FormInput = ({ type, name, pattern, placeholder, required, onChange }) => {

  return (
    <input
      className="formInput"
      type={type}
      name={name}
      pattern={pattern}
      placeholder={placeholder}
      required={required}
      onChange={onChange}
    />
  )

}

export default FormInput
