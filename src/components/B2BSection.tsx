import { Check, ArrowUpRight } from "lucide-react";
import { trackContact } from "@/lib/tracking";
import { getWhatsAppLink } from "@/lib/whatsapp";

const points = [
  "Diagnóstico do seu negócio (online ou físico)",
  "Estratégia de lançamento sob medida",
  "Implementação de funil, tráfego e esteira",
  "Acompanhamento direto comigo, sem intermediários",
];

export const B2BSection = () => {
  const whatsAppLink = getWhatsAppLink(
    "Fala Matheus, quero uma proposta personalizada para a minha empresa",
    { source: "site", medium: "botao", campaign: "contato_direto" }
  );

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

      <div className="relative flex flex-col h-full">
        <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/80">
          Para sua empresa
        </span>

        <h3 className="mt-4 text-2xl font-bold leading-tight">
          Proposta personalizada
        </h3>
        <p className="mt-2 text-white/70 leading-relaxed">
          Não sabe exatamente qual é o gargalo do seu negócio? Fale comigo
          direto. Eu Faço um diagnóstico e monto uma proposta sob medida — pra
          empresas que querem estruturar lançamento, escalar tráfego ou
          construir um produto digital do zero.
        </p>

        <ul className="mt-6 space-y-2.5 flex-1">
          {points.map((s) => (
            <li key={s} className="flex items-start gap-3 text-sm text-white/85">
              <Check className="w-4 h-4 mt-0.5 text-white shrink-0" strokeWidth={2.5} />
              <span>{s}</span>
            </li>
          ))}
        </ul>

        <a
          href={whatsAppLink.href}
          {...(whatsAppLink.target ? { target: whatsAppLink.target } : {})}
          rel="noopener noreferrer"
          onClick={() => trackContact("WhatsApp CTA")}
          className="mt-7 inline-flex items-center justify-center gap-2 w-full rounded-xl bg-white text-ink px-5 py-3.5 text-sm font-semibold hover:scale-[1.02] hover:shadow-xl hover:shadow-white/10 transition-all"
        >
          Quero uma proposta
          <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
};
