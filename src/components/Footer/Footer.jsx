import React from "react";
import cl from "./Footer.module.scss";
import tocha from "../../assets/img/logo.png";
const Footer = () => {
  const footerDate = new Date();
  const year = footerDate.getFullYear();
  return (
    <footer className={cl.footer}>
      <div className={cl.footer_sub}>
        <div className={cl.footer_sub__logo}>
          <img src={tocha} alt="tocha" />
          <h4>tocha</h4>
        </div>
        <div className={cl.footer_sub__chat}>
          <p>Telegram чат</p>
          <a href="/">О нас</a>
          <a href="/">Партнеры</a>
          <a href="/">Цены</a>
          <a href="/">Контакты</a>
          <a href="/"></a>
        </div>
        <div className={cl.footer_sub__support}>
          <p>Поддержка</p>
          <a href="/">Центр поддержки</a>
          <a href="/">Политика конфеденциальности</a>
          <a href="/">Документы оферта</a>
          <a href="/">Статус</a>
        </div>
      </div>
      <div className={cl.footer_reserved}>
        <i>© {year} Tocha. Все права защищены</i>
      </div>
    </footer>
  );
};

export default Footer;
