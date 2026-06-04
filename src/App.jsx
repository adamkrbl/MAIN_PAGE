function App() {
  return (
    <div className="min-h-screen bg-[#F5F1EA] text-black">
      <nav className="sticky top-0 z-50 border-b border-stone-200 bg-[#F5F1EA]/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <h1 className="font-semibold">MyPage</h1>

          <div className="flex gap-6 text-sm">
            <a href="#home" className="hover:opacity-60">Domov</a>
            <a href="#about" className="hover:opacity-60">O mne</a>
            <a href="#projects" className="hover:opacity-60">Projekty</a>
            <a href="#skills" className="hover:opacity-60">Skilly</a>
            <a href="#contact" className="hover:opacity-60">Kontakt</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section
        id="home"
        className="flex min-h-[85vh] items-center justify-center px-6"
      >
        <div className="max-w-4xl text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-stone-500">
            Aspiring Full-Stack Developer
          </p>

          <h1 className="mb-6 text-6xl font-bold md:text-8xl">
            KRBL
          </h1>

          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-stone-600">
            I focus on learning by building real projects.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#projects"
              className="rounded-full bg-black px-6 py-3 text-white transition hover:opacity-90"
            >
              Projekty
            </a>

            <a
              href="https://github.com/adamkrbl/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-black px-6 py-3 transition hover:bg-black hover:text-white"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-5xl px-6 py-24">
        <h2 className="mb-8 text-4xl font-bold">O mne</h2>

        <p className="max-w-3xl text-lg leading-relaxed text-stone-600">
          Som samouk vo vývoji webových aplikácií, ktorý sa venuje programovaniu vo voľnom čase.
          Zameriavam sa na React a moderné webové technológie, pričom v poslednom období sa viac sústredím na SQL a prácu s databázami.
          Zaujíma ma návrh dátových štruktúr, optimalizácia a spôsob, akým aplikácie pracujú s informáciami na pozadí.
          Rád staviam praktické projekty – od jednoduchých nástrojov až po AI aplikácie – a svoje schopnosti si neustále rozvíjam cez reálnu prax.
        </p>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="mb-12 text-4xl font-bold">Projekty</h2>

        <div className="grid gap-6 md:grid-cols-2">

          {/* WDA PROJECT */}
          <div className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm">
            <h3 className="mb-3 text-2xl font-semibold">
              WDA – Weather Data App
            </h3>

            <p className="mb-6 text-stone-600">
              Webová aplikácia na zobrazovanie aktuálneho počasia podľa mesta.
              Pracuje s externým API a zameriava sa na jednoduchosť a rýchlosť.
            </p>

            <a
              href="https://weather-data-analytics-wda.onrender.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-block rounded-full bg-black px-5 py-2 text-white transition hover:opacity-90"
            >
              Otvoriť projekt
            </a>
          </div>

          {/* ostatné projekty */}
          <div className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm">
            <h3 className="mb-3 text-2xl font-semibold">AI Assistant</h3>
            <p className="text-stone-600">
              Inteligentný asistent využívajúci moderné LLM modely.
            </p>
          </div>

          <div className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm">
            <h3 className="mb-3 text-2xl font-semibold">Business Dashboard</h3>
            <p className="text-stone-600">
              Dashboard pre správu dát, reportov a analytiky.
            </p>
          </div>

          <div className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm">
            <h3 className="mb-3 text-2xl font-semibold">Automation Platform</h3>
            <p className="text-stone-600">
              Automatizácia procesov a integrácia externých služieb.
            </p>
          </div>

        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="mb-12 text-4xl font-bold">Skilly</h2>

        <div className="flex flex-wrap gap-4">
          {[
            "SQL",
            "React",
            "JavaScript",
            "Node.js",
            "PostgreSQL",
            "OpenAI",
            "Python",
            "Git",
          ].map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-stone-300 bg-white px-5 py-2"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mx-auto max-w-5xl px-6 py-24">
        <h2 className="mb-8 text-4xl font-bold">Kontakt</h2>

        <div className="flex flex-wrap gap-4">
          <a
            href="mailto:adam.korbel.16@gmail.com"
            className="rounded-full border border-stone-300 bg-white px-5 py-2 text-stone-700 transition hover:bg-black hover:text-white hover:border-black"
          >
            adam.korbel.16@gmail.com
          </a>

          <a
            href="https://github.com/adamkrbl/"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-stone-300 bg-white px-5 py-2 text-stone-700 transition hover:bg-black hover:text-white hover:border-black"
          >
            github.com/adamkrbl/
          </a>
        </div>
      </section>
    </div>
  )
}

export default App