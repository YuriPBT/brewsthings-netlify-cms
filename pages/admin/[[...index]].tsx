// /pages/admin/[[...index]].tsx
import dynamic from "next/dynamic";

// Importa il modulo admin solo lato client
const TinaAdmin = dynamic(() => import("../../tina/admin"), {
  ssr: false,
});

export default function AdminPage() {
  return <TinaAdmin />;
}
