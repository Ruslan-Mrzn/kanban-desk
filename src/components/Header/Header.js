import { useState } from "react"
import { useNavigate } from "react-router-dom"
import './Header.css'


const Header = () => {

  const [isOpened, setIsOpened] = useState(false)

    const navigate = useNavigate()

  return (
    <div className="header">
      <button
        type="button"
        className={`burgerMenu ${isOpened ? 'openedMenu' : ''}`}
        onClick={()=>setIsOpened(!isOpened)}
      >
      </button>
      <button
        type="button"
        className={`logout ${isOpened ? 'visible' : ''}`}
        onClick={()=>{
          localStorage.removeItem('authToken')
          navigate('/login')
        }}
      >
        Выйти
      </button>
    </div>
  )
}

export default Header
