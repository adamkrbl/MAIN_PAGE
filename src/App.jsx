import { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F5F1EA] text-black">
      <nav className="sticky top-0 z-50 border-b border-stone-200 bg-[#F5F1EA]/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <h1 className="font-semibold">MyPage</h1>

          {/* Desktop menu */}
          <div className="hidden md:flex gap-6 text-sm">
            <a href="#home" className="hover:opacity-60">Domov</a>
            <a href="#about" className="hover:opacity-60">O mne</a>
            <a href="#projects" className="hover:opacity-60">Projekty</a>
            <a href="#skills" className="hover:opacity-60">Skilly</a>
            <a href="#contact" className="hover:opacity-60">Kontakt</a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-stone-200 bg-[#F5F1EA]">
            <div className="flex flex-col px-6 py-4">
              <a
                href="#home"
                className="py-2"
                onClick={() => setMenuOpen(false)}
              >
                Domov
              </a>

              <a
                href="#about"
                className="py-2"
                onClick={() => setMenuOpen(false)}
              >
                O mne
              </a>

              <a
                href="#projects"
                className="py-2"
                onClick={() => setMenuOpen(false)}
              >
                Projekty
              </a>

              <a
                href="#skills"
                className="py-2"
                onClick={() => setMenuOpen(false)}
              >
                Skilly
              </a>

              <a
                href="#contact"
                className="py-2"
                onClick={() => setMenuOpen(false)}
              >
                Kontakt
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section
        id="home"
        className="flex min-h-[85vh] items-center justify-center px-6"
      >
        <div className="max-w-4xl text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-stone-500">
            SQL • Data Analytics • React
          </p>

          <h1 className="mb-6 text-6xl font-bold md:text-8xl">
            Adam Korbel
          </h1>

          <p className="mx-auto mb-10 max-w-3xl text-lg leading-relaxed text-stone-600">
            Aspiring developer focused on SQL, databases and data analytics.
            I build practical projects using PostgreSQL, Python and React while
            continuously expanding my skills through hands-on experience.
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
          Som samouk vo vývoji softvéru a dátovej analytike. Aktuálne sa
          zameriavam predovšetkým na SQL, relačné databázy a analýzu dát,
          pričom svoje znalosti rozširujem prostredníctvom vlastných projektov.

          Popri práci s databázami využívam Python na spracovanie dát a React
          na tvorbu moderných webových aplikácií. Mojím cieľom je budovať
          praktické riešenia, ktoré kombinujú kvalitné dáta, analytiku a
          používateľsky prívetivé rozhrania.
        </p>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="mb-12 text-4xl font-bold">Projekty</h2>

        <div className="grid gap-6 md:grid-cols-2">

          <div className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm">
            <h3 className="mb-3 text-2xl font-semibold">
              SQL Retail Sales Analytics
            </h3>

            <p className="mb-6 text-stone-600">
              SQL Retail Sales Analytics je analytický projekt zameraný na
              spracovanie a analýzu maloobchodných predajov pomocou PostgreSQL.
              Projekt rieši reálne obchodné otázky, ako sú vývoj tržieb,
              výkonnosť produktov, správanie zákazníkov a analýza kategórií.
              Súčasťou projektu sú SQL analýzy, KPI metriky a príprava dát pre
              reporting a dashboardy v Power BI.
            </p>

            <div className="flex gap-3">
              <span className="rounded-full border border-stone-300 px-3 py-1 text-sm">
                SQL
              </span>

              <span className="rounded-full border border-stone-300 px-3 py-1 text-sm">
                Power BI
              </span>

              <span className="rounded-full border border-stone-300 px-3 py-1 text-sm">
                Analytics
              </span>
            </div>

            <a
              href="https://github.com/adamkrbl/sql-retail-sales-analytics"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-block rounded-full bg-black px-5 py-2 text-white transition hover:opacity-90"
            >
              Zobraziť projekt
            </a>
          </div>
          
          {/* ostatné projekty */}
          <div className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm">
            <h3 className="mb-3 text-2xl font-semibold">
              WDA – Weather Data App
            </h3>

            <p className="mb-6 text-stone-600">
              Webová aplikácia na zobrazovanie aktuálneho počasia podľa mesta.
              Pracuje s externým API a zameriava sa na jednoduchosť a rýchlosť.
            </p>

            <div className="flex gap-3">
              <span className="rounded-full border border-stone-300 px-3 py-1 text-sm">
                React
              </span>

              <span className="rounded-full border border-stone-300 px-3 py-1 text-sm">
                API
              </span>

              <span className="rounded-full border border-stone-300 px-3 py-1 text-sm">
                Weather Data
              </span>
            </div>

            <a
              href="https://weather-data-analytics-wda.onrender.com/"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-block rounded-full bg-black px-5 py-2 text-white transition hover:opacity-90"
            >
              Otvoriť projekt
            </a>
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
            [
              "SQL",
              "PostgreSQL",
              "Power BI",
              "Python",
              "Data Analytics",
              "React",
              "JavaScript",
              "Node.js",
              "Git",
            ]
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