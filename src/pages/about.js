import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import {siteFeatures} from '@site/src/data/siteFeatures';
import styles from './about.module.css';

const sections = [
  {
    title: 'Notes',
    href: '/docs/intro',
    description: 'Course notes and technical references collected while learning.',
  },
  {
    title: 'Reading',
    href: '/reading/intro',
    description: 'Reading notes for papers, blogs, and etc.',
  },
  {
    title: 'Toy',
    href: '/toy/intro',
    description: 'Small explorations for new languages, plugins, and tools.',
  },
  {
    title: 'Diary',
    href: '/diary/intro',
    description: 'Shorter timeline notes and day-to-day records.',
  },
];

function SectionLink({title, href, description}) {
  return (
    <Link className={styles.sectionLink} to={href}>
      <Heading as="h2">{title}</Heading>
      <p>{description}</p>
    </Link>
  );
}

export default function About() {
  return (
    <Layout title="About Me" description="About key4127 and this site">
      <main className={styles.page}>
        <section className={styles.intro}>
          <p className={styles.eyebrow}>About Me</p>
          <Heading as="h1">key4127</Heading>
          <p className={styles.summary}>
            This site is a working archive for notes, paper reading, experiments,
            and diary entries.
          </p>
          <div className={styles.actions}>
            {siteFeatures.blog && (
              <Link className="button button--primary" to="/blog/intro">
                Read Blog
              </Link>
            )}
            <Link className="button button--secondary" href="https://github.com/key4127">
              GitHub
            </Link>
          </div>
        </section>

        <section className={styles.sections} aria-label="Site sections">
          {sections.map((section) => (
            <SectionLink key={section.title} {...section} />
          ))}
        </section>
      </main>
    </Layout>
  );
}
