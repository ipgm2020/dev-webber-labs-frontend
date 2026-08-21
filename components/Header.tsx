import Link from "next/link";

const navigation = [
  { name: "Services", href: "#services" },
  { name: "Tech Stack", href: "#tech-stack" },
  { name: "Case Studies", href: "#case-studies" },
  { name: "Build Calculator", href: "#calculator" },
];

export default function Header() {
  return (
    <header className="w-full border-b border-white/10 bg-black">
      <div className="mx-auto grid h-20 max-w-7xl grid-cols-[1fr_auto_1fr] items-center px-8">
        {/* Brand */}
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="text-lg font-semibold tracking-tight text-white"
          >
            Dev Webber Labs
          </Link>

          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/80">
            <span
              className="h-2 w-2 rounded-full bg-green-500"
              aria-hidden="true"
            />
            <span>Taking On New Client Sprints</span>
          </div>
        </div>

        {/* Navigation */}
        <nav aria-label="Main navigation">
          <ul className="flex items-center gap-8">
            {navigation.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="text-sm font-medium text-white/70 transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA */}
        <div className="flex justify-end">
          <Link
            href="#booking"
            className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
          >
            Book Strategy Call
          </Link>
        </div>
      </div>
    </header>
  );
}