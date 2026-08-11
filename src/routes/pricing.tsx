import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, ArrowUpRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { services } from "@/lib/services-data";
import { faqs } from "@/lib/site-content";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Transparent Tiers for Design & Development | Mario Studio" },
      {
        name: "description",
        content:
          "Explore transparent pricing for all nine Mario Studio services. From landing pages to full product design and managed security retainers.",
      },
      { property: "og:title", content: "Pricing — Compare All Services | Mario Studio" },
      {
        property: "og:description",
        content: "Transparent tiers for branding, development, design, video, security and marketing.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://mariostudio.com/pricing" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PricingPage,
});

const included = [
  "A named lead you talk to directly",
  "Shared board with weekly written updates",
  "All source files and repositories on handover",
  "Fixed quote before work starts — no surprise invoices",
];

function PricingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <main>
        <section className="border-b border-border">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">Pricing</p>
            <h1 className="mt-4 max-w-3xl text-5xl font-black tracking-tight md:text-6xl">
              Web development <span className="text-brand">pricing</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg text-muted-foreground">
              Prices for our web development tiers. Anything custom gets a fixed quote
              after a free 30-minute scoping call.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16">
          <div className="overflow-x-auto rounded-3xl border border-border">
            <table className="w-full min-w-[720px] border-collapse text-left text-sm">
              <caption className="sr-only">Pricing comparison across all Mario Studio services</caption>
              <thead className="bg-secondary">
                <tr>
                  <th scope="col" className="px-6 py-4 font-black">Service</th>
                  <th scope="col" className="px-6 py-4 font-black">Entry</th>
                  <th scope="col" className="px-6 py-4 font-black">Most popular</th>
                  <th scope="col" className="px-6 py-4 font-black">Custom</th>
                  <th scope="col" className="px-6 py-4" />
                </tr>
              </thead>
              <tbody>
                {services.filter(s => s.slug === 'web-development').map((s) => {
                  const [a, b, c] = s.plans;
                  return (
                    <tr key={s.slug} className="border-t border-border align-top">
                      <th scope="row" className="px-6 py-5 font-bold">
                        {s.title}
                        <span className="mt-1 block max-w-[16rem] text-xs font-normal text-muted-foreground">
                          {s.desc}
                        </span>
                      </th>
                      <td className="px-6 py-5">
                        <span className="block font-bold">{a?.price ?? "—"}</span>
                        <span className="text-xs text-muted-foreground">{a?.name} · {a?.note}</span>
                      </td>
                      <td className="bg-brand-soft px-6 py-5">
                        <span className="block font-bold text-brand">{b?.price ?? "—"}</span>
                        <span className="text-xs text-muted-foreground">{b?.name} · {b?.note}</span>
                      </td>
                      <td className="px-6 py-5">
                        <span className="block font-bold">{c?.price ?? "—"}</span>
                        <span className="text-xs text-muted-foreground">{c?.name} · {c?.note}</span>
                      </td>
                      <td className="px-6 py-5">
                        <Link
                          to="/services/$slug"
                          params={{ slug: s.slug }}
                          className="inline-flex items-center gap-1 whitespace-nowrap text-xs font-bold hover:text-brand"
                        >
                          Details <ArrowUpRight className="h-3.5 w-3.5" />
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            All prices in USD, excluding tax. Retainers are billed monthly and can be cancelled anytime.
          </p>
        </section>

        <section className="border-y border-border bg-secondary">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-black tracking-tight md:text-4xl">Included in every plan</h2>
              <ul className="mt-8 space-y-4">
                {included.map((i) => (
                  <li key={i} className="flex gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                    <span className="text-sm text-muted-foreground">{i}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-black tracking-tight md:text-4xl">Bundle and save</h2>
              <p className="mt-5 text-muted-foreground">
                Booking brand, website and marketing together removes vendor handoffs and typically
                lands 15–20% below the sum of the individual packages. Tell us the scope and we will
                price the bundle in writing.
              </p>
              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-bold text-brand-foreground transition-transform hover:-translate-y-0.5"
              >
                Get a bundled quote <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-6 py-20">
          <h2 className="text-3xl font-black tracking-tight md:text-4xl">Pricing questions</h2>
          <Accordion type="single" collapsible className="mt-8 w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`p-${i}`}>
                <AccordionTrigger className="text-left text-base font-bold">{f.q}</AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
