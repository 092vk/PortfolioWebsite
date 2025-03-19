import styles from './SkillsStyles.module.css';
import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import SkillList from '../../common/SkillList';
import { useTheme } from '../../common/ThemeContext';

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="HTML" />
        <SkillList src={checkMarkIcon} skill="CSS" />
        <SkillList src={checkMarkIcon} skill="JavaScript" />
        <SkillList src={checkMarkIcon} skill="TypeScript" />
        <SkillList src={checkMarkIcon} skill="Node JS" />
        <SkillList src={checkMarkIcon} skill="Express JS" />
        <SkillList src={checkMarkIcon} skill="NEXT JS" />
        <SkillList src={checkMarkIcon} skill="React JS" />
        <SkillList src={checkMarkIcon} skill="Vue JS" />
        <SkillList src={checkMarkIcon} skill="Tailwind & Bootstrap CSS" />
      </div>
      <hr />
      <div className={styles.skillList}>

        <SkillList src={checkMarkIcon} skill="Machine Learning" />
        <SkillList src={checkMarkIcon} skill="Artificial Inteligence" />
        <SkillList src={checkMarkIcon} skill="Verilog & VLSI" />
        <SkillList src={checkMarkIcon} skill="Signal Processing" />
        <SkillList src={checkMarkIcon} skill="MATLAB" />
        <SkillList src={checkMarkIcon} skill="IOT and Embedded Systems" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Redux" />
        <SkillList src={checkMarkIcon} skill="Webpack" />
        <SkillList src={checkMarkIcon} skill="Git" />
        <SkillList src={checkMarkIcon} skill="Jest" />
        <SkillList src={checkMarkIcon} skill="Docker" />
        <SkillList src={checkMarkIcon} skill="AWS" />
        <SkillList src={checkMarkIcon} skill="NGINX & APACHE" />
      </div>
    </section>
  );
}

export default Skills;
