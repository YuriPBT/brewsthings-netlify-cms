import Head from "next/head";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";
import styles from "./Layout.module.css";
import "../styles/globals.css";
import Link from "next/link";
import { useRouter } from "next/router";
import Script from "next/script";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { pathname } = useRouter();
  const isActive = (href: string) => pathname.startsWith(href);
  return (
    <>
      <DefaultSeo {...SEO} />
      <Script
        id="ga"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          if ('${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || ""}') {
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}', { send_page_view: true });
          }
        `}}
      />
      {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
        <Script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`} />
      )}
      <header className="header">
        <div className="container nav">
          <div className="logo">
            <img src="/placeholder-logo.svg" alt="Brewthings" />
            <strong>Brewthings</strong>
          </div>
          <nav className="menu" aria-label="Principale">
            <Link className={isActive("/post") ? "active" : ""} href="/post">Post</Link>
            <Link className={isActive("/schede-tecniche") ? "active" : ""} href="/schede-tecniche">Schede tecniche</Link>
            <Link className={isActive("/recensioni") ? "active" : ""} href="/recensioni">Recensioni</Link>
            <Link className={isActive("/tutorial") ? "active" : ""} href="/tutorial">Tutorial</Link>
          </nav>
        </div>
      </header>
      <main className={`container ${styles.main}`}>
        {children}
      </main>
      <footer className="footer">
        Â© {new Date().getFullYear()} Brewthings. Tutti i diritti riservati.
      </footer>
    </>
  );
}