import { useState } from "react"
import './Header.css'


const Header = () => {

  const [isOpened, setIsOpened] = useState(false)

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
        }}
      >
        Выйти
      </button>
    </div>
  )
}

export default Header
