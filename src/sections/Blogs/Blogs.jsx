import styles from './BlogsStyles.module.css';

const blogPosts = [
  {
    title: 'GSoC 2025 Week 1: Diving Into Verilog with CircuitVerse',
    link: 'https://medium.com/@vk092kumar/gsoc-2025-week-1-diving-into-verilog-with-circuitverse-6dab1a1bbf77',
    description: 'Weekly notes and progress from the CircuitVerse GSoC work.',
    source: 'Medium',
  },
  {
    title:
      'GSoC 2025 Community Bonding Period with CircuitVerse: My Journey So Far',
    link: 'https://medium.com/@vk092kumar/gsoc-2025-community-bonding-period-with-circuitverse-my-journey-so-far-cab819bec02e',
    description: 'Community bonding updates and early journey notes from GSoC 2025.',
    source: 'Medium',
  },
  {
    title: 'Enhanced Verilog Support & Stability: GSoC 2025 Final Report',
    link: 'https://blog.circuitverse.org/posts/vivek_kumar_gsoc2025_finalreport/',
    description: 'Final report covering Verilog support improvements and stability work.',
    source: 'CircuitVerse Blog',
  },
];

function Blogs() {
  return (
    <section id="blogs" className={styles.container}>
      <h1 className="sectionTitle">Blogs</h1>
      <div className={styles.grid}>
        {blogPosts.map((post) => (
          <article key={post.title} className={styles.card}>
            <h3>{post.title}</h3>
            <p>{post.description}</p>
            <a href={post.link} target="_blank" rel="noreferrer">
              Read on {post.source}
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Blogs;
