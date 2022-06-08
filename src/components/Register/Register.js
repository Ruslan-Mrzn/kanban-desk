import { useState } from "react"
import { useDispatch } from "react-redux"
import { setCredentials } from "../../store/authSlice"
import { useRegisterUserMutation } from '../services/kanbanService'
import FormInput from "../FormInput/FormInput"
import { Link, useNavigate } from "react-router-dom"

import './Register.css'

const Register = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [register] = useRegisterUserMutation()

  const [formState, setFormState] = useState({
    username: '',
    password: '',
  })

  const [formErrors, setFormErrors] = useState({})

  const [validityOptions, setValidityOptions] = useState({})


  const handleChange = ({ target: { name, value, validity, type }}) =>{
    setValidityOptions({})
    setFormState((prev) => ({ ...prev, [name]: value }))
    setFormErrors((prev) => ({ ...prev, [type]: validity.valid}))
  }


  return (
    <div className="registerPage">
      <form
        className="form"
        noValidate={true}
        name="login"
        onSubmit={(e) => {
          e.preventDefault()
          setValidityOptions(JSON.parse(JSON.stringify(formErrors)))
          setFormErrors({})
          register(formState).unwrap()
            .then((token) => {
              dispatch(setCredentials(token))
              localStorage.setItem('authToken', JSON.stringify(token))
            })
            .then(()=>navigate('/'))
            .catch(err => console.error(err))

        }}
      >
        <h2>Привет !</h2>
        <p>Введите Ваши учетные данные чтобы зарегистироваться и войти</p>
        <FormInput
          name={'username'}
          type={'text'}
          placeholder={'Придумайте логин ...'}
          onChange={handleChange}
          pattern={'[0-9A-Za-zА-Яа-яЁё\.\@\+\-]{1,250}'}
          validityOptions={validityOptions}
          required={true}
        />

        <FormInput
          name={'password'}
          type={'password'}
          placeholder={'Придумайте пароль ...'}
          onChange={handleChange}
          maxLength={128}
          validityOptions={validityOptions}
          required={true}
        />

        <FormInput
          name={'email'}
          type={'email'}
          placeholder={'Введите вашу электронную почту ...'}
          onChange={handleChange}
          validityOptions={validityOptions}
        />
        <button className="registerButton" type="submit" disabled={!formState.password||!formState.username}>Зарегистироваться</button>
        <p className="loginBlock">Уже есть аккаунт? Тогда Вы можете <Link className="loginLink" to={'/login'}>авторизоваться</Link></p>

      </form>
    </div>

  )
}

export default Register