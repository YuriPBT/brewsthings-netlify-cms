import { DiscussionEmbed } from "disqus-react";
import { useRouter } from "next/router";

export default function DisqusComments({
  identifier,
  title
}: {
  identifier: string;
  title: string;
}) {
  const router = useRouter();
  const shortname = process.env.NEXT_PUBLIC_DISQUS_SHORTNAME || "";
  if (!shortname) return null;
  return (
    <div style={{ marginTop: 24 }}>
      <DiscussionEmbed
        shortname={shortname}
        config={{
          url: typeof window !== "undefined" ? window.location.href : `https://example.com${router.asPath}`,
          identifier,
          title,
          language: "it"
        }}
      />
    </div>
  );
}