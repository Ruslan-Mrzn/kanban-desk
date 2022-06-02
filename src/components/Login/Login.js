import { useState } from "react"
import { useDispatch } from "react-redux"
import { setCredentials } from "../../store/authSlice"
import { useLoginUserMutation } from '../services/kanbanService'
import FormInput from "../FormInput/FormInput"
import { useNavigate } from "react-router-dom"

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [loginUser] = useLoginUserMutation()

  const [formState, setFormState] = useState({
    username: '',
    password: '',
  })

  const handleChange = ({ target: { name, value }}) =>
    setFormState((prev) => ({ ...prev, [name]: value }))


  return (
    <>
      <h2>Привет !</h2>
      <p>Введите Ваши учетные данные чтобы войти</p>
      <form
        name="login"
        onSubmit={(e) => {
          e.preventDefault()
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
          <FormInput name={'username'} type={'text'} placeholder={'Введите ваш логин ...'} onChange={handleChange} />
          <FormInput name={'password'} type={'password'} placeholder={'Введите ваш пароль ...'} onChange={handleChange} />
          <button type="submit">Войти</button>
      </form>
    </>

  )
}

export default Login
