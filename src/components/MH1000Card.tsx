import { ArrowUpRight, Check } from "lucide-react";
import logo from "@/assets/mh1000-logo.png";

const features = [
  "Funis em mapa mental: lançamento, perpétuo e webinário",
  "IA estrategista: keywords, concorrentes, copy A/B e funis (PT/EN/ES)",
  "Repositório por projeto: docs, textos, imagens, senhas e redes",
  "Calendário, anotações rápidas e modo foco com playlist",
  "Compartilhamento por link público ou convite (view/edit)",
  "PWA — instala no celular e desktop, funciona offline",
];

export const MH1000Card = () => {
  return (
    <article className="card-soft p-6 sm:p-7 flex flex-col h-full transition-transform hover:-translate-y-0.5">
      <div className="flex items-center justify-between">
        <div className="w-14 h-14 rounded-xl grid place-items-center bg-black border border-border/60 overflow-hidden">
          <img
            src={logo}
            alt="Logo MH.1000"
            className="w-11 h-11 object-contain"
          />
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 text-emerald-700 px-3 py-1 text-xs font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          No ar
        </span>
      </div>

      <h3 className="mt-5 text-lg font-bold text-ink">MH.1000</h3>
      <p className="mt-1 text-xs uppercase tracking-wider text-ink-muted font-semibold">
        A central do estrategista digital
      </p>
      <p className="mt-3 text-sm text-ink-soft leading-relaxed">
        Plataforma premium que reúne tudo que estrategista, copywriter ou
        lançador precisa para operar com clareza — funis, IA, repositório,
        agenda e foco em um só lugar.
      </p>

      <ul className="mt-4 space-y-2.5 flex-1">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-3 text-sm text-ink-soft">
            <Check
              className="w-4 h-4 mt-0.5 text-ink shrink-0"
              strokeWidth={2.5}
            />
            <span className="leading-relaxed">{f}</span>
          </li>
        ))}
      </ul>

      <p className="mt-5 text-sm font-semibold text-ink">
        A partir de R$ 29/mês
      </p>
      <p className="text-xs text-ink-soft">
        7 dias grátis sem cartão · cancele quando quiser
      </p>

      <a
        href="https://funnel-forge-47.lovable.app"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-primary text-primary-foreground px-4 py-3 text-sm font-semibold hover:scale-[1.02] hover:shadow-lg hover:shadow-black/10 transition-all"
      >
        Acessar a plataforma
        <ArrowUpRight className="w-4 h-4" />
      </a>

      <a
        href=""
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 text-center text-xs font-medium text-ink-soft hover:text-ink underline underline-offset-4 transition-colors"
      >
        {" "}
      </a>

      <p className="mt-4 pt-4 border-t border-border/60 text-[11px] leading-relaxed text-ink-muted">
        Quem fechar comigo como expert ou adquirir o método{" "}
        <span className="font-semibold text-ink-soft">D.O.D — Destrava ou Desiste</span>{" "}
        ganha acesso vitalício.
      </p>
    </article>
  );
};
