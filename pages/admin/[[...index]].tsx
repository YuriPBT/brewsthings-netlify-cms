import dynamic from "next/dynamic";

// Importa Admin solo lato client
const AdminComponent = dynamic(() => import("../../components/Admin"), {
  ssr: false,
});

export default function AdminPage() {
  return <AdminComponent />;
}
