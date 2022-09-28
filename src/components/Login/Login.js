import { useState } from "react"
import { useDispatch } from "react-redux"
import { setAccessCredentials } from "../../store/authSlice"
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

  const [isFormValid, setIsFormValid] = useState(false)


  const handleChange = ({ target: { name, value, validity, type }}) =>{
    setValidityOptions((prev) => ({ ...prev, [type]: true}))
    setFormState((prev) => ({ ...prev, [name]: value }))
    setFormErrors((prev) => ({ ...prev, [type]: validity.valid}))
  }

  const checkFormValidity = (formValidity) => {
    for (let type in  formValidity) {
      if (formValidity[type] !== true) setIsFormValid(false)
    }
    setIsFormValid(true)
  }


  return (
    <>
      <div className="loginPage">
        <form
          className="form"
          noValidate={true}
          name="login"
          onSubmit={(e) => {
            e.preventDefault()
            console.log(formState)
            checkFormValidity(formErrors)
            setValidityOptions(JSON.parse(JSON.stringify(formErrors)))
            loginUser(formState).unwrap()
              .then((token) => {
                localStorage.setItem('authToken', JSON.stringify(token.access))
                localStorage.setItem('authRefresh', JSON.stringify(token.refresh))
                dispatch(setAccessCredentials(token))
                console.log('yo', token.access)
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
            minLength={8}
            maxLength={128}
            validityOptions={validityOptions}
            required={true}
          />
          <button className="loginButton" type="submit" disabled={!formState.password||!formState.username}>Войти</button>
          <p className="registerBlock">Нет аккаунта? Тогда Вы можете  <Link className="registerLink" to={'/register'}>зарегистрироваться</Link></p>

        </form>
      </div>
    </>
  )
}

export default Login
