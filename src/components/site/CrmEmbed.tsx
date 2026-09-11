import { useEffect, useRef } from "react";

/**
 * Formulário de captura de leads integrado via iframe do CRM.
 * Substitui o slot placeholder pelo formulário real fornecido pelo CRM.
 *
 * Props permitem identificar a origem do lead (ex: "material:ebook-x").
 */
export function CrmEmbed({
  source,
  title = "Preencha para receber",
}: {
  source: string;
  title?: string;
}) {
  const scriptAddedRef = useRef(false);

  useEffect(() => {
    if (scriptAddedRef.current) return;
    const existing = document.querySelector(
      'script[src="https://links.l3adup.com/js/form_embed.js"]',
    );
    if (existing) return;
    const script = document.createElement("script");
    script.src = "https://links.l3adup.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);
    scriptAddedRef.current = true;
  }, []);

  return (
    <div className="rounded-2xl border border-border bg-card px-6 py-5 shadow-sm">
      <h3 className="text-center text-lg font-semibold">{title}</h3>

      <div className="mt-3 w-full overflow-hidden">
        <iframe
          src="https://links.l3adup.com/widget/form/bLd0axabAaCWQ7Wf8oD7"
          style={{
            width: "100%",
            minHeight: "760px",
            border: "none",
            borderRadius: "3px",
            display: "block",
          }}
          scrolling="no"
          id="inline-bLd0axabAaCWQ7Wf8oD7"
          data-layout="{'id':'INLINE'}"
          data-trigger-type="alwaysShow"
          data-trigger-value=""
          data-activation-type="alwaysActivated"
          data-activation-value=""
          data-deactivation-type="neverDeactivate"
          data-deactivation-value=""
          data-form-name="Formulário - Contato "
          data-height="717"
          data-layout-iframe-id="inline-bLd0axabAaCWQ7Wf8oD7"
          data-form-id="bLd0axabAaCWQ7Wf8oD7"
          title="Formulário - Contato "
        />
      </div>
    </div>
  );
}
