import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import imagesearch from '../../assets/imagesearch.png';
import freshBurger from '../../assets/fresh-burger.png';
import dmx512 from '../../assets/dmx512A.png';
import hipsster from '../../assets/hipsster.png';
import redbluenim from '../../assets/redbluenimai.png';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={imagesearch}
          link="https://github.com/Kingmaker080598/Dockerized-Image-Search"
          h3="Image Search"
          p="Dockerized Image Search backed with gRPC"
        />
        <ProjectCard
          src={dmx512}
          link="https://github.com/Kingmaker080598/DMX512A"
          h3="Stage Lighting Controller"
          p="Stage lighting Controller built with DMX512"
        />
        <ProjectCard
          src={redbluenim}
          link="https://github.com/Kingmaker080598/A-B-Pruning"
          h3="Red Blue NIM AI"
          p="Game conducted by using α-β pruning"
        />
        <ProjectCard
          src={imagesearch}
          link="https://github.com/Kingmaker080598/Azure-webpage-word-search"
          h3="Word Search webpage"
          p="Webpage performs various text processing tasks"
        />
      </div>
    </section>
  );
}

export default Projects;
