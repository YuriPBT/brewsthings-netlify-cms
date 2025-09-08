import Link from "next/link";

export default function Home() {
  return (
    <div className="grid-rev">
      <section>
        <h1>Benvenuto su Brewthings</h1>
        <p>Inizia esplorando le categorie:</p>
        <p>
          <Link className="btn" href="/post">Vai ai Post</Link>
        </p>
      </section>
      <aside className="sidebar">
        <div className="widget">
          <strong>Chi siamo</strong>
          <p>Birra. Passione. Tecnica. Recensioni, schede tecniche e tutorial.</p>
        </div>
      </aside>
    </div>
  );
}