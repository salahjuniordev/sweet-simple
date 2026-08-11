import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import logo from "@/assets/mario-studio-logo.png.asset.json";
import { services } from "@/lib/services-data";
import { serviceIcons } from "@/lib/service-icons";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mario Studio — Digital Services & Brand Design" },
      {
        name: "description",
        content:
          "Mario Studio builds websites, brands and campaigns: web development, graphic design, UI/UX, video editing, brand audits, maintenance, security and digital marketing.",
      },
      { property: "og:title", content: "Mario Studio — Digital Services & Brand Design" },
      {
        property: "og:description",
        content:
          "Web development, identity branding, UI/UX, video editing, brand audit, maintenance, security and digital marketing under one studio.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});


const steps = [
  { n: "01", t: "Audit", d: "We map your brand, product and competitors before touching pixels." },
  { n: "02", t: "Design", d: "Identity and interfaces built as one system, not separate files." },
  { n: "03", t: "Build", d: "Development, video and content produced in-house." },
  { n: "04", t: "Grow", d: "Maintenance, security and marketing keep the work compounding." },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-30 border-b border-border/60 bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center gap-3">
            <img src={logo.url} alt="Mario Studio logo" className="h-10 w-auto" />
          </a>
          <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
            <Link to="/services" className="transition-colors hover:text-brand">Services</Link>
            <a href="#process" className="transition-colors hover:text-brand">Process</a>
            <a href="#work" className="transition-colors hover:text-brand">Why us</a>
          </nav>
          <a
            href="#contact"
            className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-brand hover:text-brand-foreground"
          >
            Start a project
          </a>
        </div>
      </header>

      <main id="top">
        <section className="relative overflow-hidden border-b border-border">
          <div className="pointer-events-none absolute -right-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-brand-soft blur-3xl" />
          <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-[1.2fr_0.8fr] md:items-center md:py-32">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-brand px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-foreground">
                <span className="h-2 w-2 rounded-full bg-brand" />
                Digital studio
              </span>
              <h1 className="mt-6 text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
                Brands built sharp.
                <br />
                <span className="text-brand">Websites built fast.</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg text-muted-foreground">
                Mario Studio is a full-service digital partner: identity, design, development,
                video and marketing — delivered by one team that stays with you after launch.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-bold text-brand-foreground transition-transform hover:-translate-y-0.5"
                >
                  Get a free brand audit <ArrowUpRight className="h-4 w-4" />
                </a>
                <Link
                  to="/services"
                  className="inline-flex items-center rounded-full border border-border px-7 py-3.5 text-sm font-semibold transition-colors hover:border-brand"
                >
                  See services &amp; pricing
                </Link>
              </div>
            </div>
            <div className="relative rounded-3xl border border-border bg-secondary p-10">
              <img src={logo.url} alt="Mario Studio brand mark" className="mx-auto w-full max-w-xs" />
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-primary text-primary-foreground">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 py-12 md:grid-cols-4">
            {[
              ["9", "Services in-house"],
              ["120+", "Projects delivered"],
              ["48h", "Average response"],
              ["99.9%", "Uptime maintained"],
            ].map(([v, l]) => (
              <div key={l}>
                <div className="text-4xl font-black text-brand">{v}</div>
                <div className="mt-1 text-sm opacity-80">{l}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="services" className="mx-auto max-w-6xl px-6 py-24">
          <h2 className="max-w-2xl text-4xl font-black tracking-tight md:text-5xl">
            Everything your brand needs, <span className="text-brand">under one roof</span>
          </h2>
          <p className="mt-4 max-w-xl text-muted-foreground">
            Nine disciplines that work together — so strategy, design and code never contradict each other.
          </p>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
                  <h3 className="mt-5 flex items-center gap-1 text-lg font-bold">
                    {s.title}
                    <ArrowUpRight className="h-4 w-4 text-brand opacity-0 transition-opacity group-hover:opacity-100" />
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                  <p className="mt-4 text-sm font-bold">
                    From <span className="text-brand">{s.plans[0]?.price}</span>
                  </p>
                </Link>
              );
            })}
          </div>
        </section>

        <section id="process" className="border-y border-border bg-secondary">
          <div className="mx-auto max-w-6xl px-6 py-24">
            <h2 className="text-4xl font-black tracking-tight md:text-5xl">How we work</h2>
            <div className="mt-12 grid gap-8 md:grid-cols-4">
              {steps.map((s) => (
                <div key={s.n} className="border-t-2 border-brand pt-5">
                  <div className="text-sm font-black text-brand">{s.n}</div>
                  <h3 className="mt-2 text-xl font-bold">{s.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="work" className="mx-auto max-w-6xl px-6 py-24">
          <div className="grid gap-12 md:grid-cols-2">
            <h2 className="text-4xl font-black tracking-tight md:text-5xl">
              Why teams stay with <span className="text-brand">Mario Studio</span>
            </h2>
            <ul className="space-y-6">
              {[
                ["One team, no handoffs", "Your designer, developer and marketer sit in the same room."],
                ["Security is not an add-on", "Every build ships hardened, monitored and backed up."],
                ["Measured, not decorated", "We report on conversions, load times and pipeline."],
              ].map(([t, d]) => (
                <li key={t} className="flex gap-4">
                  <span className="mt-2 h-3 w-3 shrink-0 rounded-full bg-brand" />
                  <div>
                    <h3 className="font-bold">{t}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{d}</p>
                  </div>
                </li>
              ))}
            </ul>
        </section>

        <section id="testimonials" className="border-y border-border bg-brand-soft">
          <div className="mx-auto max-w-6xl px-6 py-24">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">Testimonials</p>
            <h2 className="mt-4 max-w-2xl text-4xl font-black tracking-tight md:text-5xl">
              What clients say after launch
            </h2>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {testimonials.map((t) => (
                <figure
                  key={t.name}
                  className="flex flex-col justify-between rounded-2xl border border-border bg-background p-8"
                >
                  <Quote className="h-7 w-7 text-brand" />
                  <blockquote className="mt-5 text-base leading-relaxed">"{t.quote}"</blockquote>
                  <figcaption className="mt-7 flex items-center gap-4">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                      {t.initials}
                    </span>
                    <span>
                      <span className="block font-bold">{t.name}</span>
                      <span className="block text-sm text-muted-foreground">{t.role}</span>
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section id="blog" className="mx-auto max-w-6xl px-6 py-24">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">Journal</p>
              <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">From the studio</h2>
            </div>
            <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-semibold hover:text-brand">
              All articles <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {posts.slice(0, 3).map((post) => (
              <Link
                key={post.slug}
                to="/blog/$slug"
                params={{ slug: post.slug }}
                className="group rounded-2xl border border-border p-7 transition-colors hover:border-brand"
              >
                <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  <span className="text-brand">{post.category}</span>
                  <span>{formatPostDate(post.date)}</span>
                </div>
                <h3 className="mt-4 text-lg font-bold leading-snug group-hover:text-brand">{post.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{post.excerpt}</p>
              </Link>
            ))}
          </div>
        </section>

        <section id="faq" className="border-t border-border">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">FAQs</p>
              <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
                Questions we get <span className="text-brand">every week</span>
              </h2>
              <p className="mt-5 text-sm text-muted-foreground">
                Still unsure? Email us and we'll answer honestly, even if the answer is that you
                don't need us yet.
              </p>
            </div>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((f, i) => (
                <AccordionItem key={f.q} value={`item-${i}`}>
                  <AccordionTrigger className="text-left text-base font-bold">{f.q}</AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>


        <section id="contact" className="border-t border-border bg-primary text-primary-foreground">
          <div className="mx-auto max-w-4xl px-6 py-24 text-center">
            <h2 className="text-4xl font-black tracking-tight md:text-5xl">
              Let's build something worth <span className="text-brand">looking at</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl opacity-80">
              Tell us about your project and get a free brand audit within 48 hours.
            </p>
            <a
              href="mailto:hello@mariostudio.com"
              className="mt-9 inline-flex items-center gap-2 rounded-full bg-brand px-8 py-4 text-sm font-bold text-brand-foreground transition-transform hover:-translate-y-0.5"
            >
              hello@mariostudio.com <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-muted-foreground sm:flex-row">
          <img src={logo.url} alt="Mario Studio" className="h-8 w-auto" />
          <p>© {new Date().getFullYear()} Mario Studio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
