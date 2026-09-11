import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { CheckCircle2, UploadCloud } from "lucide-react";
import bannerImg from "@/assets/curriculos-banner.jpg";

export const Route = createFileRoute("/curriculos")({
  head: () => ({
    meta: [
      { title: "Cadastre seu Currículo — PENSECOM" },
      {
        name: "description",
        content:
          "Envie seu currículo para o banco de talentos da PENSECOM e participe dos nossos processos seletivos.",
      },
      { property: "og:title", content: "Cadastre seu Currículo — PENSECOM" },
      {
        property: "og:description",
        content:
          "Faça parte do banco de talentos da PENSECOM: preencha seus dados e envie seu currículo.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CurriculosPage,
});

const MAX_SIZE = 10 * 1024 * 1024;
const ACCEPT = ".pdf,.docx,.png,.jpg,.jpeg";

function CurriculosPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [fileName, setFileName] = useState<string>("");
  const [fileError, setFileError] = useState<string>("");
  const [done, setDone] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (fileError) return;
    setDone(true);
    formRef.current?.reset();
    setFileName("");
  }

  return (
    <SiteLayout>
      <section className="relative overflow-hidden bg-primary">
        <div className="absolute inset-0">
          <img
            src={bannerImg}
            alt="Candidata sorrindo ao entregar seu currículo em uma entrevista de emprego"
            width={1600}
            height={1008}
            className="h-full w-full object-cover object-right"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/20" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="max-w-2xl text-primary-foreground">
            <span className="inline-flex rounded-full bg-primary-foreground/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider backdrop-blur">
              Banco de talentos
            </span>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
              Cadastre seu currículo
            </h1>
            <p className="mt-5 text-lg text-primary-foreground/90">
              Faça parte do nosso banco de talentos e seja considerado nos
              processos seletivos conduzidos pela PENSECOM.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:py-16">
        <p className="text-muted-foreground">
          Este formulário é direcionado para pessoas que desejam cadastrar seus
          currículos em busca de uma vaga. Por favor, preencha seus dados
          corretamente e faça o upload do currículo em um dos formatos válidos
          (PDF, DOCX, JPEG, JPG, PNG). Os arquivos devem ter no máximo 10MB.
        </p>

        <form
          ref={formRef}
          onSubmit={onSubmit}
          className="mt-8 grid gap-5 rounded-2xl border border-border bg-card p-6 shadow-sm sm:grid-cols-2 sm:p-8"
        >
          <div className="sm:col-span-2">
            <Label htmlFor="nome">Nome</Label>
            <Input id="nome" name="nome" required className="mt-2" autoComplete="name" />
          </div>
          <div>
            <Label htmlFor="email">E-mail</Label>
            <Input id="email" name="email" type="email" required className="mt-2" autoComplete="email" />
          </div>
          <div>
            <Label htmlFor="celular">Celular</Label>
            <Input id="celular" name="celular" type="tel" required className="mt-2" autoComplete="tel" />
          </div>
          <div>
            <Label htmlFor="cidade">Cidade / Estado</Label>
            <Input id="cidade" name="cidade" required className="mt-2" />
          </div>
          <div>
            <Label htmlFor="idade">Idade</Label>
            <Input id="idade" name="idade" type="number" min={14} max={99} required className="mt-2" />
          </div>

          <div className="sm:col-span-2">
            <Label htmlFor="curriculo">
              Currículo (tamanho máx. 10MB — PDF, DOCX, PNG ou JPEG)
            </Label>
            <label
              htmlFor="curriculo"
              className="mt-2 flex cursor-pointer items-center gap-3 rounded-lg border border-dashed border-border bg-muted/40 px-4 py-4 text-sm text-muted-foreground transition hover:border-primary/50 hover:text-foreground"
            >
              <UploadCloud className="h-5 w-5 shrink-0 text-primary" />
              <span>{fileName || "Selecionar arquivo"}</span>
            </label>
            <input
              id="curriculo"
              name="curriculo"
              type="file"
              accept={ACCEPT}
              required
              className="sr-only"
              onChange={(e) => {
                const f = e.target.files?.[0];
                if (!f) {
                  setFileName("");
                  setFileError("");
                  return;
                }
                if (f.size > MAX_SIZE) {
                  setFileError("O arquivo deve ter no máximo 10MB.");
                } else {
                  setFileError("");
                }
                setFileName(f.name);
              }}
            />
            {fileError && (
              <p className="mt-2 text-sm text-destructive">{fileError}</p>
            )}
          </div>

          <div className="sm:col-span-2">
            <Label htmlFor="vaga">Código da vaga (opcional)</Label>
            <Input id="vaga" name="vaga" className="mt-2" />
          </div>

          <div className="sm:col-span-2">
            <Button type="submit" size="lg" className="w-full rounded-full sm:w-auto">
              Enviar
            </Button>
          </div>
        </form>
      </section>

      <Dialog open={done} onOpenChange={setDone}>
        <DialogContent className="max-w-md text-center">
          <DialogHeader className="items-center">
            <CheckCircle2 className="h-12 w-12 text-primary" />
            <DialogTitle className="mt-2">Currículo enviado com sucesso!</DialogTitle>
            <DialogDescription>
              Obrigado por se cadastrar no banco de talentos da PENSECOM. Seus
              dados foram recebidos e, havendo uma vaga compatível com o seu
              perfil, nossa equipe entrará em contato.
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:justify-center">
            <Button variant="outline" onClick={() => setDone(false)} className="rounded-full">
              Fechar
            </Button>
            <Button asChild className="rounded-full">
              <Link to="/">Voltar para a home</Link>
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </SiteLayout>
  );
}
