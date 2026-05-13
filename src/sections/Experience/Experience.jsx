import { useState } from 'react';
import styles from './ExperienceStyles.module.css';

const experiences = [
  {
    role: 'Linux Kernel Developer, Vicharak.in',
    location: 'Surat, India',
    duration: 'Aug 2025 – Present',
    bullets: [
      'Worked on board bring-up, Linux driver and controller debugging.',
      'Worked on camera stack integration for Qualcomm and Rockchip.',
      'Built user-level operating system software applications.',
    ],
  },
  {
    role: 'Open Source Developer, Google Summer of Code (CircuitVerse)',
    location: 'remote, India',
    duration: 'May 2025 – Aug 2025',
    bullets: [
      'Worked on the feature that enables conversion of circuits to Verilog and vice-versa and took it to production.',
      'Integrated the Yosys server for CircuitVerse.',
      'Enhanced the simulator and verilog code editor.',
      'Developed the FSM to Circuit tool.',
    ],
  },
  {
    role: 'Software Developer Intern, FOSSEE (eSim)',
    location: 'Mumbai, India',
    duration: 'Nov 2024 – May 2025',
    bullets: [
      'Repackaged Circuit Simulator eSim 2.4 desktop application with new features for the launch of version 2.5.',
      'Created the eSim tool-chain for Ubuntu to manage resources and other improvements.',
    ],
  },
  {
    role: 'Co-founder and CTO, GoBuild',
    location: 'Jammu, India',
    duration: 'Aug 2023 – Dec 2024',
    bullets: [
      'Co-built a construction services platform focused on faster service delivery and easier product access for the construction sector.',
      'Helped raise ₹10 lakhs to scale the product and operations across Jammu.',
      'Led product development for the website, CMS, frontend, backend, and mobile app while supporting AI SaaS tools and the company database.',
      'Contributed to delivering 1,000+ completed projects in Jammu through the platform.',
    ],
  },
];

function Experience() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="experience" className={styles.container}>
      <h1 className="sectionTitle">Experience</h1>
      <div className={styles.timeline}>
        {experiences.map((experience, index) => {
          const isOpen = openIndex === index;

          return (
            <article key={experience.role} className={styles.entry}>
              <div className={styles.markerWrap}>
                <span className={styles.marker} />
                {index !== experiences.length - 1 && <span className={styles.line} />}
              </div>

              <div className={styles.card}>
                <button
                  type="button"
                  className={styles.summary}
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                >
                  <div className={styles.summaryText}>
                    <h3>{experience.role}</h3>
                    <p className={styles.meta}>{experience.location}</p>
                  </div>
                  <div className={styles.summaryAside}>
                    <p className={styles.duration}>{experience.duration}</p>
                    <span className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ''}`}>
                      ›
                    </span>
                  </div>
                </button>

                <div className={`${styles.details} ${isOpen ? styles.detailsOpen : ''}`}>
                  <ul>
                    {experience.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Experience;
