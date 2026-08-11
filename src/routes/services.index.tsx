import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/services-data";
import { serviceIcons } from "@/lib/service-icons";
import logo from "@/assets/mario-studio-logo.png.asset.json";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services & Pricing — Mario Studio" },
      {
        name: "description",
        content:
          "Nine digital services with transparent pricing: web development, graphic design, identity branding, UI/UX, video editing, brand audit, maintenance, security and marketing.",
      },
      { property: "og:title", content: "Services & Pricing — Mario Studio" },
      {
        property: "og:description",
        content: "Transparent pricing for nine in-house digital services at Mario Studio.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesIndex,
});

function ServicesIndex() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link to="/">
            <img src={logo.url} alt="Mario Studio logo" className="h-10 w-auto" />
          </Link>
          <Link
            to="/"
            className="text-sm font-semibold transition-colors hover:text-brand"
          >
            Back home
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-20">
        <h1 className="max-w-3xl text-5xl font-black tracking-tight md:text-6xl">
          Services &amp; <span className="text-brand">pricing</span>
        </h1>
        <p className="mt-5 max-w-xl text-lg text-muted-foreground">
          Nine disciplines, each with clear packages. Pick a service to see what's included and
          what it costs.
        </p>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => {
            const Icon = serviceIcons[s.icon];
            return (
              <Link
                key={s.slug}
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="group rounded-2xl border border-border bg-card p-7 transition-colors hover:border-brand"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-soft text-brand-foreground transition-colors group-hover:bg-brand">
                  <Icon className="h-6 w-6" />
                </div>
                <h2 className="mt-5 flex items-center gap-1 text-lg font-bold">
                  {s.title}
                  <ArrowUpRight className="h-4 w-4 text-brand opacity-0 transition-opacity group-hover:opacity-100" />
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                <p className="mt-4 text-sm font-bold">
                  From <span className="text-brand">{s.plans[0].price}</span>
                </p>
              </Link>
            );
          })}
        </div>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-muted-foreground">
          © {new Date().getFullYear()} Mario Studio. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
