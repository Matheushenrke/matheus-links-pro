import { useEffect, useMemo, useState } from "react";
import heroImage from "@/assets/hero-copy.png";

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
      "Copy para anúncios",
      "VSL ou página de vendas",
      "Estratégia completa / Funil",
    ],
    label: "Preciso de",
  },
  {
    q: "Qual o faturamento mensal aproximado do seu negócio hoje?",
    options: [
      "Ainda não fatura",
      "Até R$ 10 mil",
      "R$ 10 mil a R$ 50 mil",
      "Acima de R$ 50 mil",
    ],
    label: "Faturamento",
  },
];

const interstitials = [
  "Boa...",
  "— Anotado. Última pergunta.",
];

const WHATSAPP_PHONE = "5565992843701";
const STORAGE_KEY = "quiz_responses_v1";

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.595 5.39l-.999 3.648 3.893-1.021zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" />
  </svg>
);

const generateSessionId = () => {
  const n = Math.floor(1000 + Math.random() * 9000);
  return `ID-${n}`;
};

const saveResponse = (sessionId: string, answers: string[]) => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const list = raw ? (JSON.parse(raw) as unknown[]) : [];
    const entry = {
      sessionId,
      createdAt: new Date().toISOString(),
      answers: questions.map((q, i) => ({ label: q.label, answer: answers[i] ?? "" })),
    };
    list.push(entry);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
  } catch {
    /* ignore */
  }
};

const buildWhatsAppUrl = (sessionId: string) => {
  const text = `Olá Matheus, vim do Quiz. Código: ${sessionId}`;
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(text)}`;
};

const Copy = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const sessionId = useMemo(() => generateSessionId(), []);

  useEffect(() => {
    document.title = "Quiz · Copy que vende — Matheus Henrike";
    fbq()?.("track", "PageView");

    const id = "copy-page-fonts";
    if (!document.getElementById(id)) {
      const link = document.createElement("link");
      link.id = id;
      link.rel = "stylesheet";
      link.href =
        "https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&display=swap";
      document.head.appendChild(link);
    }
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
      setLoading(true);
      saveResponse(sessionId, next);
      window.setTimeout(() => {
        setLoading(false);
        setDone(true);
      }, 3000);
    } else {
      setStep(step + 1);
    }
  };

  const progress = done || loading ? 100 : (step / questions.length) * 100;

  return (
    <main
      className="min-h-screen text-[#f5efe4] antialiased selection:bg-[#beb711] selection:text-black"
      style={{
        fontFamily:
          "'EB Garamond', 'Cormorant Garamond', Georgia, 'Times New Roman', serif",
        backgroundColor: "#0b0907",
      }}
    >
      <section className="relative w-full sm:px-6 pt-8 sm:pt-14 pb-6 sm:pb-10 py-0 px-[7px] my-0 mx-0">
        <div className="mx-auto max-w-3xl py-0">
          <div className="flex items-center justify-center gap-3 mb-5 text-[10px] sm:text-xs uppercase tracking-[0.32em] text-[#beb711]/80">
            <span className="h-px w-8 bg-[#beb711]/40 opacity-0" />
            <span></span>
            <span className="h-px w-8 bg-[#beb711]/40 opacity-0" />
          </div>

          <h1 className="sr-only">
            Eu vou escrever sua VSL, seus anúncios, seu site, sua página de
            vendas e sua newsletter com copy que vende.
          </h1>

          <figure className="relative w-full overflow-hidden rounded-[4px] border border-[#beb711]/15 shadow-[0_40px_120px_-40px_rgba(0,0,0,0.9)]">
            <img
              src={heroImage}
              alt="Eu vou escrever sua VSL, seus anúncios, seu site, sua página de vendas e sua newsletter com copy que vende."
              className="w-full h-auto block"
              fetchPriority="high"
              decoding="async"
            />
          </figure>

          <div className="mt-7 text-center my-0 py-0">
            <p className="text-base sm:text-lg italic text-[#f5efe4]/70 leading-snug">
              {"\n"}
            </p>
            <a
              href="#quiz"
              className="mt-4 inline-flex items-center gap-2 text-sm sm:text-base text-[#beb711] hover:text-[#e4dc4a] transition-colors duration-300"
            >
              <span className="border-b border-[#beb711]/60 hover:border-[#e4dc4a] pb-0.5">
                Começar o diagnóstico
              </span>
              <span aria-hidden>↓</span>
            </a>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-2xl py-0 my-0 px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-[#beb711]/25 to-transparent" />
      </div>

      <section id="quiz" className="px-5 sm:px-6 sm:py-16 py-[4px]">
        <div className="mx-auto max-w-2xl py-0 my-0">
          <div className="mb-10">
            <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.28em] text-[#f5efe4]/40 mb-3">
              <span>
                Pergunta{" "}
                <span className="text-[#beb711]">
                  {done || loading ? questions.length : step + 1}
                </span>{" "}
                / {questions.length}
              </span>
              <span>{done ? "Concluído" : loading ? "Analisando" : "\n"}</span>
            </div>
            <div className="h-[2px] w-full bg-[#f5efe4]/8 overflow-hidden">
              <div
                className="h-full bg-[#beb711] transition-all duration-700 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {loading ? (
            <div className="animate-fade-up text-center py-10">
              <div className="mx-auto w-12 h-12 rounded-full border-2 border-[#beb711]/20 border-t-[#beb711] animate-spin" />
              <p className="mt-6 text-base sm:text-lg italic text-[#f5efe4]/80 leading-snug">
                Analisando suas respostas...
              </p>
              <p className="mt-2 text-sm text-[#f5efe4]/50 italic">
                Verificando compatibilidade com a agenda do estrategista...
              </p>
            </div>
          ) : !done ? (
            <div key={step} className="animate-fade-up">
              {step > 0 && (
                <p className="mb-5 text-sm sm:text-base italic text-[#beb711]/80 leading-snug opacity-80">
                  — {interstitials[Math.min(step - 1, interstitials.length - 1)]}
                </p>
              )}

              <h2 className="text-[28px] sm:text-[38px] leading-[1.15] tracking-[-0.01em] font-medium text-[#f5efe4]">
                {questions[step].q}
              </h2>

              <div className="mt-8 flex flex-col gap-3">
                {questions[step].options.map((opt, i) => (
                  <button
                    key={opt}
                    onClick={() => handleAnswer(opt)}
                    className="group relative text-left rounded-[3px] border border-[#f5efe4]/12 bg-[#f5efe4]/[0.02] px-5 py-4 text-[17px] sm:text-[19px] text-[#f5efe4]/90 hover:text-[#f5efe4] hover:border-[#beb711]/60 hover:bg-[#beb711]/[0.04] transition-all duration-300"
                  >
                    <span className="mr-3 text-[#beb711]/70 group-hover:text-[#beb711] font-semibold">
                      {String.fromCharCode(65 + i)}.
                    </span>
                    {opt}
                  </button>
                ))}
              </div>

              <p className="mt-8 text-xs text-[#f5efe4]/30 italic">
                Suas respostas geram um código único para o seu atendimento.
              </p>
            </div>
          ) : (
            <div className="animate-fade-up text-center">
              <p className="mb-3 text-xs uppercase tracking-[0.32em] text-[#beb711]">
                Pré-aprovação concluída
              </p>
              <h2 className="text-[34px] sm:text-[48px] leading-[1.05] tracking-[-0.02em] font-semibold text-[#f5efe4]">
                Você se{" "}
                <span className="relative inline-block italic">
                  qualifica
                  <span
                    aria-hidden
                    className="absolute left-0 right-0 bottom-1 h-[10px] -z-0 bg-[#beb711]/70 opacity-20 mx-0 px-0 my-0 py-0"
                    style={{ transform: "skewX(-6deg)" }}
                  />
                </span>
                .
              </h2>
              <p className="mt-5 text-base sm:text-lg italic text-[#f5efe4]/70 leading-snug max-w-md mx-auto">
                Para liberar o seu diagnóstico personalizado e verificar a
                disponibilidade da agenda do Matheus, clique no botão abaixo. O
                resultado será enviado direto no seu WhatsApp.
              </p>

              <p className="mt-6 text-xs uppercase tracking-[0.28em] text-[#f5efe4]/40">
                Seu código:{" "}
                <span className="text-[#beb711] tracking-[0.2em]">
                  {sessionId}
                </span>
              </p>

              <a
                href={buildWhatsAppUrl(sessionId)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  fbq()?.("track", "Contact", {
                    content_name: "Quiz Copy",
                    session_id: sessionId,
                  })
                }
                className="mt-6 inline-flex items-center justify-center gap-3 rounded-[3px] bg-[#25D366] text-black text-base font-semibold tracking-tight hover:scale-[1.02] hover:shadow-[0_0_40px_-5px_rgba(37,211,102,0.55)] transition-all duration-300 my-[24px] px-[14px] py-[11px]"
                style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
              >
                <WhatsAppIcon className="w-5 h-5" />
                FALAR COM ESTRATEGISTA
              </a>
            </div>
          )}
        </div>
      </section>

      <footer className="px-6 pb-10 pt-4 text-center">
        <p className="text-[11px] uppercase tracking-[0.32em] text-[#f5efe4]/30">
          Matheus Henrike · Copy &amp; Estratégia
        </p>
      </footer>
    </main>
  );
};

export default Copy;
