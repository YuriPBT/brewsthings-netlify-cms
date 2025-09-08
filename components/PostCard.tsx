import Link from "next/link";
import Image from "next/image";
import styles from "./PostCard.module.css";

export default function PostCard(props: {
  href: string;
  title: string;
  date: string;
  excerpt?: string;
  cover?: string;
  badge?: string;
}) {
  const { href, title, date, excerpt, cover, badge } = props;
  return (
    <article className="card">
      {cover && (
        <div className={styles.cover}>
          <Image src={cover} alt={title} fill priority={false} sizes="(max-width: 980px) 100vw, 50vw" />
        </div>
      )}
      <div className="card-body">
        <div className="card-meta">
          {badge && <span className="badge">{badge}</span>} <time>{date}</time>
        </div>
        <h3 className="card-title"><Link href={href}>{title}</Link></h3>
        {excerpt && <p>{excerpt}</p>}
      </div>
    </article>
  );
}