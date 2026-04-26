import { useState } from 'react'
import { ArrowRight, UserRound } from 'lucide-react'
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
  const leftImageCandidates = [
    '/img/2.img',
    '/img/2.jpg',
    '/img/2.jpeg',
    '/img/2.png',
    '/img/2.webp',
  ]
  const [leftImageIndex, setLeftImageIndex] = useState(0)
  const [isLeftImageMissing, setIsLeftImageMissing] = useState(false)

  const handleLeftImageError = () => {
    if (leftImageIndex < leftImageCandidates.length - 1) {
      setLeftImageIndex((prev) => prev + 1)
      return
    }
    setIsLeftImageMissing(true)
  }

  return (
    <section className="bg-stone-50">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="grid items-center gap-6 lg:grid-cols-[minmax(220px,280px)_1fr_minmax(220px,280px)] lg:gap-10">
          <div className="group order-2 mx-auto w-full max-w-[280px] lg:order-1">
            <div className="h-52 overflow-hidden rounded-2xl border border-teal-200 bg-white shadow-sm transition duration-300 group-hover:shadow-md sm:h-64 lg:h-72">
              {isLeftImageMissing ? (
                <div className="flex h-full items-center justify-center p-6 text-center text-sm text-stone-500">
                  {/* Miejsce na SVG drzewa */}
                  Miejsce na ilustracje po lewej stronie cytatu
                </div>
              ) : (
                <img
                  src={leftImageCandidates[leftImageIndex]}
                  alt="Ilustracja dekoracyjna gabinetu"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  onError={handleLeftImageError}
                />
              )}
            </div>
          </div>

          <div className="order-1 space-y-4 text-center lg:order-2 lg:text-left">
            <p className="font-serif text-3xl leading-tight text-teal-700 sm:text-4xl">
              ZYCIE DAJE KAZDEMU TYLE, ILE SAM MA ODWAGE SOBIE Z NIEGO WZIAC
            </p>
            <p className="text-sm uppercase tracking-[0.18em] text-stone-500">
              - Jacek Walkiewicz
            </p>
          </div>

          <div className="group order-3 mx-auto w-full max-w-[280px]">
            <div className="h-52 overflow-hidden rounded-2xl border-2 border-teal-200 bg-white shadow-md transition duration-300 group-hover:shadow-lg sm:h-64 lg:h-72">
              {isProfileImageMissing ? (
                <div className="flex h-full items-center justify-center">
                  <UserRound className="h-16 w-16 text-stone-400" aria-hidden="true" />
                  <span className="sr-only">Zdjecie profilowe psychoterapeuty</span>
                </div>
              ) : (
                <img
                  src="/img/1.jpg"
                  alt="Michal Kasprzyca"
                  className="h-full w-full scale-110 object-cover object-[38%_25%] transition duration-500 group-hover:scale-[1.13]"
                  onError={() => setIsProfileImageMissing(true)}
                />
              )}
            </div>
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
