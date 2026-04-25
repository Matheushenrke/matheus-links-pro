import { Check } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const benefits = [
  "Acesso total às minhas aulas ao vivo e tutoriais",
  "Mentorias semanais de grupo e feedback",
  "Canal privado para perguntas e suporte",
  "Todos os recursos de lançamento, conforme publicados",
];

export const CommunitySection = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    toast({
      title: "Você está na lista!",
      description: "Vou te avisar assim que a comunidade abrir. Sem spam.",
    });
    setEmail("");
  };

  return (
    <section className="card-soft p-7 sm:p-9 h-full flex flex-col">
      <h3 className="text-2xl sm:text-[26px] font-bold text-ink leading-tight">
        Domine a Estratégia de Lançamentos e o Método D.O.D
      </h3>
      <p className="mt-3 text-ink-soft leading-relaxed">
        Tudo o que você precisa para lançar seu projeto com clareza, conhecer
        pessoas no mesmo caminho e não desistir ao longo do percurso.
      </p>

      <span className="mt-5 inline-flex w-fit items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-ink-soft">
        Abrir lista de espera
      </span>

      <ul className="mt-5 space-y-2.5 flex-1">
        {benefits.map((b) => (
          <li key={b} className="flex items-start gap-3 text-sm text-ink-soft">
            <Check className="w-4 h-4 mt-0.5 text-ink shrink-0" strokeWidth={2.5} />
            <span>{b}</span>
          </li>
        ))}
      </ul>

      <form onSubmit={handleSubmit} className="mt-6 flex flex-col sm:flex-row gap-2">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="seu@email.com"
          className="flex-1 rounded-xl border border-border bg-background px-4 py-3 text-sm text-ink placeholder:text-ink-muted focus:outline-none focus:ring-2 focus:ring-ink/10 focus:border-ink/30 transition-all"
        />
        <button
          type="submit"
          className="rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:scale-[1.02] hover:shadow-lg hover:shadow-black/10 transition-all"
        >
          Inscrever-se
        </button>
      </form>
      <p className="mt-3 text-xs text-ink-muted">
        Te aviso assim que a comunidade abrir. Sem spam, prometo.
      </p>
    </section>
  );
};
