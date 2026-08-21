import Header from "@/components/Header";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />

      <section className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-7xl items-center px-8">
        <div>
          <p className="text-sm text-white/50">
            Day 1 — Navigation Header
          </p>

          <h1 className="mt-4 text-5xl font-bold">
            Dev Webber Labs
          </h1>
        </div>
      </section>
    </main>
  );
}