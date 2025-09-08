import Link from "next/link";
import Sidebar from "../../components/Sidebar";
import PostCard from "../../components/PostCard";
import { getAllByCategory } from "../../lib/content";

export async function getStaticProps() {
  const items = getAllByCategory("schede-tecniche");
  return { props: { items } };
}

export default function Listing({ items }: any) {
  return (
    <div className="grid">
      <section>
        <h1></h1>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16 }}>
          {items.map((it:any) => (
            <PostCard
              key={it.front.slug}
              href={"/schede-tecniche/" + it.front.slug}
              title={it.front.title}
              date={it.front.date}
              excerpt={it.front.excerpt}
              cover={it.front.cover}
              badge={it.front.tags?.[0]}
            />
          ))}
        </div>
      </section>
      <Sidebar>
        <div className="widget">
          <strong>Filtri</strong>
          <p>Arriveranno filtri per tag/ricerche (client-side).</p>
        </div>
      </Sidebar>
    </div>
  );
}