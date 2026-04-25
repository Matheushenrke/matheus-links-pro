import { Check } from "lucide-react";

const services = [
  "Consultoria e implementação de estratégias internas",
  "Automação de fluxos com IA",
  "Treinamento da equipe técnica",
  "Gestão de projetos complexos e lançamentos",
];

export const B2BSection = () => {
  return (
    <section className="relative overflow-hidden rounded-2xl bg-ink text-primary-foreground p-7 sm:p-9 h-full flex flex-col">
      {/* faint decorative grid */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative">
        <h3 className="text-xl font-semibold">Para sua empresa</h3>
        <p className="mt-3 text-white/70 leading-relaxed">
          Implemento fluxos de lançamento e estratégia na sua equipe:
          automações, agentes internos e treinamento personalizado.
        </p>

        <h4 className="mt-7 text-4xl sm:text-5xl font-extrabold tracking-tight">
          Personalizado
        </h4>
        <p className="mt-1 text-sm text-white/60">
          Preços adaptados às suas necessidades
        </p>

        <ul className="mt-6 space-y-2.5 flex-1">
          {services.map((s) => (
            <li key={s} className="flex items-start gap-3 text-sm text-white/85">
              <Check className="w-4 h-4 mt-0.5 text-white shrink-0" strokeWidth={2.5} />
              <span>{s}</span>
            </li>
          ))}
        </ul>

        <a
          href="https://api.whatsapp.com/send/?phone=5565992843701&text=Fala+Matheus%2C+quero+conversar+sobre+um+projeto+para+minha+empresa"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-7 block w-full text-center rounded-xl bg-white text-ink px-5 py-3.5 text-sm font-semibold hover:scale-[1.02] hover:shadow-xl hover:shadow-white/10 transition-all"
        >
          Agendar Consultoria
        </a>
      </div>
    </section>
  );
};
