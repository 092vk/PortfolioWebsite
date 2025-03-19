import styles from './FooterStyles.module.css';

function Footer() {
  return (
    <section id="footer" className={styles.container}>
      <p>
        &copy; 2025 Vivek Ray. <br />
        All rights reserved for the Website.
      </p>
    </section>
  );
}

export default Footer;
