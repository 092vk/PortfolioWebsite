import styles from './ProjectsStyles.module.css';
import DrShaboinky from '../../assets/DrShaboinky.avif';
import batteryHealth from '../../assets/batteryHealth.jpg';
import GigaLego from '../../assets/GigaLego.svg';
import farmy from '../../assets/farmy.webp';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={DrShaboinky}
          link="https://healthchatbot-dr-shaboinky-2.onrender.com/"
          h3="Dr. Shaboinky"
          p="Medical Chatbot"
        />
        <ProjectCard
          src={batteryHealth}
          link="https://github.com/092vk/SOH_RUL_Estimation"
          h3="Battery Health Predictor"
          p="Predicts SOH & RUL of Li Battery"
        />
        <ProjectCard
          src={GigaLego}
          link="https://gigalegoconstruction.com/"
          h3="GigaLego"
          p="GigaLegoConstruction"
        />
        <ProjectCard
          src={farmy}
          link="https://main--earnest-lily-fd0061.netlify.app/"
          h3="Farmy"
          p="Farmers App"
        />
      </div>
    </section>
  );
}

export default Projects;
