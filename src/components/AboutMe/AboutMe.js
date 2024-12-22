import React from "react";
import "./AboutMe.css";
import new_photo from "../../images/new_photo.JPG";

function AboutMe(props) {
  return (
    <section className="student">
      <div className="section__text-frame">
        <h2 className="section_header">PROFILE</h2>
      </div>
      <article className="student__page">
        <img className="student__image" src={new_photo} alt="фото" />
        <div className="student__content">
          <p className="student__name">Aleksei Grabovenko</p>
          <p className="student__brief">Web-developer</p>
          <p className="student__info_bold student__info">
            Born: 1985, Saint-Petersburg, Russian Federation
          </p>
          <p className="student__info_bold student__info">
            Current location: Yerevan, Armenie
          </p>
          <p className="student__info_bold student__info">
            Languages: English (business proficient), Russian (native)
          </p>
          <p className="student__info">
          I was born and educated in St. Petersburg, Russia. Over the past 8 years, I have worked in logistics, customs clearance, and international trade. Being long interested in IT, I completed the following courses: Yandex Practicum (Web Development, 2021–2022) and Stepik (Advanced JavaScript, 2024). In parallel, I worked on my own projects, exploring new technologies. My goal is to manage IT projects while enhancing my technical skills and leveraging my previous experience in business operations.
          </p>
          <span contacts>
            <p className="student__info contact">Contacts:</p>
            <p className="student__info">Tel.: +374 (93) 583039</p>
            <p className="student__info">Tel.: +7 (911) 7332075 (WhatsApp, Telegram)</p>
            <p className="student__info">Email: ajgrabovenko@gmail.com</p>
            </span>
          <span className="student__links">
            <a
              href="https://www.facebook.com/alexey.grabovenko"
              className="student__link link"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>
            <a
              href="https://github.com/meyer985"
              className="student__link link"
              target="_blank"
              rel="noreferrer"
            >GitHub</a>
            </span>
        </div>
      </article>
    </section>
  );
}

export default AboutMe;
