import Link from '@docusaurus/Link';
import {
  useCurrentSidebarSiblings,
  useDocsVersion,
} from '@docusaurus/plugin-content-docs/client';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const defaultImage = '/img/docusaurus-social-card.jpg';

function flattenSidebarItems(items) {
  return items.flatMap((item) => {
    if (item.type === 'category') {
      return flattenSidebarItems(item.items);
    }

    return [item];
  });
}

function getPostDate(docId) {
  const match = docId.match(/^(\d{4}-\d{2}-\d{2})/);
  return match?.[1];
}

function useBlogPosts() {
  const version = useDocsVersion();
  const sidebarItems = flattenSidebarItems(useCurrentSidebarSiblings());

  return sidebarItems
    .filter((item) => item.type === 'link' && item.docId !== 'intro' && !item.unlisted)
    .map((item) => {
      const doc = version.docs[item.docId];
      const date = getPostDate(item.docId);

      return {
        title: doc?.title ?? item.label,
        href: item.href,
        date,
        image: defaultImage,
        description: doc?.description ?? '',
      };
    });
}

function BlogCard({title, href, date, image, description}) {
  return (
    <Link className={styles.card} to={href}>
      <div className={styles.mediaWrap}>
        <img className={styles.media} src={image} alt="" loading="lazy" />
      </div>
      <div className={styles.cardBody}>
        <div className={styles.meta}>
          {date ? <time dateTime={date}>{date}</time> : <span>Blog</span>}
        </div>
        <Heading as="h2">{title}</Heading>
        <p>{description}</p>
      </div>
    </Link>
  );
}

export default function BlogIndex() {
  const posts = useBlogPosts();

  return (
    <div className={styles.blogIndex}>
      <section className={styles.header}>
        <div>
          <p className={styles.eyebrow}>Blog</p>
          <Heading as="h1">文章与杂谈</Heading>
          <p>
            较长的文章、项目复盘和技术无关杂谈。这里保留 Blog 自己的图文展示，
            但侧边栏和上一篇/下一篇切换沿用 Diary 的文档体验。
          </p>
        </div>
        <img
          className={styles.headerImage}
          src="/img/docusaurus-social-card.jpg"
          alt=""
          loading="lazy"
        />
      </section>

      <section className={styles.postList} aria-label="Blog posts">
        {posts.length > 0 ? (
          posts.map((post) => <BlogCard key={post.href} {...post} />)
        ) : (
          <p className={styles.empty}>还没有可见文章。</p>
        )}
      </section>
    </div>
  );
}
