import React from "react";
import "./Portfolio.css";

function Portfolio(props) {
  const portfolio = [
    {
      name: "Static page",
      link: "https://github.com/meyer985/how-to-learn",
    },
    {
      name: "Adaptive page",
      link: "https://github.com/meyer985/russian-travel",
    },
    {
      name: "One-page adaptive applicaton",
      link: "https://github.com/meyer985/react-mesto-api-full",
    },

    {
      name: "Multi-page adaptive applicaton",
      link: "https://github.com/meyer985/movies-explorer-frontend",
    },

    {
      name: "Node.js API server",
      link: "https://github.com/meyer985/movies-explorer-api",
    },

    {
      name: "SIE-Logistics multi-page application",
      link: "https://enchanting-salamander-1f806c.netlify.app/",
    }
  ];

  return (
    <section className="portfolio">
      <div className="section__text-frame frame">
      <h2 className="section_header">PORTFOLIO</h2>
      </div>
      <ul className="portfolio__list">
        {portfolio.map((item, index) => {
          return (
            <li className="portfolio__item item" key={index + 28}>
              <a
                className="item__link link"
                href={item.link}
                target="_blank"
                rel="noreferrer"
              >
                <p className="item__name">{item.name}</p>
                <div className="item__arrow"></div>
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Portfolio;
