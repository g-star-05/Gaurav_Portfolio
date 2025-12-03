import React from "react";
import "./Projects.css";

import p1 from "../../assets/project-1.jpg";
import p2 from "../../assets/project-2.jpg";
import p3 from "../../assets/project-3.jpg";
import p4 from "../../assets/project-4.jpg";

const data = [
  {
    title: "School Website",
    img: p1,
    desc: "A responsive school site with hero, notices, and admissions flow.",
    link: "https://your-school-site-link.com",
  },
  {
    title: "Travel Landing",
    img: p2,
    desc: "Hero slideshow, destination cards, and contact form with validation.",
    link: "https://your-travel-site-link.com",
  },
  {
    title: "Food Ordering UI",
    img: p3,
    desc: "Menu grid, add-to-cart interactions, and smooth checkout screens.",
    link: "https://your-food-ui-link.com",
  },
  {
    title: "Portfolio v2",
    img: p4,
    desc: "Modern portfolio with animations and optimized images.",
    link: "https://your-portfolio-v2-link.com",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="projects__container">
        <h2 className="projects__title">Projects</h2>

        <div className="projects__grid">
          {data.map((item, i) => (
            <a
              key={i}
              href={item.link}
              className="card"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3 className="card__heading">{item.title}</h3>

              <figure className="card__media">
                <img src={item.img} alt={item.title} loading="lazy" />
              </figure>

              <p className="card__desc">{item.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
