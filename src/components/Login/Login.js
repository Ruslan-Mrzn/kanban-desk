import { useState } from "react"
import { useDispatch } from "react-redux"
import { setCredentials } from "../../store/authSlice"
import { useLoginUserMutation } from '../services/kanbanService'
import FormInput from "../FormInput/FormInput"
import { Link, useNavigate } from "react-router-dom"

import './Login.css'

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [loginUser] = useLoginUserMutation()

  const [formState, setFormState] = useState({
    username: '',
    password: '',
  })

  const [formErrors, setFormErrors] = useState({})

  const [validityOptions, setValidityOptions] = useState({})


  const handleChange = ({ target: { name, value, validity, type }}) =>{
    setFormErrors({})
    setFormState((prev) => ({ ...prev, [name]: value }))
    setFormErrors((prev) => ({ ...prev, [type]: validity.valid}))
  }


  return (
    <div className="loginPage">
      <form
        className="form"
        noValidate={true}
        name="login"
        onSubmit={(e) => {
          e.preventDefault()
          setValidityOptions(JSON.parse(JSON.stringify(formErrors)))
          setFormErrors({})
          loginUser(formState).unwrap()
            .then((token) => {
              dispatch(setCredentials(token))
              localStorage.setItem('authToken', JSON.stringify(token))

              console.log('yo', token)
            })
            .then(()=>navigate('/'))
            .catch(err => console.error(err))

        }}
      >
        <h2>Привет !</h2>
        <p>Введите Ваши учетные данные чтобы войти</p>
        <FormInput
          name={'username'}
          type={'text'}
          placeholder={'Введите ваш логин ...'}
          onChange={handleChange}
          pattern={'[0-9A-Za-zА-Яа-яЁё\.\@\+\-]{1,250}'}
          validityOptions={validityOptions}
          required={true}
        />

        <FormInput
          name={'password'}
          type={'password'}
          placeholder={'Введите ваш пароль ...'}
          onChange={handleChange}
          maxLength={128}
          validityOptions={validityOptions}
          required={true}
        />
        <button className="loginButton" type="submit" disabled={!formState.password||!formState.username}>Войти</button>
        <p className="registerBlock">Нет аккаунта? Тогда Вы можете  <Link className="registerLink" to={'/register'}>зарегистрироваться</Link></p>

      </form>
    </div>

  )
}

export default Login
