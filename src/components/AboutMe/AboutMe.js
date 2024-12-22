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
            I was born and studied in St. Petersburg, Russia. For the last 8 years I have worked in a field of logistics, customs clearance and international trade. Being long interested in IT i graduated following courses: Yandex Practicum (WEB-developer, 2021-2022), Stepik (Advanced Java Script: 2024). In the meantime I worked on my own projects, studying new technologies. My goal is to run IT projects, enhancing technical skill in addition to my previous business operation experience.
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
