import { useEffect, useMemo, useState } from "react";

const STORAGE_KEY = "quiz_responses_v1";

type Entry = {
  sessionId: string;
  createdAt: string;
  answers: { label: string; answer: string }[];
};

const loadEntries = (): Entry[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? (parsed as Entry[]) : [];
  } catch {
    return [];
  }
};

const fmtDate = (iso: string) => {
  try {
    return new Date(iso).toLocaleString("pt-BR");
  } catch {
    return iso;
  }
};

const AdminQuiz = () => {
  const [entries, setEntries] = useState<Entry[]>([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    document.title = "Admin Quiz · Matheus Henrike";
    setEntries(loadEntries());
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const list = [...entries].sort((a, b) => b.createdAt.localeCompare(a.createdAt));
    if (!q) return list;
    return list.filter((e) => {
      if (e.sessionId.toLowerCase().includes(q)) return true;
      return e.answers.some((a) => a.answer.toLowerCase().includes(q));
    });
  }, [entries, query]);

  const handleExport = () => {
    const blob = new Blob([JSON.stringify(entries, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `quiz-responses-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleClear = () => {
    if (!confirm("Apagar todas as respostas salvas neste navegador?")) return;
    localStorage.removeItem(STORAGE_KEY);
    setEntries([]);
  };

  return (
    <main className="min-h-screen bg-[#0b0907] text-[#f5efe4] p-6 sm:p-10 font-sans">
      <div className="mx-auto max-w-6xl">
        <header className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-[10px] uppercase tracking-[0.32em] text-[#beb711]">
              Painel privado
            </p>
            <h1 className="mt-1 text-2xl sm:text-3xl font-semibold">
              Respostas do Quiz
            </h1>
            <p className="mt-1 text-sm text-[#f5efe4]/50">
              Total: {entries.length} · Armazenado localmente neste navegador.
            </p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={handleExport}
              className="rounded-md border border-[#beb711]/40 px-3 py-2 text-sm hover:bg-[#beb711]/10"
            >
              Exportar JSON
            </button>
            <button
              onClick={handleClear}
              className="rounded-md border border-red-500/40 text-red-300 px-3 py-2 text-sm hover:bg-red-500/10"
            >
              Limpar
            </button>
          </div>
        </header>

        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar por ID (ex: 5521) ou resposta..."
          className="w-full mb-6 rounded-md bg-[#f5efe4]/5 border border-[#f5efe4]/15 px-4 py-3 text-sm placeholder:text-[#f5efe4]/30 focus:outline-none focus:border-[#beb711]/60"
        />

        {filtered.length === 0 ? (
          <p className="text-center text-[#f5efe4]/40 py-16 italic">
            Nenhuma resposta encontrada.
          </p>
        ) : (
          <div className="overflow-x-auto rounded-md border border-[#f5efe4]/10">
            <table className="w-full text-sm">
              <thead className="bg-[#f5efe4]/5 text-left text-[#f5efe4]/60 uppercase text-[11px] tracking-wider">
                <tr>
                  <th className="px-3 py-3">Data/Hora</th>
                  <th className="px-3 py-3">ID</th>
                  <th className="px-3 py-3">Negócio</th>
                  <th className="px-3 py-3">Necessidade</th>
                  <th className="px-3 py-3">Faturamento</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((e) => (
                  <tr
                    key={e.sessionId + e.createdAt}
                    className="border-t border-[#f5efe4]/10 hover:bg-[#beb711]/[0.04]"
                  >
                    <td className="px-3 py-3 whitespace-nowrap text-[#f5efe4]/70">
                      {fmtDate(e.createdAt)}
                    </td>
                    <td className="px-3 py-3 font-mono text-[#beb711]">
                      {e.sessionId}
                    </td>
                    <td className="px-3 py-3">{e.answers[0]?.answer ?? "—"}</td>
                    <td className="px-3 py-3">{e.answers[1]?.answer ?? "—"}</td>
                    <td className="px-3 py-3">{e.answers[2]?.answer ?? "—"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <p className="mt-8 text-xs text-[#f5efe4]/30 italic">
          Aviso: as respostas ficam salvas apenas no navegador onde o quiz foi
          respondido. Para consolidar leads de qualquer dispositivo, é
          necessário ativar um backend (Lovable Cloud).
        </p>
      </div>
    </main>
  );
};

export default AdminQuiz;
