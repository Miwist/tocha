import React from 'react'
import cl from "./Banner.module.scss";
import banner_frame from '../../assets/img/Banner_frame.png'

const BannerTelegram = () => {
  return (
    <section>
        <div className={cl.Banner}>
          <div className={cl.Banner_img}><img src={banner_frame} alt="banner" /></div>
          <div className={cl.Banner_text}>
            <h4>Подключите Telegram чат уже сегодня</h4>
            <div className={cl.Banner_text__form}>
              <input type="email" placeholder='Введите ваш e-mail' />
              <button type='button' className="button">Отправить</button>
            </div>
          </div>
        </div>
    </section>
  )
}

export default BannerTelegram