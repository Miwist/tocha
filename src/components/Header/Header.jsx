import React from 'react'
import cl from './Header.module.scss'
import logo from '../../assets/img/logo.png'
const Header = ({setOpenLogin, setOpenRegister}) => {

  return (
    <header className={cl.header}>
        <div className={cl.header_logo}>
                <img src={logo} alt="logo" />
                <h3>tocha</h3>
        </div>
      
        <div className={cl.header_buttons}>
            <button type='button' className={cl.header_buttons__enter} onClick={() => setOpenLogin(true)}>Вход</button>
            <button type='button' className={cl.header_buttons__register}  onClick={() => setOpenRegister(true)}>Регистрация</button>
        </div>  
        <div className={cl.menu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
    </header>
  )
}

export default Header