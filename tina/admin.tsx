// /tina/admin.tsx
import { TinaProvider, TinaCMS } from "tinacms";
import { useMemo } from "react";

export default function Admin({ children }: { children?: React.ReactNode }) {
  if (typeof window === "undefined") {
    return null;
  }

  const cms = useMemo(
    () =>
      new TinaCMS({
        enabled: true, // abilita l'editing
        sidebar: true, // mostra la sidebar
      }),
    []
  );

  return (
    <TinaProvider cms={cms}>
      {children ? children : <p>Interfaccia di amministrazione TinaCMS pronta.</p>}
    </TinaProvider>
  );
}
