import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);

    const prevTitle = document.title;
    document.title = "Página não encontrada — Matheus Henrike";

    const setMeta = (selector: string, attr: string, name: string, content: string) => {
      let el = document.head.querySelector<HTMLMetaElement>(selector);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      const prev = el.getAttribute("content");
      el.setAttribute("content", content);
      return () => {
        if (prev === null) el?.remove();
        else el?.setAttribute("content", prev);
      };
    };

    const desc = "A página que você procura não existe. Volte para a home de Matheus Henrike.";
    const restoreDesc = setMeta('meta[name="description"]', "name", "description", desc);
    const restoreOgTitle = setMeta('meta[property="og:title"]', "property", "og:title", "Página não encontrada — Matheus Henrike");
    const restoreOgDesc = setMeta('meta[property="og:description"]', "property", "og:description", desc);
    const restoreTwTitle = setMeta('meta[name="twitter:title"]', "name", "twitter:title", "Página não encontrada — Matheus Henrike");
    const restoreTwDesc = setMeta('meta[name="twitter:description"]', "name", "twitter:description", desc);

    return () => {
      document.title = prevTitle;
      restoreDesc();
      restoreOgTitle();
      restoreOgDesc();
      restoreTwTitle();
      restoreTwDesc();
    };
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">Oops! Page not found</p>
        <a href="/" className="text-primary underline hover:text-primary/90">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
