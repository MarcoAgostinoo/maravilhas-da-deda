import React from "react";

interface BreadcrumbItem {
  label: string;
  href?: string;
  active?: boolean;
}

interface BannerPagesProps {
  title: string;
  breadcrumbs: BreadcrumbItem[];
  className?: string;
  style?: React.CSSProperties;
}

const BannerPages: React.FC<BannerPagesProps> = ({
  title,
  breadcrumbs,
  className = "",
  style = {},
}) => (
  <div
    className={`animate-fadeIn relative w-full py-12 ${className}`}
    style={{
      ...style,
      backgroundImage: 'url("/bannerPages.jpg")',
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <div className="absolute inset-0 bg-gradient-to-r from-chocolate/90 to-sage/50 dark:from-chocolate/90 dark:to-sage/50" />
    <div className="relative z-10 container mx-auto px-4 py-12">
      <h1 className="animate-slideInRight mb-4 text-5xl font-bold text-ivory md:text-6xl dark:text-ivory">
        {title}
      </h1>
      <nav aria-label="breadcrumb">
        <ol className="animate-slideInRight mb-0 flex flex-wrap space-x-2 text-lg text-ivory/80 dark:text-ivory/80">
          {breadcrumbs.map((item, idx) => (
            <li
              key={idx}
              className={`${item.active
                  ? "font-semibold text-ivory dark:text-ivory"
                  : "transition-colors hover:text-ivory dark:hover:text-ivory"
                }`}
              aria-current={item.active ? "page" : undefined}
            >
              {item.href && !item.active ? (
                <a href={item.href}>{item.label}</a>
              ) : (
                item.label
              )}
              {idx < breadcrumbs.length - 1 && (
                <span className="mx-2 text-ivory/50 dark:text-ivory/50">
                  /
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </div>
  </div>
);

export default BannerPages;
