import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowUpRight, Check } from "lucide-react";
import { getService, services, type Service } from "@/lib/services-data";
import { serviceIcons } from "@/lib/service-icons";
import logo from "@/assets/mario-studio-logo.png.asset.json";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Service not found — Mario Studio" }, { name: "robots", content: "noindex" }],
      };
    }
    const { service } = loaderData;
    const title = `${service.title} — Mario Studio`;
    const description = `${service.tagline}. ${service.desc} Packages from ${service.plans[0]?.price ?? "$0"}.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: ServiceDetail,
  notFoundComponent: ServiceNotFound,
});

function ServiceNotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center px-6 text-center">
      <div>
        <h1 className="text-3xl font-black">We don't offer that service</h1>
        <Link to="/services" className="mt-4 inline-block font-semibold text-brand">
          Browse all services
        </Link>
      </div>
    </div>
  );
}

function ServiceDetail() {
  const { service } = Route.useLoaderData() as { service: Service };
  const Icon = serviceIcons[service.icon];
  const others = services.filter((s) => s.slug !== service.slug).slice(0, 4);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link to="/">
            <img src={logo.url} alt="Mario Studio logo" className="h-10 w-auto" />
          </Link>
          <Link to="/services" className="text-sm font-semibold transition-colors hover:text-brand">
            All services
          </Link>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden border-b border-border">
          <div className="pointer-events-none absolute -right-40 -top-40 h-[28rem] w-[28rem] rounded-full bg-brand-soft blur-3xl" />
          <div className="relative mx-auto max-w-6xl px-6 py-20">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand text-brand-foreground">
              <Icon className="h-7 w-7" />
            </div>
            <h1 className="mt-6 max-w-3xl text-5xl font-black leading-[1] tracking-tight md:text-6xl">
              {service.title}
            </h1>
            <p className="mt-4 text-xl font-bold text-brand">{service.tagline}</p>
            <p className="mt-5 max-w-2xl text-lg text-muted-foreground">{service.intro}</p>
            <a
              href="#quote"
              className="mt-9 inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-bold text-brand-foreground transition-transform hover:-translate-y-0.5"
            >
              Request a quote <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-14 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-black tracking-tight">What you get out of it</h2>
              <ul className="mt-6 space-y-4">
                {service.benefits.map((b) => (
                  <li key={b} className="flex gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                    <span className="text-muted-foreground">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-border bg-secondary p-8">
              <h2 className="text-xl font-bold">Deliverables</h2>
              <ul className="mt-5 space-y-3">
                {service.deliverables.map((d) => (
                  <li key={d} className="flex items-center gap-3 border-b border-border pb-3 text-sm last:border-0 last:pb-0">
                    <span className="h-2 w-2 shrink-0 rounded-full bg-brand" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="pricing" className="border-y border-border bg-secondary">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <h2 className="text-4xl font-black tracking-tight">Pricing</h2>
            <p className="mt-3 max-w-xl text-muted-foreground">
              Fixed scopes, no surprise invoices. Anything outside a package is quoted up front.
            </p>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {service.plans.map((p) => (
                <div
                  key={p.name}
                  className={`flex flex-col rounded-2xl border bg-card p-8 ${
                    p.featured ? "border-brand ring-2 ring-brand" : "border-border"
                  }`}
                >
                  {p.featured && (
                    <span className="mb-4 self-start rounded-full bg-brand px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-foreground">
                      Most popular
                    </span>
                  )}
                  <h3 className="text-lg font-bold">{p.name}</h3>
                  <div className="mt-3 flex items-baseline gap-2">
                    <span className="text-4xl font-black">{p.price}</span>
                    <span className="text-sm text-muted-foreground">{p.note}</span>
                  </div>
                  <ul className="mt-6 flex-1 space-y-3 text-sm">
                    {p.features.map((f) => (
                      <li key={f} className="flex gap-2">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#quote"
                    className={`mt-8 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-bold transition-colors ${
                      p.featured
                        ? "bg-brand text-brand-foreground"
                        : "border border-border hover:border-brand"
                    }`}
                  >
                    Choose {p.name}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="quote" className="bg-primary text-primary-foreground">
          <div className="mx-auto max-w-4xl px-6 py-20 text-center">
            <h2 className="text-4xl font-black tracking-tight md:text-5xl">
              Ready to start your <span className="text-brand">{service.title.toLowerCase()}</span> project?
            </h2>
            <p className="mx-auto mt-4 max-w-xl opacity-80">
              Send us a short brief and we'll reply within 48 hours with a scope and fixed price.
            </p>
            <a
              href={`mailto:hello@mariostudio.com?subject=${encodeURIComponent(service.title + " enquiry")}`}
              className="mt-9 inline-flex items-center gap-2 rounded-full bg-brand px-8 py-4 text-sm font-bold text-brand-foreground transition-transform hover:-translate-y-0.5"
            >
              Request a quote <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-2xl font-black tracking-tight">Other services</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {others.map((s) => (
              <Link
                key={s.slug}
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="rounded-xl border border-border p-5 transition-colors hover:border-brand"
              >
                <h3 className="font-bold">{s.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-muted-foreground">
          © {new Date().getFullYear()} Mario Studio. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
