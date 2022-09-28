import './FormInput.css'
import { InputsValidationMessages } from '../../utils/utils'
import { useEffect, useState } from 'react'

const FormInput = ({ type, name, pattern, placeholder, required, onChange, validityOptions, minLength, maxLength }) => {

  const [isValid, setIsValid] = useState(true)

  let inputInfo = ''
  switch(type) {
    case 'text':
      inputInfo='Необходимо заполнить. Не более 150 символов. Можно вводить буквы, цифры и символы @ . + - _ '
      break

    case 'password':
      inputInfo='Необходимо заполнить. Не менее 8 символов. Можно вводить любые буквы, цифры и символы'
      break

    case 'email':
      inputInfo='Можно не заполнять. Формат ввода: example@example.example'
      break

    default: inputInfo=''
  }

  useEffect(()=>{
    setIsValid(validityOptions[type])
  }, [setIsValid, validityOptions, type])

  return (
    <div className='inputWrapper'>
      <span className='inputInfo'>{inputInfo}</span>
      <input
      className={`formInput ${isValid===false ? 'invalid' : ''}`}
      type={type}
      name={name}
      pattern={pattern}
      placeholder={placeholder}
      required={required}
      onChange={onChange}
      minLength={minLength}
      maxLength={maxLength}
      />
      <span className={`formError ${isValid===false ? 'visible' : ''}`}>
        {InputsValidationMessages[type]}
      </span>
    </div>

  )

}

export default FormInput
