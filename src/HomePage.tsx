import { useState } from 'react'
import {
  ArrowRight,
  Feather,
  MapPin,
  Menu,
  UserRound,
  X,
} from 'lucide-react'

interface NavItem {
  label: string
  href: string
  active?: boolean
}

interface Service {
  title: string
  description: string
  href: string
}

interface ServiceCardProps extends Service {}

const navItems: NavItem[] = [
  { label: 'Strona glowna', href: '#', active: true },
  { label: 'O mnie', href: '#' },
  { label: 'Uslugi', href: '#services' },
  { label: 'Cennik', href: '#' },
  { label: 'Strefa zdrowia', href: '#' },
  { label: 'Kontakt', href: '#contact' },
]

const services: Service[] = [
  {
    title: 'Konsultacje psychologiczne',
    description:
      'Jesli doswiadczasz problemow w relacjach z innymi, masz trudnosci wychowawcze ze swoimi dziecmi, doswiadczasz powracajacych obaw i lekow, zamartwiasz sie czyms lub po prostu chcesz w swoim zyciu cos zmienic na lepsze i potrzebujesz wsparcia, serdecznie zapraszam Cie na konsultacje psychologiczna. Podczas spotkania spokojnie przyjrzymy sie Twojej sytuacji i wspolnie wybierzemy najlepsza forme pomocy.',
    href: '#',
  },
  {
    title: 'Terapia indywidualna osob doroslych',
    description:
      'Zmianom w naszym zyciu prawie zawsze towarzyszy stres lub lek. Ogromnie pomocna w takich sytuacjach jest mozliwosc systematycznego korzystania ze wsparcia i doswiadczenia terapeuty. W bezpiecznej relacji terapeutycznej mozemy wspolnie przygladac sie sytuacjom problemowym, rozumiec ich zrodla oraz wdrazac zmiany, ktore przywroca poczucie sprawczosci i wewnetrznej rownowagi.',
    href: '#',
  },
]

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-stone-100 bg-white/95 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-start justify-between gap-4 py-4">
          <div className="flex min-w-0 flex-1 gap-4">
            <div className="shrink-0 font-serif leading-tight text-stone-700">
              <p className="text-sm sm:text-base">Psycholog</p>
              <p className="text-sm sm:text-base">Psychoterapeuta</p>
              <p className="text-base font-semibold text-teal-700 sm:text-lg">
                Michal Kasprzyca
              </p>
            </div>

            <div
              className="hidden w-px bg-stone-300 sm:block"
              aria-hidden="true"
            />

            <p className="hidden max-w-md self-center text-sm text-stone-600 sm:block">
              Konsultacje psychologiczne | Terapia indywidualna osob doroslych
            </p>
          </div>

          <div className="hidden shrink-0 items-center gap-2 text-sm text-teal-700 md:flex">
            <Feather className="h-4 w-4" aria-hidden="true" />
            <a
              href="tel:+48507084352"
              className="font-medium transition hover:text-orange-500"
            >
              +48 507 084 352
            </a>
          </div>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="inline-flex items-center rounded-lg border border-stone-200 p-2 text-stone-700 transition hover:bg-stone-100 md:hidden"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Przelacz menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>

        <nav aria-label="Nawigacja glowna" className="hidden pb-4 md:block">
          <ul className="flex flex-wrap items-center gap-2">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className={`inline-flex rounded-md px-4 py-2 text-sm font-medium transition ${
                    item.active
                      ? 'bg-orange-500 text-white shadow-sm'
                      : 'text-stone-700 hover:bg-stone-100'
                  }`}
                  aria-current={item.active ? 'page' : undefined}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div
          id="mobile-menu"
          className={`overflow-hidden transition-all duration-200 md:hidden ${
            isMobileMenuOpen ? 'max-h-80 pb-4' : 'max-h-0'
          }`}
        >
          <div className="mb-3 flex items-center gap-2 text-sm text-teal-700">
            <Feather className="h-4 w-4" aria-hidden="true" />
            <a href="tel:+48507084352" className="font-medium">
              +48 507 084 352
            </a>
          </div>
          <nav aria-label="Nawigacja mobilna">
            <ul className="space-y-1">
              {navItems.map((item) => (
                <li key={`mobile-${item.label}`}>
                  <a
                    href={item.href}
                    className={`block rounded-md px-3 py-2 text-sm font-medium ${
                      item.active
                        ? 'bg-orange-500 text-white'
                        : 'text-stone-700 hover:bg-stone-100'
                    }`}
                    aria-current={item.active ? 'page' : undefined}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="bg-stone-50">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-3 lg:items-center lg:gap-12 lg:px-8 lg:py-20">
        <div className="hidden min-h-[260px] rounded-2xl border border-dashed border-stone-300 bg-white/40 lg:block">
          {/* Miejsce na SVG drzewa */}
        </div>

        <div className="space-y-4 text-center lg:text-left">
          <p className="font-serif text-3xl leading-tight text-teal-700 sm:text-4xl">
            ZYCIE DAJE KAZDEMU TYLE, ILE SAM MA ODWAGE SOBIE Z NIEGO WZIAC
          </p>
          <p className="text-sm uppercase tracking-[0.18em] text-stone-500">
            - Jacek Walkiewicz
          </p>
        </div>

        <div className="mx-auto flex h-64 w-64 items-center justify-center rounded-2xl border-2 border-teal-200 bg-white shadow-md sm:h-72 sm:w-72">
          <UserRound className="h-16 w-16 text-stone-400" aria-hidden="true" />
          <span className="sr-only">Zdjecie profilowe psychoterapeuty</span>
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ title, description, href }: ServiceCardProps) {
  return (
    <article className="flex h-full flex-col rounded-xl border border-stone-200 bg-white p-6 shadow-sm">
      <div className="mb-5 h-1 w-16 rounded-full bg-orange-500" aria-hidden="true" />
      <h3 className="mb-3 font-serif text-2xl text-teal-700">{title}</h3>
      <p className="flex-1 leading-relaxed text-stone-600">{description}</p>
      <a
        href={href}
        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-teal-700 transition hover:text-orange-500"
      >
        czytaj dalej
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </a>
    </article>
  )
}

function ServicesSection() {
  return (
    <section id="services" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-serif text-3xl text-teal-700 sm:text-4xl">
          Uslugi
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer id="contact" className="border-t border-stone-200 bg-stone-50">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="flex h-64 items-center justify-center rounded-xl bg-gray-200 px-6 text-center text-stone-600">
          <div className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-teal-700" aria-hidden="true" />
            <p>Mapa Google - Zygmunta Krasinskiego 1, Wroclaw</p>
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <a
            href="#"
            className="inline-flex items-center rounded-lg bg-green-600 px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700"
          >
            Umow wizyte - ZnanyLekarz
          </a>
        </div>

        <p className="mt-8 text-center text-sm text-stone-500">
          © {new Date().getFullYear()} Michal Kasprzyca. Wszelkie prawa
          zastrzezone.
        </p>
      </div>
    </footer>
  )
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white font-sans text-stone-700">
      <Header />
      <main>
        <Hero />
        <ServicesSection />
      </main>
      <Footer />
    </div>
  )
}
