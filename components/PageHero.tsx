import { cn } from "@/lib/utils";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeroProps {
  title: string;
  description?: string;
  breadcrumbs?: BreadcrumbItem[];
  className?: string;
}

export function PageHero({
  title,
  description,
  breadcrumbs,
  className,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative w-full py-16 lg:py-24 overflow-hidden",
        "bg-gradient-to-br from-[#0E2151] to-[#0F3175]",
        className
      )}
    >
      {/* Subtle geometric SVG pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      
      <div className="container-site relative z-10 flex flex-col items-center text-center">
        
        {/* Breadcrumb */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="flex items-center space-x-2 text-sm text-surface/60 mb-8">
            <Link href="/" className="hover:text-surface transition-colors">
              Accueil
            </Link>
            {breadcrumbs.map((crumb, index) => (
              <div key={index} className="flex items-center space-x-2">
                <ChevronRight className="w-4 h-4" />
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-surface transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-surface font-medium">{crumb.label}</span>
                )}
              </div>
            ))}
          </nav>
        )}

        <h1 className="text-h1 md:text-[48px] font-display font-bold text-surface mb-6 max-w-4xl leading-tight">
          {title}
        </h1>
        
        {description && (
          <p className="text-surface/80 text-lg md:text-xl max-w-2xl font-body">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}

