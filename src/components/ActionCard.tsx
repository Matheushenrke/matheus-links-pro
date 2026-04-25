import { ArrowUpRight, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "brand" | "disabled";

interface ActionCardProps {
  icon: LucideIcon;
  iconBg: string; // tailwind classes for the icon tile
  title: string;
  description: string;
  status: string;
  buttonLabel: string;
  href?: string;
  variant?: Variant;
}

export const ActionCard = ({
  icon: Icon,
  iconBg,
  title,
  description,
  status,
  buttonLabel,
  href,
  variant = "primary",
}: ActionCardProps) => {
  const buttonClasses = cn(
    "mt-5 w-full inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold transition-all",
    variant === "primary" &&
      "bg-primary text-primary-foreground hover:scale-[1.02] hover:shadow-lg hover:shadow-black/10",
    variant === "brand" &&
      "bg-brand text-brand-foreground hover:scale-[1.02] hover:shadow-lg hover:shadow-brand/20",
    variant === "disabled" &&
      "bg-muted text-ink-muted cursor-not-allowed pointer-events-none"
  );

  const isExternal = href?.startsWith("http");

  return (
    <article className="card-soft p-6 flex flex-col h-full transition-transform hover:-translate-y-0.5">
      <div
        className={cn(
          "w-14 h-14 rounded-xl grid place-items-center mb-5 border border-border/60",
          iconBg
        )}
      >
        <Icon className="w-7 h-7" strokeWidth={2} />
      </div>

      <h3 className="text-lg font-bold text-ink">{title}</h3>
      <p className="mt-2 text-sm text-ink-soft leading-relaxed flex-1">
        {description}
      </p>

      <p
        className={cn(
          "mt-4 text-sm font-medium",
          variant === "brand" ? "text-brand" : "text-ink-muted"
        )}
      >
        {status}
      </p>

      {href && variant !== "disabled" ? (
        <a
          href={href}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          className={buttonClasses}
        >
          {buttonLabel}
          {isExternal && <ArrowUpRight className="w-4 h-4" />}
        </a>
      ) : (
        <button type="button" disabled className={buttonClasses}>
          {buttonLabel}
        </button>
      )}
    </article>
  );
};
