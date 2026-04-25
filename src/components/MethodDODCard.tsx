import { ArrowUpRight, Wrench, Package, Crown } from "lucide-react";

const pillars = [
  {
    icon: Package,
    title: "Destrava Produto",
    desc: "Lançamento do seu produto digital, do zero ao primeiro 6 dígitos.",
  },
  {
    icon: Wrench,
    title: "Destrava Ferramenta",
    desc: "Stack completa de ferramentas, atalhos e insights de mercado.",
  },
  {
    icon: Crown,
    title: "Destrava Elite",
    desc: "Consultoria de alto nível para escalar com previsibilidade.",
  },
];

export const MethodDODCard = () => {
  return (
    <article className="card-soft p-6 sm:p-7 flex flex-col h-full transition-transform hover:-translate-y-0.5">
      <div className="flex items-center justify-between">
        <div className="w-14 h-14 rounded-xl grid place-items-center bg-zinc-900 text-white border border-border/60 font-extrabold text-lg tracking-tight">
          DOD
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 text-amber-700 px-3 py-1 text-xs font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
          Em breve
        </span>
      </div>

      <h3 className="mt-5 text-lg font-bold text-ink">Método D.O.D</h3>
      <p className="mt-1 text-xs uppercase tracking-wider text-ink-muted font-semibold">
        Destrava ou Desiste
      </p>
      <p className="mt-3 text-sm text-ink-soft leading-relaxed">
        O sistema definitivo de lançamento e estratégia digital, dividido em
        três frentes:
      </p>

      <ul className="mt-4 space-y-3 flex-1">
        {pillars.map(({ icon: Icon, title, desc }) => (
          <li key={title} className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg grid place-items-center bg-secondary text-ink shrink-0">
              <Icon className="w-4 h-4" strokeWidth={2.2} />
            </div>
            <div>
              <p className="text-sm font-semibold text-ink leading-tight">{title}</p>
              <p className="mt-0.5 text-xs text-ink-soft leading-relaxed">{desc}</p>
            </div>
          </li>
        ))}
      </ul>

      <a
        href="https://api.whatsapp.com/send/?phone=5565992843701&text=Fala+Matheus%2C+quero+entrar+na+lista+do+M%C3%A9todo+D.O.D"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-primary text-primary-foreground px-4 py-3 text-sm font-semibold hover:scale-[1.02] hover:shadow-lg hover:shadow-black/10 transition-all"
      >
        Entrar na lista de espera
        <ArrowUpRight className="w-4 h-4" />
      </a>
    </article>
  );
};
