import { Link } from "@tanstack/react-router";
import { Instagram, Linkedin, Mail, MapPin, Phone, Youtube } from "lucide-react";
import logo from "@/assets/logo-pensecom-laranja.png.asset.json";

export function Footer() {
  return (
    <footer className="footer-gradient text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2">
              <img src={logo.url} alt="PENSECOM" className="h-8 w-auto brightness-0 invert" />
            </Link>
            <p className="mt-4 max-w-sm text-sm text-primary-foreground/85">
              Empresas são feitas de pessoas. Apoiamos empresas a crescerem com
              gente, com RH estratégico 100% remoto.
            </p>
            <div className="mt-5 flex max-w-sm items-start gap-2 text-sm text-primary-foreground/85">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary-foreground" />
              <a
                href="https://www.google.com/maps/search/?api=1&query=R.+Armezinda+de+Ultramar,+146+-+Res.+Santa+Luiza+II,+Nova+Odessa+-+SP,+13387-696"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-foreground hover:underline"
              >
                R. Armezinda de Ultramar, 146 – Res. Santa Luiza II, Nova Odessa
                – SP, 13387-696
              </a>
            </div>
            <div className="mt-3 max-w-sm overflow-hidden rounded-xl border border-primary-foreground/25">
              <iframe
                title="Mapa da localização da PENSECOM em Nova Odessa - SP"
                src="https://www.google.com/maps?q=R.%20Armezinda%20de%20Ultramar%2C%20146%20-%20Res.%20Santa%20Luiza%20II%2C%20Nova%20Odessa%20-%20SP%2C%2013387-696&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-36 w-full border-0"
              />
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-primary-foreground">Navegação</h4>
            <ul className="mt-3 space-y-2 text-sm text-primary-foreground/85">
              <li><Link to="/sobre" className="hover:text-primary-foreground hover:underline">Sobre</Link></li>
              <li><Link to="/servicos" className="hover:text-primary-foreground hover:underline">Serviços</Link></li>
              <li>
                <a
                  href="https://pensecom.com.br/site/blog/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-foreground hover:underline"
                >
                  Blog
                </a>
              </li>
              <li><Link to="/materiais" className="hover:text-primary-foreground hover:underline">Biblioteca</Link></li>
              <li><Link to="/contato" className="hover:text-primary-foreground hover:underline">Contato</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-primary-foreground">Contato</h4>
            <ul className="mt-3 space-y-2 text-sm text-primary-foreground/85">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-primary-foreground" />
                <a href="mailto:contato@pensecom.com.br" className="hover:text-primary-foreground hover:underline">
                  contato@pensecom.com.br
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-primary-foreground" />
                <a href="tel:+551933636047" className="hover:text-primary-foreground hover:underline">
                  (19) 3363-6047
                </a>
              </li>
              <li className="flex items-center gap-2">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-4 w-4 shrink-0 text-primary-foreground">
                  <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 1.8a8.2 8.2 0 1 1-4.2 15.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 0 1 12 3.8Zm-3.3 4c-.2 0-.5.1-.7.4-.2.3-.9.9-.9 2.1s.9 2.4 1 2.6c.1.2 1.7 2.8 4.3 3.8 2.1.8 2.6.7 3 .6.5 0 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.6-.3l-2-1c-.3-.1-.5-.1-.7.1l-.7.9c-.1.2-.3.2-.5.1-.3-.1-1.2-.5-2.2-1.4-.8-.7-1.4-1.6-1.5-1.9-.2-.2 0-.4.1-.5l.4-.5c.2-.2.2-.3.3-.5v-.5l-.9-2c-.2-.5-.4-.5-.6-.5h-.5Z" />
                </svg>
                <a
                  href="https://api.whatsapp.com/send/?phone=5519998393136&text=Ol%C3%A1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-foreground hover:underline"
                >
                  (19) 99839-3136
                </a>
              </li>
              <li>Atendimento híbrido ou 100% remoto - Brasil &amp; exterior</li>
            </ul>
            <div className="mt-5 flex gap-3">
              <a href="https://www.instagram.com/pensecomtalentos/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="rounded-full border border-primary-foreground/30 bg-primary-foreground/10 p-2 text-primary-foreground transition hover:bg-primary-foreground hover:text-primary">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="https://www.linkedin.com/company/pense-com-intelig%C3%AAncia-em-recursos-humanos/posts/?feedView=all" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="rounded-full border border-primary-foreground/30 bg-primary-foreground/10 p-2 text-primary-foreground transition hover:bg-primary-foreground hover:text-primary">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="https://www.youtube.com/@PENSECOMRH" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="rounded-full border border-primary-foreground/30 bg-primary-foreground/10 p-2 text-primary-foreground transition hover:bg-primary-foreground hover:text-primary">
                <Youtube className="h-4 w-4" />
              </a>
              <a href="https://www.tiktok.com/@pensecomrh" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="rounded-full border border-primary-foreground/30 bg-primary-foreground/10 p-2 text-primary-foreground transition hover:bg-primary-foreground hover:text-primary">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-4 w-4">
                  <path d="M16.5 3a5.6 5.6 0 0 0 4.5 4.4v2.7a8.3 8.3 0 0 1-4.4-1.4v6.1a5.9 5.9 0 1 1-5.9-5.9c.3 0 .6 0 .9.1v2.8a3.1 3.1 0 1 0 2.2 3V3h2.7Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-2 border-t border-primary-foreground/25 pt-6 text-xs text-primary-foreground/85 sm:flex-row">
          <p>
            © {new Date().getFullYear()} PENSECOM. Todos os direitos reservados.
            <br />
            Empresas são feitas de Pessoas.
          </p>
          <p className="sm:text-right">
            Desenvolvido por{" "}
            <a
              href="http://l3marketing.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary-foreground hover:underline"
            >
              L3 Marketing
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
