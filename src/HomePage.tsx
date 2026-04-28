import { useState } from 'react'
import { ArrowRight, UserRound } from 'lucide-react'
import { Link } from 'react-router-dom'
import BookingInline from './components/BookingInline'
import Footer from './components/Footer'
import Header from './components/Header'

interface Service {
  title: string
  description: string
  href: string
}

interface ServiceCardProps extends Service {}

const services: Service[] = [
  {
    title: 'Konsultacje psychologiczne',
    description:
      'Jesli doswiadczasz problemow w relacjach z innymi, masz trudnosci wychowawcze ze swoimi dziecmi, doswiadczasz powracajacych obaw i lekow, zamartwiasz sie czyms lub po prostu chcesz w swoim zyciu cos zmienic na lepsze i potrzebujesz wsparcia, serdecznie zapraszam Cie na konsultacje psychologiczna. Podczas spotkania spokojnie przyjrzymy sie Twojej sytuacji i wspolnie wybierzemy najlepsza forme pomocy.',
    href: '/uslugi#konsultacje',
  },
  {
    title: 'Terapia indywidualna osob doroslych',
    description:
      'Zmianom w naszym zyciu prawie zawsze towarzyszy stres lub lek. Ogromnie pomocna w takich sytuacjach jest mozliwosc systematycznego korzystania ze wsparcia i doswiadczenia terapeuty. W bezpiecznej relacji terapeutycznej mozemy wspolnie przygladac sie sytuacjom problemowym, rozumiec ich zrodla oraz wdrazac zmiany, ktore przywroca poczucie sprawczosci i wewnetrznej rownowagi.',
    href: '/uslugi#terapia-indywidualna',
  },
]

function Hero() {
  const [isProfileImageMissing, setIsProfileImageMissing] = useState(false)

  return (
    <section className="bg-gradient-to-b from-stone-50 to-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="grid items-center gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12">
          <div className="order-2 lg:order-1">
            <div className="space-y-6 rounded-3xl border border-stone-200 bg-white p-6 shadow-sm sm:p-8">
              <p className="font-serif text-3xl leading-tight text-teal-700 sm:text-4xl lg:text-5xl">
                ZYCIE DAJE KAZDEMU TYLE, ILE SAM MA ODWAGE SOBIE Z NIEGO WZIAC
              </p>
              <p className="text-sm uppercase tracking-[0.18em] text-stone-500">
                - Jacek Walkiewicz
              </p>

              <p className="max-w-xl leading-relaxed text-stone-600">
                Profesjonalne wsparcie psychologiczne i psychoterapia osob
                doroslych w spokojnej, bezpiecznej atmosferze.
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <BookingInline compact />
                <span className="rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-xs font-medium text-orange-600">
                  Sesja 50 minut
                </span>
              </div>
            </div>
          </div>

          <div className="group order-1 mx-auto w-full max-w-[320px] lg:order-2">
            <div className="overflow-hidden rounded-3xl border-2 border-teal-200 bg-white shadow-md transition duration-300 group-hover:shadow-lg">
              {isProfileImageMissing ? (
                <div className="flex aspect-[4/5] items-center justify-center">
                  <UserRound className="h-16 w-16 text-stone-400" aria-hidden="true" />
                  <span className="sr-only">Zdjecie profilowe psychoterapeuty</span>
                </div>
              ) : (
                <img
                  src="/img/1.jpg"
                  alt="Michal Kasprzyca"
                  className="aspect-[4/5] w-full scale-110 object-cover object-[38%_25%] transition duration-500 group-hover:scale-[1.13]"
                  onError={() => setIsProfileImageMissing(true)}
                />
              )}
            </div>
            <p className="mt-3 text-center text-sm text-stone-500">
              mgr Michal Kasprzyca - psycholog, psychoterapeuta
            </p>
          </div>
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
      <Link
        to={href}
        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-teal-700 transition hover:text-orange-500"
      >
        czytaj dalej
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </Link>
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

function HealthZoneSection() {
  return (
    <section id="health-zone" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-serif text-3xl text-teal-700 sm:text-4xl">
          Strefa zdrowia
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-center leading-relaxed text-stone-600">
          Wkrotce znajdziesz tutaj materialy psychoedukacyjne i wskazowki
          wspierajace codzienny dobrostan psychiczny.
        </p>

        <div className="mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-2">
          <Link
            to="/strefa-zdrowia#artykul-relaks"
            className="rounded-xl border border-stone-200 bg-stone-50 p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-orange-500">
              Artykul
            </p>
            <h3 className="mt-2 font-serif text-2xl text-teal-700">
              5 sygnalow, ze potrzebujesz zatrzymania
            </h3>
            <p className="mt-3 leading-relaxed text-stone-600">
              Jak rozpoznac pierwsze objawy przeciążenia i bezpiecznie wracac do
              rownowagi.
            </p>
          </Link>

          <Link
            to="/strefa-zdrowia#artykul-granice"
            className="rounded-xl border border-stone-200 bg-stone-50 p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-orange-500">
              Artykul
            </p>
            <h3 className="mt-2 font-serif text-2xl text-teal-700">
              Granice psychiczne w codziennym zyciu
            </h3>
            <p className="mt-3 leading-relaxed text-stone-600">
              Praktyczny sposob na stawianie granic bez poczucia winy i bez
              konfliktu.
            </p>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white font-sans text-stone-700">
      <Header />
      <main>
        <Hero />
        <ServicesSection />
        <HealthZoneSection />
      </main>
      <Footer />
    </div>
  )
}
