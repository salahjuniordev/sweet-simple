import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { getServices } from "@/lib/cms-queries";
import { serviceIcons } from "@/lib/service-icons";
import logo from "@/assets/mario-studio-logo.png.asset.json";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Digital Services — Branding, Design & Development | Mario Studio" },
      {
        name: "description",
        content:
          "Nine disciplines working together to grow your brand. Experts in identity, UI/UX, fast websites, video production, and digital marketing.",
      },
      { property: "og:title", content: "Digital Services & Pricing | Mario Studio" },
      {
        property: "og:description",
        content:
          "Nine disciplines that work together — so strategy, design and code never contradict each other.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://mariostudio.com/services" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesIndex,
});

function ServicesIndex() {
  const { data: services, isLoading } = useQuery({
    queryKey: ["services"],
    queryFn: getServices,
  });

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

        {isLoading ? (
          <div className="mt-20 flex justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-brand" />
          </div>
        ) : (
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services?.map((s) => {
              const Icon = serviceIcons[s.icon as keyof typeof serviceIcons];
              return (
                <Link
                  key={s.slug}
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="group rounded-2xl border border-border bg-card p-7 transition-colors hover:border-brand"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-soft text-brand-foreground transition-colors group-hover:bg-brand">
                    {Icon && <Icon className="h-6 w-6" />}
                  </div>
                  <h2 className="mt-5 flex items-center gap-1 text-lg font-bold">
                    {s.title}
                    <ArrowUpRight className="h-4 w-4 text-brand opacity-0 transition-opacity group-hover:opacity-100" />
                  </h2>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{s.desc_short}</p>
                  <p className="mt-4 text-sm font-bold">
                    From <span className="text-brand">{(s.plans as any)?.[0]?.price}</span>
                  </p>
                </Link>
              );
            })}
          </div>
        )}
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-muted-foreground">
          © {new Date().getFullYear()} Mario Studio. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
