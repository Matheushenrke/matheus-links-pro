import { Check, Rocket, ArrowUpRight } from "lucide-react";
import { trackContact } from "@/lib/tracking";
import { getWhatsAppLink } from "@/lib/whatsapp";

const stack = [
  "Funil completo + esteira de produtos",
  "Copy de vendas, VSL, quiz e página de captura",
  "Tráfego pago (Meta Ads / Google)",
  "Distribuição orgânica e posicionamento",
  "Configuração técnica: pixel, integrações, automações",
  "Pesquisa de mercado/público e oferta validada",
];

export const LaunchOfferCard = () => {
  const whatsAppLink = getWhatsAppLink(
    "Fala Matheus, quero ser lançado. Quero entender como funciona o trabalho 1:1 com você",
    { source: "site", medium: "botao", campaign: "contato_direto" }
  );

  return (
    <article className="card-soft p-7 sm:p-9 h-full flex flex-col">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-xl grid place-items-center bg-primary text-primary-foreground border border-border/60">
          <Rocket className="w-6 h-6" strokeWidth={2} />
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-ink-soft">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          Vagas abertas
        </span>
      </div>

      <h3 className="mt-5 text-2xl font-bold text-ink leading-tight">
        Quero ser lançado
      </h3>
      <p className="mt-2 text-ink-soft leading-relaxed">
        Trabalho 1:1 comigo. Eu construo e executo o lançamento do seu
        produto digital do zero — do posicionamento as vendas.
      </p>

      <ul className="mt-5 space-y-2.5 flex-1">
        {stack.map((s) => (
          <li key={s} className="flex items-start gap-3 text-sm text-ink-soft">
            <Check className="w-4 h-4 mt-0.5 text-ink shrink-0" strokeWidth={2.5} />
            <span>{s}</span>
          </li>
        ))}
      </ul>

      <a
        href={whatsAppLink.href}
        {...(whatsAppLink.target ? { target: whatsAppLink.target } : {})}
        rel="noopener noreferrer"
        onClick={() => trackContact("WhatsApp CTA")}
        className="mt-7 inline-flex items-center justify-center gap-2 w-full rounded-xl bg-primary text-primary-foreground px-5 py-3.5 text-sm font-semibold hover:scale-[1.02] hover:shadow-lg hover:shadow-black/10 transition-all"
      >
        Falar com o Matheus
        <ArrowUpRight className="w-4 h-4" />
      </a>
    </article>
  );
};
