import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import logo from "@/assets/mario-studio-logo.png.asset.json";
import { posts, formatPostDate } from "@/lib/blog-data";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Blog — Design, Development & Brand Insights | Mario Studio" },
      {
        name: "description",
        content:
          "Practical articles on branding, web development, UI/UX and web security from the Mario Studio team.",
      },
      { property: "og:title", content: "Mario Studio Blog — Design & Development Insights" },
      {
        property: "og:description",
        content:
          "Brand audits, site performance, design handoffs and security basics, written by the studio that ships them.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-30 border-b border-border/60 bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo.url} alt="Mario Studio logo" className="h-10 w-auto" />
          </Link>
          <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
            <Link to="/services" className="transition-colors hover:text-brand">Services</Link>
            <Link to="/blog" className="text-brand">Blog</Link>
          </nav>
          <a
            href="mailto:hello@mariostudio.com"
            className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-brand hover:text-brand-foreground"
          >
            Start a project
          </a>
        </div>
      </header>

      <main>
        <section className="border-b border-border">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">Journal</p>
            <h1 className="mt-4 max-w-2xl text-5xl font-black tracking-tight md:text-6xl">
              Notes from the <span className="text-brand">studio</span>
            </h1>
            <p className="mt-5 max-w-xl text-muted-foreground">
              What we learn shipping brands, websites and campaigns — written so you can use it,
              whether or not you hire us.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-8 md:grid-cols-2">
            {posts.map((post) => (
              <Link
                key={post.slug}
                to="/blog/$slug"
                params={{ slug: post.slug }}
                className="group flex flex-col justify-between rounded-2xl border border-border p-8 transition-colors hover:border-brand"
              >
                <div>
                  <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    <span className="rounded-full bg-brand-soft px-3 py-1 text-brand">{post.category}</span>
                    <span>{formatPostDate(post.date)}</span>
                  </div>
                  <h2 className="mt-5 text-2xl font-bold leading-snug group-hover:text-brand">
                    {post.title}
                  </h2>
                  <p className="mt-3 text-sm text-muted-foreground">{post.excerpt}</p>
                </div>
                <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold">
                  Read article <ArrowUpRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
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
