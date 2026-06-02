import { useEffect, useState } from "react";
import heroImage from "@/assets/copy-hero.webp.asset.json";

type FbqFn = (...args: unknown[]) => void;
const fbq = (): FbqFn | undefined => (window as unknown as { fbq?: FbqFn }).fbq;


const questions = [
  {
    q: "Qual é o seu tipo de negócio?",
    options: [
      "Infoproduto / Curso online",
      "Mentoria / Consultoria",
      "E-commerce / Loja",
      "Negócio local / Serviço",
    ],
    label: "Tipo de negócio",
  },
  {
    q: "O que você mais precisa agora?",
    options: [
      "Copy para anúncios (Meta/Google)",
      "VSL ou página de vendas",
      "Newsletter / e-mail marketing",
      "Estratégia completa (funil + copy + tráfego)",
    ],
    label: "Preciso de",
  },
  {
    q: "Você já roda anúncios pagos hoje?",
    options: [
      "Sim, mas os resultados são fracos",
      "Sim, e quero escalar",
      "Não, ainda não comecei",
      "Já rodei, mas parei",
    ],
    label: "Anúncios",
  },
  {
    q: "Qual o faturamento mensal do seu negócio hoje?",
    options: [
      "Ainda não fatura",
      "Até R$ 10 mil/mês",
      "R$ 10 mil a R$ 50 mil/mês",
      "Acima de R$ 50 mil/mês",
    ],
    label: "Faturamento",
  },
  {
    q: "Pra quando você precisa disso?",
    options: [
      "Urgente — essa semana",
      "Esse mês",
      "Próximos 30 dias",
      "Só estou pesquisando",
    ],
    label: "Prazo",
  },
];

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.595 5.39l-.999 3.648 3.893-1.021zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" />
  </svg>
);

const buildWhatsAppUrl = (answers: string[]) => {
  const lines = questions.map(
    (q, i) => `${i + 1}. ${q.label}: ${answers[i]}`
  );
  const text = `Fala Matheus, vim pelo quiz do site.\n\n${lines.join("\n")}`;
  const params = new URLSearchParams({
    phone: "5565992843701",
    text,
    utm_source: "quiz",
    utm_medium: "site",
    utm_campaign: "copy_qualificacao",
  });
  return `https://api.whatsapp.com/send/?${params.toString()}`;
};

const Copy = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [done, setDone] = useState(false);

  useEffect(() => {
    document.title = "Quiz · Copy que vende — Matheus Henrike";
    fbq()?.("track", "PageView");
  }, []);

  useEffect(() => {
    if (done) fbq()?.("track", "Lead");
  }, [done]);

  const handleAnswer = (option: string) => {
    if (step === 0 && answers.length === 0) {
      fbq()?.("track", "ViewContent", { content_name: "Quiz Copy" });
    }
    const next = [...answers, option];
    setAnswers(next);
    if (step + 1 >= questions.length) {
      setDone(true);
    } else {
      setStep(step + 1);
    }
  };

  const progress = done ? 100 : ((step) / questions.length) * 100;

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white antialiased">
      {/* Hero */}
      <section className="relative w-full px-5 sm:px-6 pt-10 sm:pt-16 pb-8 sm:pb-12">
        <div className="mx-auto max-w-5xl">
          <h1 className="sr-only">
            Eu vou escrever sua VSL, seus anúncios, seu site, sua página de vendas e sua newsletter com copy que vende.
          </h1>
          <div className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)]">
            <img
              src={heroImage.url}
              alt="Eu vou escrever sua VSL, seus anúncios, seu site, sua página de vendas e sua newsletter com copy que vende."
              className="w-full h-auto block"
              fetchPriority="high"
              decoding="async"
            />
          </div>
          <div className="mt-8 text-center">
            <a
              href="#quiz"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/[0.04] px-5 py-3 text-sm sm:text-base text-white/90 hover:bg-white/[0.08] hover:border-white/40 transition-all duration-300"
            >
              Responda o quiz e veja se você se qualifica
              <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
      </section>


      {/* Quiz */}
      <section id="quiz" className="px-5 sm:px-6 py-14 sm:py-20">
        <div className="mx-auto max-w-2xl">
          {/* progress */}
          <div className="mb-10">
            <div className="flex items-center justify-between text-xs text-white/50 mb-2 tracking-tight">
              <span>{done ? questions.length : step + 1}/{questions.length}</span>
              <span>{done ? "Concluído" : "Em andamento"}</span>
            </div>
            <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-white transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {!done ? (
            <div key={step} className="animate-fade-up">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-[-0.02em] leading-tight">
                {questions[step].q}
              </h2>
              <div className="mt-8 grid gap-3">
                {questions[step].options.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => handleAnswer(opt)}
                    className="text-left rounded-xl border border-white/10 bg-white/[0.02] px-5 py-4 text-base hover:bg-white/[0.06] hover:border-white/30 hover:scale-[1.01] hover:shadow-[0_0_30px_-10px_rgba(255,255,255,0.3)] transition-all duration-300"
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="animate-fade-up text-center">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-[-0.02em] leading-tight">
                Você se qualifica.
              </h2>
              <p className="mt-4 text-white/70 tracking-tight">
                Vou te chamar no WhatsApp para alinharmos.
              </p>
              <a
                href={buildWhatsAppUrl(answers)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  fbq()?.("track", "Contact", { content_name: "Quiz Copy" })
                }
                className="mt-8 inline-flex items-center justify-center gap-3 rounded-xl bg-[#25D366] text-black px-6 py-4 text-base font-semibold hover:scale-[1.02] hover:shadow-[0_0_40px_-5px_rgba(37,211,102,0.5)] transition-all duration-300"
              >
                <WhatsAppIcon className="w-5 h-5" />
                Falar com Matheus no WhatsApp →
              </a>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default Copy;
