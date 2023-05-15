import React from "react";
import cl from "./ConnectionStep.module.scss";
import phone1 from "../../assets/img/con-phone-1.png";
import phone2 from "../../assets/img/con-phone-2.png";
import phone3 from "../../assets/img/con-phone-3.png";

const ConnectionStep = () => {
  return (
    <div className={cl.wrapper}>
      <section className={cl.connection}>
        <div className={cl.connection_title}>
          <h2>Всего 3 шага для подключения Telegram чата</h2>
        </div>
        <div className={cl.connection_steps}>
          <div className={cl.connection_steps__step}>
            <div className={cl.circle}>
              <p>1</p>
            </div>
            <div className={cl.text}>
              <p>Telegram bot</p>
              <i>Вы создаёте Telegram бота для вашего сайта</i>
            </div>
            <div className={cl.img}>
              <img src={phone1} alt="phone" />
            </div>
          </div>
          <div className={cl.connection_steps__step}>
            <div className={cl.circle}>
              <p>2</p>
            </div>
            <div className={cl.text}>
              <p>Подключение Tocha</p>
              <i>Tocha подключает Telegram бота к вашему сайту</i>
            </div>
            <div className={cl.img}>
              <img src={phone2} alt="phone" />
            </div>
          </div>
          <div className={cl.connection_steps__step}>
            <div className={cl.circle}>
              <p>3</p>
            </div>
            <div className={cl.text}>
              <p>Telegram-чат</p>
              <i>Консультант отвечает на вопросы посетителей сайта</i>
            </div>
            <div className={cl.img}>
              <img src={phone3} alt="phone" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConnectionStep;
