import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import logo from "@/assets/mario-studio-logo.png.asset.json";
import { getPost, posts, formatPostDate } from "@/lib/blog-data";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Article not found — Mario Studio" }, { name: "robots", content: "noindex" }],
      };
    }
    const { post } = loaderData;
    return {
      meta: [
        { title: `${post.title} | Mario Studio` },
        { name: "description", content: post.excerpt },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.excerpt },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: PostNotFound,
  component: BlogPost,
});

function Shell({ children }: { children: React.ReactNode }) {
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
      <main>{children}</main>
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-muted-foreground sm:flex-row">
          <img src={logo.url} alt="Mario Studio" className="h-8 w-auto" />
          <p>© {new Date().getFullYear()} Mario Studio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function PostNotFound() {
  return (
    <Shell>
      <div className="mx-auto max-w-3xl px-6 py-32 text-center">
        <h1 className="text-4xl font-black">Article not found</h1>
        <p className="mt-4 text-muted-foreground">This post may have been moved or renamed.</p>
        <Link
          to="/blog"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
        >
          Back to the blog
        </Link>
      </div>
    </Shell>
  );
}

function BlogPost() {
  const { post } = Route.useLoaderData();
  const more = posts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <Shell>
      <article className="mx-auto max-w-3xl px-6 py-20">
        <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-brand">
          <ArrowLeft className="h-4 w-4" /> All articles
        </Link>
        <div className="mt-8 flex items-center gap-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          <span className="rounded-full bg-brand-soft px-3 py-1 text-brand">{post.category}</span>
          <span>{formatPostDate(post.date)}</span>
          <span>{post.readTime}</span>
        </div>
        <h1 className="mt-5 text-4xl font-black leading-tight tracking-tight md:text-5xl">{post.title}</h1>
        <p className="mt-5 text-lg text-muted-foreground">{post.excerpt}</p>
        <div className="mt-10 space-y-6 text-base leading-relaxed">
          {post.body.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>

        <div className="mt-14 rounded-2xl border border-border bg-brand-soft p-8">
          <h2 className="text-2xl font-bold">Want this done for you?</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Get a free brand and website audit within 48 hours.
          </p>
          <a
            href={`mailto:hello@mariostudio.com?subject=${encodeURIComponent(`Project enquiry — ${post.title}`)}`}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition-colors hover:bg-brand hover:text-brand-foreground"
          >
            Start a project <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </article>

      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-muted-foreground">Keep reading</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {more.map((p) => (
              <Link
                key={p.slug}
                to="/blog/$slug"
                params={{ slug: p.slug }}
                className="group rounded-2xl border border-border p-6 transition-colors hover:border-brand"
              >
                <div className="text-xs font-semibold uppercase tracking-wider text-brand">{p.category}</div>
                <h3 className="mt-3 text-lg font-bold group-hover:text-brand">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Shell>
  );
}
