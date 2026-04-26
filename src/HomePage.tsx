import { useState } from 'react'
import { ArrowRight, Quote, UserRound } from 'lucide-react'
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
    href: '#',
  },
  {
    title: 'Terapia indywidualna osob doroslych',
    description:
      'Zmianom w naszym zyciu prawie zawsze towarzyszy stres lub lek. Ogromnie pomocna w takich sytuacjach jest mozliwosc systematycznego korzystania ze wsparcia i doswiadczenia terapeuty. W bezpiecznej relacji terapeutycznej mozemy wspolnie przygladac sie sytuacjom problemowym, rozumiec ich zrodla oraz wdrazac zmiany, ktore przywroca poczucie sprawczosci i wewnetrznej rownowagi.',
    href: '#',
  },
]

function Hero() {
  const [isProfileImageMissing, setIsProfileImageMissing] = useState(false)

  return (
    <section className="bg-gradient-to-b from-stone-50 to-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="grid items-center gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12">
          <div className="order-2 lg:order-1">
            <div className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm sm:p-8">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-teal-700">
                <Quote className="h-3.5 w-3.5" aria-hidden="true" />
                Refleksja na dzis
              </div>
              <p className="font-serif text-3xl leading-tight text-teal-700 sm:text-4xl lg:text-5xl">
                ZYCIE DAJE KAZDEMU TYLE, ILE SAM MA ODWAGE SOBIE Z NIEGO WZIAC
              </p>
              <p className="mt-5 text-sm uppercase tracking-[0.18em] text-stone-500">
                - Jacek Walkiewicz
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                <span className="rounded-full border border-teal-200 bg-teal-50 px-3 py-1 text-xs font-medium text-teal-700">
                  Terapia osob doroslych
                </span>
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
