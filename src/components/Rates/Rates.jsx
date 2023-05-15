import React from "react";
import cl from "./Rates.module.scss";
const Rates = () => {
  return (
    <div className={cl.wrapper}>
      <section className={cl.Rates}>
        <h3>Тарифы</h3>
        <span>Стоимость зависит от трафика сайта</span>
        <div className={cl.Rates_items}>
          <div className={cl.Rates_items__item}>
            <div className={cl.Rates_items__item_title}>
              <p>Бесплатно</p>
            </div>
            <div className={cl.Rates_items__item_content}>
              <h5>Пробный период на 1 месяц</h5>
              <p>0₽/первый месяц</p>
              <button type="button" className="button">
                Подключить за 0₽
              </button>
            </div>
          </div>
        
          <div className={cl.Rates_items__item}>
            <div className={cl.Rates_items__item_title}>
              <p>Базовый</p>
            </div>
            <div className={cl.Rates_items__item_content}>
              <h5>Менее 1000 посещений в сутки</h5>
              <p>200₽/месяц</p>
              <button type="button" className="button">
                Подключить за 200₽
              </button>
            </div>
          </div>
    
          <div className={cl.Rates_items__item}>
            <div className={cl.Rates_items__item_title}>
              <p>Премиум</p>
            </div>
            <div className={cl.Rates_items__item_content}>
              <h5>Более 1000 посещений в сутки</h5>
              <p>500₽/месяц</p>
              <button type="button" className="button">
                Подключить за 500₽
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Rates;
