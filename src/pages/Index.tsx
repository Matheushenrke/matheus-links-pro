import { Header } from "@/components/Header";
import { LaunchOfferCard } from "@/components/LaunchOfferCard";
import { B2BSection } from "@/components/B2BSection";
import { DireitaMatchCard } from "@/components/DireitaMatchCard";
import { MethodDODCard } from "@/components/MethodDODCard";
import { Footer } from "@/components/Footer";

const SectionLabel = ({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
}) => (
  <div className="mb-7 sm:mb-9">
    <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-wider text-ink-soft">
      {eyebrow}
    </span>
    <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-ink leading-tight">
      {title}
    </h2>
    {description && (
      <p className="mt-3 text-ink-soft leading-relaxed max-w-2xl">
        {description}
      </p>
    )}
  </div>
);

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <div
        aria-hidden
        className="absolute inset-0 bg-grid bg-grid-fade pointer-events-none"
      />

      <main className="relative mx-auto w-full max-w-[1080px] px-5 sm:px-8 pt-12 sm:pt-20">
        <Header />

        {/* BLOCO 1 — OFERTAS */}
        <section aria-label="Ofertas" className="mt-4">
          <SectionLabel
            eyebrow="Ofertas"
            title={
              <>
                Trabalhe <span className="text-brand">comigo</span>
              </>
            }
            description="Duas formas de me contratar hoje: o trabalho 1:1 onde eu crio/escalo sua operação digital, ou uma proposta personalizada para empresas."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 items-stretch">
            <LaunchOfferCard />
            <B2BSection />
          </div>
        </section>

        {/* BLOCO 2 — PROJETOS */}
        <section aria-label="Projetos" className="mt-20 sm:mt-24">
          <SectionLabel
            eyebrow="Projetos"
            title={
              <>
                O que estou <span className="text-brand">construindo</span>
              </>
            }
            description="Meus projetos próprios — em build in public e em desenvolvimento."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 items-stretch">
            <DireitaMatchCard />
            <MethodDODCard />
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
};

export default Index;
