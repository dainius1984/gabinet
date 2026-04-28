import type { LucideIcon } from 'lucide-react'
import { ArrowRight, Bird, CheckCircle2, Feather } from 'lucide-react'
import BookingInline from './components/BookingInline'
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
    href: '#konsultacje',
    icon: Feather,
  },
  {
    title: 'Terapia indywidualna',
    description:
      'Zmianom w naszym zyciu prawie zawsze towarzyszy stres lub lek. Ogromnie pomocna w takich sytuacjach jest mozliwosc systematycznego korzystania ze wsparcia i doswiadczenia terapeuty. W bezpiecznej relacji terapeutycznej mozemy wspolnie przygladac sie sytuacjom problemowym, szukac nowych rozwiazan oraz uczyc sie je wdrazac w zycie.',
    href: '#terapia-indywidualna',
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
      <div className="mx-auto flex max-w-7xl justify-center px-4 pt-6 sm:px-6 lg:px-8">
        <BookingInline compact />
      </div>

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

        <section id="konsultacje" className="mx-auto mt-14 max-w-7xl px-4 sm:mt-16 sm:px-6 lg:px-8">
          <article className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="font-serif text-3xl text-teal-700">Konsultacje - korzysci</h2>
            <p className="mt-4 leading-relaxed text-stone-600">
              Konsultacja psychologiczna pomaga nazwac aktualne trudnosci i
              uporzadkowac sytuacje zyciowa. To pierwszy krok do odzyskania
              spokoju oraz wyznaczenia realnego planu dalszych dzialan.
            </p>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              <li className="flex items-start gap-2 text-stone-700">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-orange-500" aria-hidden="true" />
                Lepsze zrozumienie zrodla stresu, lekow i napiecia.
              </li>
              <li className="flex items-start gap-2 text-stone-700">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-orange-500" aria-hidden="true" />
                Konkretne wskazowki jak poradzic sobie z biezacym kryzysem.
              </li>
              <li className="flex items-start gap-2 text-stone-700">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-orange-500" aria-hidden="true" />
                Wsparcie w poprawie relacji i komunikacji z bliskimi.
              </li>
              <li className="flex items-start gap-2 text-stone-700">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-orange-500" aria-hidden="true" />
                Ustalenie celu i najlepszego kierunku dalszej pomocy.
              </li>
            </ul>
          </article>
        </section>

        <section id="terapia-indywidualna" className="mx-auto mt-8 max-w-7xl px-4 pb-2 sm:px-6 lg:px-8">
          <article className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="font-serif text-3xl text-teal-700">
              Terapia indywidualna - korzysci
            </h2>
            <p className="mt-4 leading-relaxed text-stone-600">
              Systematyczna terapia pozwala pracowac glebiej nad utrwalonymi
              schematami, emocjami i relacjami. To proces, ktory wspiera trwala
              zmiane i budowanie wiekszej sprawczosci w codziennym zyciu.
            </p>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              <li className="flex items-start gap-2 text-stone-700">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-orange-500" aria-hidden="true" />
                Rozwijanie zdrowszych sposobow radzenia sobie z emocjami.
              </li>
              <li className="flex items-start gap-2 text-stone-700">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-orange-500" aria-hidden="true" />
                Lepsze poznanie siebie, swoich potrzeb i granic.
              </li>
              <li className="flex items-start gap-2 text-stone-700">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-orange-500" aria-hidden="true" />
                Zmniejszenie intensywnosci napiecia i objawow stresowych.
              </li>
              <li className="flex items-start gap-2 text-stone-700">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-orange-500" aria-hidden="true" />
                Trwalsza poprawa dobrostanu psychicznego i relacji.
              </li>
            </ul>
          </article>
        </section>
      </main>

      <Footer />
    </div>
  )
}
