import React from 'react';
import { useParams } from 'react-router-dom';
import projectData from '../data/projects.json';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NotFound from '../pages/NotFound';
import ReturnButton from '../components/returnButton';
import '../styles/Project.css';

function Project() {
  const { id } = useParams();

  const project = projectData.find((project) => project.id === parseInt(id));

  if (!project) {
    return <NotFound />;
  }

  const slickSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>  
      <Header />
    <section className="project-container">
      <main className="project-main">
        <div className="project-carousel">
          <Slider {...slickSettings}>
            {project.pictures.map((picture, index) => (
              <div className="project-slide" key={index}>
                <img src={picture} alt={`projet ${index + 1}`} />
              </div>
            ))}
          </Slider>
        </div>
        <h1 className="project-title">{project.title}</h1>
        <p className="project-description">{project.description}</p>
        <div className="project-tags">
          <ul className="project-tags-list">
            {project.tags.map((tag, index) => (
              <li className="project-tag" key={index}>
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <ReturnButton />
      </main>
      
    </section>
    <Footer />
    </div>
  );
}

export default Project;
