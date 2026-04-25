import { ArrowUpRight } from "lucide-react";
import logo from "@/assets/direita-match-logo.png";

export const DireitaMatchCard = () => {
  return (
    <article className="card-soft p-6 sm:p-7 flex flex-col h-full transition-transform hover:-translate-y-0.5">
      <div className="flex items-center justify-between">
        <div className="w-14 h-14 rounded-xl grid place-items-center bg-white border border-border/60 overflow-hidden">
          <img
            src={logo}
            alt="Logo Direita Match"
            className="w-11 h-11 object-contain"
          />
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 text-emerald-700 px-3 py-1 text-xs font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          No ar
        </span>
      </div>

      <h3 className="mt-5 text-lg font-bold text-ink">Direita Match</h3>
      <p className="mt-2 text-sm text-ink-soft leading-relaxed flex-1">
        O primeiro app de relacionamento conservador do Brasil. Conectando
        valores e pessoas — em build in public.
      </p>

      <p className="mt-4 text-sm font-medium text-brand">Disponível</p>

      <a
        href="https://www.direitamatch.com.br/"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-brand text-brand-foreground px-4 py-3 text-sm font-semibold hover:scale-[1.02] hover:shadow-lg hover:shadow-brand/20 transition-all"
      >
        Acessar app
        <ArrowUpRight className="w-4 h-4" />
      </a>
    </article>
  );
};
