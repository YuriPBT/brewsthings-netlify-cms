// pages/admin/index.tsx
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function AdminRedirect() {
  const router = useRouter();
  useEffect(() => {
    router.push("/admin/");
  }, [router]);
  return null;
}
