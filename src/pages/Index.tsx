import { Heart, Rocket, Calendar, Users } from "lucide-react";
import { Header } from "@/components/Header";
import { ActionCard } from "@/components/ActionCard";
import { CommunitySection } from "@/components/CommunitySection";
import { B2BSection } from "@/components/B2BSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      {/* subtle graph-paper backdrop, faded at edges */}
      <div
        aria-hidden
        className="absolute inset-0 bg-grid bg-grid-fade pointer-events-none"
      />

      <main className="relative mx-auto w-full max-w-[1080px] px-5 sm:px-8 pt-12 sm:pt-20">
        <Header />

        {/* Action cards grid */}
        <section
          aria-label="Projetos e serviços"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
        >
          <ActionCard
            icon={Heart}
            iconBg="bg-rose-50 text-rose-600"
            title="Direita Match"
            description="O primeiro app de relacionamento conservador do Brasil. Conectando valores e pessoas — em build in public."
            status="Disponível"
            buttonLabel="Acessar app"
            href="https://www.direitamatch.com.br/"
            variant="brand"
          />
          <ActionCard
            icon={Rocket}
            iconBg="bg-zinc-100 text-ink"
            title="Método D.O.D"
            description="Destrava ou Desiste. O sistema definitivo de lançamento e estratégia digital para escalar seu negócio."
            status="Em breve"
            buttonLabel="Entrar na lista de espera"
            href="https://api.whatsapp.com/send/?phone=5565992843701&text=Fala+Matheus%2C+quero+entrar+na+lista+do+M%C3%A9todo+D.O.D"
            variant="primary"
          />
          <ActionCard
            icon={Calendar}
            iconBg="bg-blue-50 text-blue-600"
            title="Sessão Estratégica 1:1"
            description="Te ajudo a estruturar seu fluxo de lançamento e dar o próximo passo com clareza e estratégia."
            status="Agendar"
            buttonLabel="Agendar sessão"
            href="https://api.whatsapp.com/send/?phone=5565992843701&text=Fala+Matheus%2C+quero+agendar+uma+sess%C3%A3o+estrat%C3%A9gica+1%3A1"
            variant="primary"
          />
        </section>

        {/* Section heading */}
        <h2 className="mt-20 sm:mt-24 text-center text-3xl sm:text-4xl font-extrabold tracking-tight text-ink">
          Domine a{" "}
          <span className="text-brand">estratégia de lançamentos</span> e o{" "}
          <span className="text-brand">Método D.O.D</span>
        </h2>

        {/* Community + B2B */}
        <section className="mt-10 sm:mt-12 grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 items-stretch">
          <CommunitySection />
          <B2BSection />
        </section>

        <Footer />
      </main>
    </div>
  );
};

export default Index;
