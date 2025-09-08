import { TinaProvider, TinaCMS } from "tinacms";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { useMemo } from "react";

export default function Admin({ children }: { children?: React.ReactNode }) {
  // Inizializza il CMS solo una volta
  const cms = useMemo(
    () =>
      new TinaCMS({
        enabled: true, // abilita l'editing
        sidebar: true, // mostra la sidebar
        toolbar: true, // mostra la toolbar
      }),
    []
  );

  return (
    <TinaProvider cms={cms}>
      {children ? children : <p>Interfaccia di amministrazione TinaCMS pronta.</p>}
    </TinaProvider>
  );
}
