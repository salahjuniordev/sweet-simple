import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowUpRight, Check, Quote } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { getCaseStudy, caseStudies, type CaseStudy } from "@/lib/work-data";
import { getService } from "@/lib/services-data";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const study = getCaseStudy(params.slug);
    if (!study) throw notFound();
    return { study };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Case study not found — Mario Studio" }, { name: "robots", content: "noindex" }] };
    }
    const { study } = loaderData;
    const title = `${study.client}: ${study.title} | Mario Studio`;
    return {
      meta: [
        { title },
        { name: "description", content: study.summary },
        { property: "og:title", content: title },
        { property: "og:description", content: study.summary },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: CaseNotFound,
  component: CaseStudyPage,
});

function CaseNotFound() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <div className="mx-auto max-w-3xl px-6 py-32 text-center">
        <h1 className="text-4xl font-black">Case study not found</h1>
        <p className="mt-4 text-muted-foreground">This project may have been renamed or removed.</p>
        <Link to="/work" className="mt-8 inline-block font-semibold text-brand">
          Browse all work
        </Link>
      </div>
      <SiteFooter />
    </div>
  );
}

function CaseStudyPage() {
  const { study } = Route.useLoaderData() as { study: CaseStudy };
  const more = caseStudies.filter((c) => c.slug !== study.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <main>
        <section className="border-b border-border">
          <div className="mx-auto max-w-4xl px-6 py-20">
            <Link to="/work" className="text-sm font-semibold text-muted-foreground hover:text-brand">
              ← All work
            </Link>
            <div className="mt-6 flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              <span className="rounded-full bg-brand-soft px-3 py-1 text-brand">{study.industry}</span>
              <span>{study.year}</span>
              <span>{study.client}</span>
            </div>
            <h1 className="mt-5 text-4xl font-black tracking-tight md:text-5xl">{study.title}</h1>
            <p className="mt-5 text-lg text-muted-foreground">{study.summary}</p>
            <div className="mt-8 flex flex-wrap gap-2">
              {study.serviceSlugs.map((slug) => {
                const service = getService(slug);
                if (!service) return null;
                return (
                  <Link
                    key={slug}
                    to="/services/$slug"
                    params={{ slug }}
                    className="rounded-full border border-border px-4 py-1.5 text-xs font-semibold transition-colors hover:border-brand hover:text-brand"
                  >
                    {service.title}
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-primary text-primary-foreground">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 py-12 md:grid-cols-4">
            {study.results.map((r) => (
              <div key={r.label}>
                <div className="text-3xl font-black text-brand md:text-4xl">{r.value}</div>
                <div className="mt-1 text-sm opacity-80">{r.label}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-6 py-20">
          <h2 className="text-3xl font-black tracking-tight">The challenge</h2>
          <p className="mt-4 text-muted-foreground">{study.challenge}</p>

          <h2 className="mt-14 text-3xl font-black tracking-tight">What we did</h2>
          <ul className="mt-6 space-y-4">
            {study.approach.map((a) => (
              <li key={a} className="flex gap-3">
                <Check className="mt-1 h-5 w-5 shrink-0 text-brand" />
                <span className="text-muted-foreground">{a}</span>
              </li>
            ))}
          </ul>

          {study.quote && (
            <figure className="mt-14 rounded-3xl border border-border bg-brand-soft p-8">
              <Quote className="h-7 w-7 text-brand" />
              <blockquote className="mt-4 text-lg leading-relaxed">"{study.quote.text}"</blockquote>
              <figcaption className="mt-5 text-sm font-semibold">
                {study.quote.name} — <span className="text-muted-foreground">{study.quote.role}</span>
              </figcaption>
            </figure>
          )}

          <div className="mt-14 rounded-3xl border border-border bg-primary p-10 text-center text-primary-foreground">
            <h2 className="text-2xl font-black md:text-3xl">Have a similar problem?</h2>
            <p className="mx-auto mt-3 max-w-md text-sm opacity-80">
              Send the brief and we'll tell you honestly what it would take.
            </p>
            <Link
              to="/contact"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-brand px-8 py-4 text-sm font-bold text-brand-foreground transition-transform hover:-translate-y-0.5"
            >
              Start a project <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        <section className="border-t border-border">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <h2 className="text-2xl font-black tracking-tight">More work</h2>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {more.map((c) => (
                <Link
                  key={c.slug}
                  to="/work/$slug"
                  params={{ slug: c.slug }}
                  className="group rounded-2xl border border-border p-7 transition-colors hover:border-brand"
                >
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand">{c.client}</p>
                  <h3 className="mt-3 font-bold leading-snug group-hover:text-brand">{c.title}</h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
