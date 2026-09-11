import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const FORM_ID = "97ESQOlaYukbvZ68KZLN";

/** Diálogo com o formulário de solicitação de material (CRM). */
export function MaterialFormDialog({
  trigger,
  title = "Solicitar Material",
}: {
  trigger: ReactNode;
  title?: string;
}) {
  const [open, setOpen] = useState(false);
  const scriptAddedRef = useRef(false);

  useEffect(() => {
    if (!open || scriptAddedRef.current) return;
    scriptAddedRef.current = true;
    if (
      document.querySelector(
        'script[src="https://links.l3adup.com/js/form_embed.js"]',
      )
    )
      return;
    const script = document.createElement("script");
    script.src = "https://links.l3adup.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="flex max-h-[92vh] w-[95vw] max-w-[640px] flex-col overflow-hidden p-0 sm:max-w-[640px]">
        <DialogHeader className="px-6 pt-6">
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <div className="min-h-0 flex-1 w-full overflow-y-auto px-2 pb-4 sm:px-4">
          <iframe
            src={`https://links.l3adup.com/widget/form/${FORM_ID}`}
            style={{
              width: "100%",
              height: "847px",
              border: "none",
              borderRadius: "8px",
            }}
            id={`inline-${FORM_ID}`}
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="Form - E-books"
            data-height="847"
            data-layout-iframe-id={`inline-${FORM_ID}`}
            data-form-id={FORM_ID}
            title="Form - E-books"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
