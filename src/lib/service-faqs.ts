export const serviceFaqs: Record<string, { q: string; a: string }[]> = {
  "web-development": [
    { q: "Which stack do you build on?", a: "Modern server-rendered React with a headless CMS, or your existing platform if a migration is not worth it. You get the repository either way." },
    { q: "Can you work with our current site?", a: "Yes. We often start with a performance and accessibility pass on what exists before proposing a rebuild." },
    { q: "What happens after launch?", a: "Thirty days of post-launch support is included, and you can continue on a maintenance retainer." },
  ],
  "graphic-design": [
    { q: "Do we get the source files?", a: "Always. Layered source files, exports and editable templates are handed over on final payment." },
    { q: "How many revisions are included?", a: "Two to three rounds depending on the package, and retainer clients get unlimited requests within their queue." },
    { q: "Can you match an existing brand?", a: "Yes — send us the guidelines, or we will reverse-engineer a system from your current assets." },
  ],
  "identity-branding": [
    { q: "Is this just a logo?", a: "No. You get a logo suite plus colour, typography, tone of voice and a guidelines document so future work stays coherent." },
    { q: "How long does it take?", a: "Six to ten weeks for a full identity, including research, concepts and documentation." },
    { q: "Do you handle trademark checks?", a: "We run preliminary similarity checks and flag risks, then work with your legal counsel for registration." },
  ],
  "ui-ux-design": [
    { q: "Do you test with real users?", a: "Yes. Five-user comprehension and task tests are part of every engagement above the entry package." },
    { q: "Will developers be able to build it?", a: "We design in tokens and components that map to code, and we review the built result in the browser." },
    { q: "Can you audit an existing product?", a: "A UX audit with a prioritised issue list is the usual starting point for live products." },
  ],
  "video-editing": [
    { q: "What formats do you deliver?", a: "Every aspect ratio your channels need — 16:9, 9:16 and 1:1 — with captions and platform-correct exports." },
    { q: "Do you shoot as well as edit?", a: "We edit, grade and animate. For shoots we coordinate a local crew or work with your footage." },
    { q: "How fast is turnaround?", a: "Typically three to five working days per cut, and next-day on retainer for short-form." },
  ],
  "brand-audit": [
    { q: "What do we receive?", a: "A scored inventory of every asset, a competitor grid, comprehension test findings and a prioritised remediation plan." },
    { q: "Do we have to redesign afterwards?", a: "No. Plenty of audits end in targeted fixes rather than a rebuild, and we will say so if that is the case." },
    { q: "How long does an audit take?", a: "Usually one to two weeks, depending on how many assets are in circulation." },
  ],
  "web-maintenance": [
    { q: "What is covered monthly?", a: "Platform and plugin updates, restore-tested backups, uptime and error monitoring, plus a block of small improvements." },
    { q: "How quickly do you respond?", a: "Within 48 hours on standard plans, and same business day on priority plans." },
    { q: "Can we cancel anytime?", a: "Yes, monthly with no lock-in. You keep every credential and file." },
  ],
  "web-security": [
    { q: "Do you do penetration testing?", a: "We run automated and manual vulnerability assessment. Formal third-party pentests are arranged when compliance requires it." },
    { q: "What if we are already compromised?", a: "We run incident cleanup: isolate, remove, patch, rotate credentials and then monitor for reinfection." },
    { q: "Is monitoring included?", a: "Yes on ongoing plans: uptime, file integrity, error tracking and alerting." },
  ],
  "digital-marketing": [
    { q: "Do you manage ad spend?", a: "Yes, media budget is billed separately from our management fee and reported transparently." },
    { q: "How is performance reported?", a: "A monthly report on conversions, cost per acquisition and pipeline — not impressions." },
    { q: "Is there a minimum commitment?", a: "Three months, because acquisition data before that is mostly noise." },
  ],
};
