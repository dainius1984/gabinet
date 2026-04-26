import type { LucideIcon } from 'lucide-react'
import { ArrowRight, Bird, Feather } from 'lucide-react'
import Header from './components/Header'
import Footer from './components/Footer'

interface ServiceCardData {
  title: string
  description: string
  href: string
  icon: LucideIcon
}

interface ServiceCardProps extends ServiceCardData {}

const serviceCards: ServiceCardData[] = [
  {
    title: 'Konsultacje',
    description:
      'Jesli doswiadczasz problemow w relacjach z innymi, masz trudnosci wychowawcze ze swoimi dziecmi, doswiadczasz Ci powracajace obawy i leki, zamartwiasz sie czyms lub po prostu chcesz w swoim zyciu cos zmienic na lepsze i potrzebujesz wsparcia, serdecznie zapraszam Cie na konsultacje psychologiczna.',
    href: '#',
    icon: Feather,
  },
  {
    title: 'Terapia indywidualna',
    description:
      'Zmianom w naszym zyciu prawie zawsze towarzyszy stres lub lek. Ogromnie pomocna w takich sytuacjach jest mozliwosc systematycznego korzystania ze wsparcia i doswiadczenia terapeuty. W bezpiecznej relacji terapeutycznej mozemy wspolnie przygladac sie sytuacjom problemowym, szukac nowych rozwiazan oraz uczyc sie je wdrazac w zycie.',
    href: '#',
    icon: Bird,
  },
]

function ServiceCard({ title, description, href, icon: Icon }: ServiceCardProps) {
  return (
    <article className="flex h-full flex-col items-center rounded-2xl border border-orange-200 bg-white p-8 text-center shadow-sm sm:p-10">
      <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-stone-50 text-teal-700">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </div>

      <h3 className="font-serif text-2xl text-teal-700">{title}</h3>
      <p className="mt-4 flex-1 leading-relaxed text-stone-600">{description}</p>

      <a
        href={href}
        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-teal-700 transition hover:text-orange-500"
      >
        czytaj dalej [...]
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </a>
    </article>
  )
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-stone-700">
      <Header />

      <main className="bg-stone-50 py-14 sm:py-20">
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-3 text-teal-700">
            <Bird className="h-5 w-5" aria-hidden="true" />
            <h1 className="text-center font-serif text-4xl sm:text-5xl">Uslugi</h1>
            <Bird className="h-5 w-5" aria-hidden="true" />
          </div>

          <div className="mx-auto mt-10 max-w-4xl rounded-2xl border border-stone-200 bg-white px-6 py-10 text-center shadow-sm sm:px-10 sm:py-12">
            <p className="leading-relaxed text-stone-600 sm:text-lg">
              Konsultacje i sesje terapeutyczne prowadze w trybie krotko i
              dlugoterminowym. Po zdiagnozowaniu sytuacji problemowej wspolnie
              wyznaczamy cel i zakres spotkan oraz staramy sie zrealizowac go w
              ciagu nastepnych sesji. Dokladna ilosc potrzebnych spotkan jest
              ustalana w czasie pierwszej wizyty. Tresc kazdej sesji, jak i dane
              personalne klienta sa oczywiscie objete tajemnica. Czas spotkania
              to 50 minut.
            </p>
          </div>
        </section>

        <section className="mx-auto mt-14 max-w-7xl px-4 sm:mt-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {serviceCards.map((card) => (
              <ServiceCard key={card.title} {...card} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
