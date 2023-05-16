import React, { useState } from "react";
import cl from "./Reviews.module.scss";
import photo_reviews_1 from "../../assets/img/photo_reviews_1.png";
import photo_reviews_2 from "../../assets/img/photo_reviews_2.png";

const Reviews = () => {
  const [sliderCurrent, setSliderCurrent] = useState(0);
  const [road, setRoad] = useState(0);
  const reviews_arr = [
    {
      id: 1,
      name: "Анна Купер",
      web: "romashka.ru",
      img: photo_reviews_1,
      title: "Как же удобно!",
      text: `В рамках спецификации современных стандартов, базовые сценарии поведения пользователей, которые представляют собой яркий пример континентально-европейского типа политической культуры, будут преданы социально-демократической анафеме.`,
    },
    {
      id: 2,
      img: photo_reviews_2,
      web: "samogon-ont.ru",
      name: "Андрей Васильев",
      title: "Теперь мы идем в ногу со временем",
      text: `А ещё интерактивные прототипы превращены в посмешище, хотя само их существование приносит несомненную пользу обществу. Банальные, но неопровержимые выводы, а также тщательные исследования конкурентов формируют сеть.`,
    }
  ];

  function moveSlider(id) {
    setSliderCurrent(id);
  }

  return (
    <section className={cl.Reviews}>
      <h3>Отзывы клиентов</h3>
      <div className={cl.Reviews_items}>
               
          <div className={cl.Reviews_items__item}  >
            <div className={cl.Reviews_items__item__text}>
              <p>{reviews_arr[sliderCurrent].title}</p>
              <i>{reviews_arr[sliderCurrent].text}</i>
            </div>
            <div className={cl.Reviews_items__item__img}>
              <img src={reviews_arr[sliderCurrent].img} alt={reviews_arr[sliderCurrent].name} />
              <div className={cl.Reviews_items__item__img_name}>
                <p>{reviews_arr[sliderCurrent].name}</p>
                <i>{reviews_arr[sliderCurrent].web}</i>
              </div>
            </div>
          </div>
      </div>
      <div className={cl.dots}>
        {reviews_arr.map((item) => (
         
          <span className={cl.dot} onClick={() => moveSlider(item.id - 1)}></span>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
