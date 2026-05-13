import { useState } from 'react';
import styles from './NavbarStyles.module.css';

const links = [
  { label: 'Home', href: '#hero' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Blogs', href: '#blogs' },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeNav = () => setIsOpen(false);

  return (
    <header className={styles.container}>
      <button
        type="button"
        className={styles.toggleButton}
        aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={isOpen}
        aria-controls="primary-navigation"
        onClick={() => setIsOpen((open) => !open)}
      >
        <span />
        <span />
        <span />
      </button>

      <div
        className={`${styles.backdrop} ${isOpen ? styles.backdropOpen : ''}`}
        onClick={closeNav}
        aria-hidden="true"
      />

      <nav
        id="primary-navigation"
        aria-label="Primary"
        className={`${styles.nav} ${isOpen ? styles.navOpen : ''}`}
      >
        {links.map((link) => (
          <a
            key={link.href}
            className={styles.link}
            href={link.href}
            onClick={closeNav}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

export default Navbar;
