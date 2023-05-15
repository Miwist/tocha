import React from "react";
import cl from "./Modal.module.scss";
import close from "../../assets/img/icons/close.png";
const LoginModal = ({setOpenLogin}) => {
  return (
    <div className={cl.window}>
    <div className={cl.modal}>
      <img src={close} alt="close" onClick={() => setOpenLogin(false)}/>
      <h4>Вход</h4>
      <input type="text" placeholder="Телефон" />
      <input type="text" placeholder="Пароль" />
      <span>Напомнить пароль</span>
      <button type="button" className="button">
        Войти
      </button>
    </div>
    </div>
  );
};

export default LoginModal;
