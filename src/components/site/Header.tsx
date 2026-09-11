import { Link, useRouterState } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-pensecom-laranja.png.asset.json";

export const BLOG_URL = "https://pensecom.com.br/site/blog/";

const nav = [
  { to: "/", label: "Home" },
  { to: "/sobre", label: "Sobre" },
  { to: "/servicos", label: "Serviços" },
  { to: "/materiais", label: "Materiais" },
  { to: "/contato", label: "Contato" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const router = useRouterState();
  const isHome = router.location.pathname === "/";

  return (
    <header className={cn(
      "z-40 w-full transition-colors",
      isHome 
        ? "absolute top-0 left-0 bg-transparent border-none"
        : "sticky top-0 border-b border-border bg-background/85 backdrop-blur"
    )}>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2" aria-label="PENSECOM">
          <img src={logo.url} alt="PENSECOM" className={cn("h-8 w-auto", isHome && "brightness-0 invert")} />
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={cn("text-sm font-medium transition-colors hover:opacity-100", isHome ? "text-white/80 hover:text-white" : "text-foreground/70 hover:text-foreground")}
              activeProps={{ className: isHome ? "text-white" : "text-foreground" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={BLOG_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={cn("text-sm font-medium transition-colors hover:opacity-100", isHome ? "text-white/80 hover:text-white" : "text-foreground/70 hover:text-foreground")}
          >
            Blog
          </a>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/curriculos"
            className="inline-flex items-center justify-center rounded-full border border-primary px-5 py-2.5 text-sm font-semibold text-primary transition-all hover:bg-primary/10"
          >
            Cadastre seu Currículo
          </Link>
          <Link
            to="/contato"
            className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:shadow-md"
          >
            Fale com a gente
          </Link>
        </div>

        <button
          className={cn("md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg", isHome ? "text-white" : "text-foreground")}
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="mx-auto max-w-7xl px-4 py-3 flex flex-col gap-1">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="rounded-lg px-3 py-2 text-sm font-medium text-foreground/80 hover:bg-muted"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={BLOG_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg px-3 py-2 text-sm font-medium text-foreground/80 hover:bg-muted"
              onClick={() => setOpen(false)}
            >
              Blog
            </a>
            <Link
              to="/curriculos"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full border border-primary px-5 py-2.5 text-sm font-semibold text-primary"
            >
              Cadastre seu Currículo
            </Link>
            <Link
              to="/contato"
              onClick={() => setOpen(false)}
              className="mt-1 inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground"
            >
              Fale com a gente
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}