import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-12 flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      <h2 className="text-h2 font-display font-bold text-primary">
        {title}
      </h2>
      {subtitle && (
        <p className="text-text-muted max-w-2xl text-lg">
          {subtitle}
        </p>
      )}
      <div
        className={cn(
          "h-1 w-20 bg-accent rounded-full mt-2",
          align === "center" ? "mx-auto" : "ml-0"
        )}
      />
    </div>
  );
}
