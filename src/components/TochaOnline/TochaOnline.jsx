import React from "react";
import cl from "./TochaOnline.module.scss";
import phone from "../../assets/img/Tocha-phone.png";
import tocha_1 from "../../assets/img/tocha_online_1.png";
import tocha_2 from "../../assets/img/tocha_online_2.png";
import tocha_3 from "../../assets/img/tocha_online_3.png";
import tocha_4 from "../../assets/img/tocha_online_4.png";

const TochaOnline = () => {
  return (
    <section className={cl.tocha}>
      <div className={cl.tocha_items}>
      <h2>Tocha Online — это</h2>
        <div className={cl.tocha_item}>
          <div className={cl.tocha_item__img}>
            <img src={tocha_1} alt="tocha" />
          </div>
          <div className={cl.tocha_item__text}>
            <p>Ничего лишнего</p>
            <i>
              Отсутствие лишних приложений для операторов. Оператору не нужно
              учиться работать с чатом
            </i>
          </div>
        </div>
        <div className={cl.tocha_item}>
          <div className={cl.tocha_item__img}>
            <img src={tocha_2} alt="tocha" />
          </div>
          <div className={cl.tocha_item__text}>
            <p>Несколько ассистентов</p>
            <i>Возможность подключения нескольких ассистентов</i>
          </div>
        </div>
        <div className={cl.tocha_item}>
          <div className={cl.tocha_item__img}>
            <img src={tocha_3} alt="tocha" />
          </div>
          <div className={cl.tocha_item__text}>
            <p>Простота</p>
            <i>Простая установка на сайт</i>
          </div>
        </div>
        <div className={cl.tocha_item}>
          <div className={cl.tocha_item__img}>
            <img src={tocha_4} alt="tocha" />
          </div>
          <div className={cl.tocha_item__text}>
            <p>Кастомизация</p>
            <i>Настройка интерфейса под нужды сайта</i>
          </div>
        </div>
      </div>
      <div className={cl.tocha_img}>
        <img src={phone} alt="phone" />
      </div>
    </section>
  );
};

export default TochaOnline;
