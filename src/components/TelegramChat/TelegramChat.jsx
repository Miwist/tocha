import React from "react";
import cl from "./TelegramChat.module.scss";
import ilustration from "../../assets/img/telegram-chat.png";

const TelegramChat = () => {
  return (
    <section className={cl.telegram}>
      <div className={cl.telegram_text}>
        <h1>
          <b style={{ color: "#685ED6" }}>Telegram чат</b> на вашем сайте
        </h1>
        <p>
          Общение с клиентами станет простым и удобным, а подключение займет 5
          минут. Первый месяц — <b style={{ color: "#685ED6" }}>бесплатно!</b>
        </p>
        <button className="button">Подключить</button>
      </div>
      <div className={cl.telegram_img}>
        <img src={ilustration} alt="ilustration" />
      </div>
    </section>
  );
};

export default TelegramChat;
