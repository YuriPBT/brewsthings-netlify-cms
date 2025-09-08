import Image from "next/image";
import { getAllByCategory, getDoc } from "../../lib/content";
import { renderMDX, MDXContent } from "../../lib/mdx";
import DisqusComments from "../../components/DisqusComments";

export async function getStaticPaths() {
  const items = getAllByCategory("tutorial");
  const paths = items.map((it:any)=>({ params: { slug: it.front.slug }}));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }: any) {
  const { front, content } = getDoc("tutorial", params.slug);
  const mdx = await renderMDX(content);
  return { props: { front, mdx } };
}

export default function Detail({ front, mdx }: any) {
  return (
    <article className="card">
      {front.cover && (
        <div style={{ position:"relative", width:"100%", height: 320 }}>
          <Image src={front.cover} alt={front.title} fill sizes="100vw" priority />
        </div>
      )}
      <div className="card-body">
        <div className="card-meta"><time>{front.date}</time>{front.tags?.length?<> Â· {front.tags.join(", ")}</> : null}</div>
        <h1 className="card-title" style={{ fontSize: "1.6rem" }}>{front.title}</h1>
        <MDXContent source={mdx} />
      </div>
      {front.comments !== false && (
        <div className="card-body">
          <DisqusComments identifier={"/tutorial/" + front.slug} title={front.title} />
        </div>
      )}
    </article>
  );
}