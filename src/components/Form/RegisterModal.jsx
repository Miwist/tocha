import React from "react";
import cl from "./Modal.module.scss";
import close from "../../assets/img/icons/close.png";
const RegisterModal = ({ setOpenRegister }) => {
  return (
    <div className={cl.window}>
      <div className={cl.modal}>
        <img src={close} alt="close" onClick={() => setOpenRegister(false)} />
        <h4>Регистрация</h4>
        <input type="text" placeholder="Телефон" />
        <input type="mail" placeholder="Электронная почта" />
        <input type="text" placeholder="Пароль" />
        <input type="text" placeholder="Повторите пароль" />
        <button type="button" className="button">
          Войти
        </button>
      </div>
    </div>
  );
};

export default RegisterModal;
