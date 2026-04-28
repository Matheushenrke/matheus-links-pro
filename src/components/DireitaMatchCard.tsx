import { ArrowUpRight, Check } from "lucide-react";
import logo from "@/assets/direita-match-logo.png";

const features = [
  "Filtro de fé e valores: cristão, conservador, patriota e família",
  "Perfil blindado: verificação de identidade e moderação ativa",
  "Algoritmo sem viés ideológico — match por princípios reais",
  "Chat com matches, compartilhamento de perfil e denúncia em 1 toque",
  "Plano gratuito com 20 curtidas/dia · Premium com curtidas ilimitadas",
  "Cadastro em minutos via Google ou e-mail, sem cartão",
];

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
          No ar · Fase Beta
        </span>
      </div>

      <h3 className="mt-5 text-lg font-bold text-ink">Direita Match</h3>
      <p className="mt-1 text-xs uppercase tracking-wider text-ink-muted font-semibold">
        O 1º app de relacionamento conservador do Brasil
      </p>
      <p className="mt-3 text-sm text-ink-soft leading-relaxed">
        Construído sobre fé, família e pátria. Conecta pessoas que compartilham
        os mesmos valores — em um ambiente seguro, moderado e livre de
        militância. Build in public, fundado por mim.
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
        Grátis para começar
      </p>
      <p className="text-xs text-ink-soft">
        Vagas limitadas na fase beta · entre antes que feche
      </p>

      <a
        href="https://app.direitamatch.com.br/login"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-brand text-brand-foreground px-4 py-3 text-sm font-semibold hover:scale-[1.02] hover:shadow-lg hover:shadow-brand/20 transition-all"
      >
        Acessar o app
        <ArrowUpRight className="w-4 h-4" />
      </a>

      <a
        href="https://www.direitamatch.com.br/"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 text-center text-xs font-medium text-ink-soft hover:text-ink underline underline-offset-4 transition-colors"
      >
        Conhecer o projeto
      </a>

      <p className="mt-4 pt-4 border-t border-border/60 text-[11px] leading-relaxed text-ink-muted">
        Membros que entram na{" "}
        <span className="font-semibold text-ink-soft">fase beta</span> recebem o
        selo de Membro Fundador — exclusivo para os primeiros usuários.
      </p>
    </article>
  );
};
