import { Instagram, Linkedin, Mail } from "lucide-react";
import avatar from "@/assets/matheus-avatar.webp";
import { addUTMParams } from "@/utils/utm";

const SOCIAL_UTM = {
  source: "site",
  medium: "social",
  campaign: "perfil_social",
} as const;

const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M18.244 2H21.5l-7.5 8.57L23 22h-6.91l-4.81-6.29L5.7 22H2.44l8.02-9.16L1.5 2h7.08l4.35 5.76L18.244 2Zm-1.21 18h1.86L7.06 4H5.1l11.934 16Z" />
  </svg>
);

export const Header = () => {
  return (
    <header className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8 mb-12 sm:mb-16 animate-fade-up">
      <img
        src={avatar}
        alt="Matheus Henrike — Lançador & Estrategista Digital"
        width={160}
        height={160}
        loading="eager"
        decoding="async"
        // @ts-expect-error - fetchpriority is a valid HTML attribute
        fetchpriority="high"
        className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover border border-border shadow-sm shrink-0"
      />

      <div className="flex-1 text-center sm:text-left">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-ink">
          Matheus Henrike
        </h1>
        <p className="mt-3 text-base sm:text-lg text-ink-soft leading-relaxed max-w-xl">
          <span className="text-ink font-semibold">Lançador & Estrategista Digital.</span>{" "}
          Crio e executo lançamentos completos de infoprodutos, mentorias e
          serviços — funil, copy, tráfego pago, esteira e back-end.
          Founder do Direita Match.
        </p>

        <a
          href="mailto:comercial@matheushenrike.com"
          className="mt-4 inline-flex items-center gap-2 text-sm text-ink-muted hover:text-ink transition-colors"
        >
          <Mail className="w-4 h-4" />
          comercial@matheushenrike.com
        </a>

        <div className="mt-5 flex items-center justify-center sm:justify-start gap-2.5">
          <SocialLink href={addUTMParams("https://www.instagram.com/matheushenrikeofc/", SOCIAL_UTM)} label="Instagram">
            <Instagram className="w-4 h-4" />
          </SocialLink>
          <SocialLink href={addUTMParams("https://x.com/eumatheushenrik", SOCIAL_UTM)} label="X / Twitter">
            <XIcon className="w-3.5 h-3.5" />
          </SocialLink>
          <SocialLink href={addUTMParams("https://www.linkedin.com/in/matheus-henrike/", SOCIAL_UTM)} label="LinkedIn">
            <Linkedin className="w-4 h-4" />
          </SocialLink>
        </div>
      </div>
    </header>
  );
};

const SocialLink = ({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="w-9 h-9 grid place-items-center rounded-full bg-card border border-border text-ink-soft hover:text-ink hover:border-ink/30 transition-all"
  >
    {children}
  </a>
);
