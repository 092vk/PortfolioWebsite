import styles from './ProjectsStyles.module.css';
import githubDark from '../../assets/github-dark.svg';
import githubLight from '../../assets/github-light.svg';
import crmImage from '../../assets/image.png';
import gobuildImage from '../../assets/image2.png';
import gobuildAppImage from '../../assets/image3.png';
import { useTheme } from '../../common/ThemeContext';

const projects = [
  {
    title: 'SysMonkey',
    image: 'https://raw.githubusercontent.com/092vk/SysMonkey/main/public/sysMonkey.png',
    description:
      'SysMonkey is a gui-based system monitoring application(inspired by htop) designed specifically for heterogeneous computing boards that combine the CPU with FPGA.',
    github: 'https://github.com/092vk/SysMonkey',
    live: 'https://github.com/092vk/SysMonkey',
  },
  {
    title: 'ROS2_4_Debian',
    image: 'https://raw.githubusercontent.com/092vk/ROS2_4_Debian/main/images/ros2Wrap01.png',
    description:
      'The project aims to allow users to run ros2 in any env which are not supported officialy by ROS2 and to make dependency handling easy for ROS users. It uses a docker based container system with a wrapper. It allows users to select different ROS2 distributions and packages to be installed.',
    github: 'https://github.com/092vk/ROS2_4_Debian',
    live: '#',
  },
  {
    title: 'CRM',
    image: crmImage,
    description:
      'A CRM with a RAG and agentic ai native worflow tools built inside it',
    github: 'https://github.com/GoBuildOrg/CRM_Fr_Suppliers',
    live: 'https://crm-lac-gamma.vercel.app/dashboard',
  },
  {
    title: 'GoBuild',
    image: gobuildImage,
    description:
      'Built a startup and raised 10 lac to solve the problem of quick service and product delievery in construction sector.',
    github: 'https://github.com/GoBuildOrg/GoBuild',
    live: 'https://gobuildprod.netlify.app/',
  },
  {
    title: 'GoBuild App',
    image: gobuildAppImage,
    description:
      'A mobile app for GoBuild that extends the platform experience for users on the go.',
    github: 'https://github.com/GoBuildOrg/GoBuildApp',
    live: 'https://github.com/GoBuildOrg/GoBuildApp',
  },
  {
    title: 'Device Driver for Linux',
    image: 'https://raw.githubusercontent.com/092vk/Char_Device_Driver_Linux/main/p1.png',
    description:
      'It is a Char Device driver for linux kernel, it consists of a dynamic circular queue, that uses IOCTL calls to talk to user programs',
    github: 'https://github.com/092vk/Char_Device_Driver_Linux',
    live: '#',
  },
];

function Projects() {
  const { theme } = useTheme();
  const githubIcon = theme === 'light' ? githubLight : githubDark;

  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.grid}>
        {projects.map((project) => (
          <article key={project.title} className={styles.card}>
            <a className={styles.imageLink} href={project.live} target="_blank" rel="noreferrer">
              <img className={styles.image} src={project.image} alt={project.title} />
            </a>
            <div className={styles.content}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className={styles.links}>
                <a href={project.github} target="_blank" rel="noreferrer" aria-label={`${project.title} GitHub`}>
                  <img src={githubIcon} alt="" />
                </a>
                <a href={project.live} target="_blank" rel="noreferrer" aria-label={`${project.title} live link`}>
                  <span className={styles.external}>↗</span>
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
