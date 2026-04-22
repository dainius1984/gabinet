import type { LucideIcon } from 'lucide-react'
import { Activity, CalendarCheck2, Coffee, ExternalLink, Leaf } from 'lucide-react'
import { Footer, Header } from './HomePage'

interface HealthPillar {
  title: string
  description: string
  icon: LucideIcon
}

interface HealthPillarCardProps extends HealthPillar {}

const PARTNER_URL = 'http://chiropraktyka.wroclaw.pl/'
const BOOKING_URL =
  'https://www.znanylekarz.pl/michal-kasprzyca/psycholog-psychoterapeuta/wroclaw?utm_source=widget-doctor-307228&utm_medium=small&utm_campaign=&utm_content=www-gabinet-psychoterapeutyczny-org.filesusr.com#highlight-calendar'

const healthPillars: HealthPillar[] = [
  {
    title: 'Dieta',
    description: 'Zdrowa dieta jako paliwo dla mozgu.',
    icon: Leaf,
  },
  {
    title: 'Ruch',
    description: 'Gimnastyka i cykliczne masaze.',
    icon: Activity,
  },
  {
    title: 'Odpoczynek',
    description: 'Swiadomy relaks jako profilaktyka antystresowa.',
    icon: Coffee,
  },
]

function HealthPillarCard({ title, description, icon: Icon }: HealthPillarCardProps) {
  return (
    <article className="rounded-xl border border-stone-200 bg-white p-6 shadow-sm sm:p-7">
      <div className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-stone-50 text-teal-700">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </div>
      <h3 className="mt-4 font-serif text-xl text-teal-700">{title}</h3>
      <p className="mt-2 leading-relaxed text-stone-600">{description}</p>
    </article>
  )
}

export default function HealthZonePage() {
  return (
    <div className="min-h-screen bg-white font-sans text-stone-700">
      <Header />

      <main className="bg-white">
        <section className="bg-stone-50 py-14 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <h1 className="font-serif text-4xl text-teal-700 sm:text-5xl">
              W zdrowym ciele zdrowy duch
            </h1>
            <p className="mt-4 text-base leading-relaxed text-stone-600 sm:text-lg">
              O holistycznym podejsciu do zdrowia psychicznego i fizycznego
            </p>
          </div>
        </section>

        <section className="py-14 sm:py-16">
          <article className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-stone-700 sm:text-xl">
                Zyjemy w bardzo wymagajacym swiecie, w ktorym latwo zapomniec o
                rownowadze miedzy psychika a cialem. Tempo codziennosci, nadmiar
                obowiazkow i stale napiecie sprawiaja, ze sygnaly zmeczenia
                ignorujemy zbyt dlugo. Tymczasem dbanie o kondycje psychiczna i
                fizyczna jest jedna z najwazniejszych inwestycji w jakosc zycia.
              </p>

              <p className="leading-relaxed text-stone-600">
                Holistyczne podejscie do zdrowia zaklada, ze emocje, mysli, cialo
                i styl zycia sa ze soba scisle powiazane. Kiedy przez dluzszy czas
                doswiadczamy stresu, moze on objawiac sie nie tylko spadkiem
                nastroju, ale rowniez bezsennoscia, napieciem miesniowym,
                przemeczeniem czy trudnosciami z koncentracja. Dlatego wartosc
                profilaktyki budujemy codziennymi, malymi krokami.
              </p>

              <p className="leading-relaxed text-stone-600">
                Wsparcie psychoterapeutyczne pomaga lepiej rozumiec swoje
                potrzeby, regulowac emocje i wracac do kontaktu ze soba.
                Rownolegle warto zadbac o podstawy dobrostanu: regularny ruch,
                zbilansowana diete, regeneracje i odpoczynek. To razem tworzy
                fundament trwalej odporności psychicznej.
              </p>
            </div>

            <div className="mt-10 rounded-2xl border border-orange-200 bg-orange-50 p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <Coffee className="h-5 w-5 text-orange-500" aria-hidden="true" />
                <h2 className="font-serif text-2xl text-teal-700">Czas na relaks</h2>
              </div>
              <p className="mt-4 leading-relaxed text-stone-700">
                Nasze cele zyciowe i rozwoj sa ogromnie wazne, ale nie mniej
                istotne jest tworzenie przestrzeni na odpoczynek. Swiadomy relaks
                obniza poziom napiecia, poprawia koncentracje i wspiera uklad
                nerwowy. Kilkanascie minut dziennie przeznaczonych na oddech,
                spacer lub wyciszenie moze stanowic realna profilaktyke
                antystresowa i pomagac odzyskac poczucie wewnetrznej rownowagi.
              </p>
            </div>
          </article>
        </section>

        <section className="bg-stone-50 py-14 sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-center font-serif text-3xl text-teal-700 sm:text-4xl">
              Partner dla zdrowia ciala
            </h2>

            <article className="mt-8 grid grid-cols-1 items-center gap-8 rounded-2xl border border-stone-200 bg-white p-6 shadow-sm sm:p-8 lg:grid-cols-2">
              <div>
                <h3 className="font-serif text-2xl text-teal-700">
                  Nowacki Chiropraktyka NC Health Clinic
                </h3>
                <p className="mt-4 leading-relaxed text-stone-600">
                  W trosce o zdrowie moich klientow wspolpracuje z doktorem
                  Mateuszem Nowackim, ktory prowadzi gabinet chiropraktyki Health
                  Clinic. Health Clinic to multidyscyplinarny zespol specjalistow
                  i entuzjastow zdrowia - fizjoterapeutow specjalizujacych sie w
                  pomocy przy bolach plecow i ramion, migrenach, a takze masazach
                  relaksacyjnych.
                </p>
                <a
                  href={PARTNER_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-teal-700 transition hover:text-orange-500"
                >
                  Odwiedz strone partnera
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>

              <div className="mx-auto flex w-full max-w-xs flex-col items-center">
                <div className="flex h-80 w-64 items-center justify-center rounded-2xl border-2 border-teal-200 bg-stone-100 shadow-md">
                  <span className="text-center text-sm text-stone-500">
                    Miejsce na zdjecie dr. Mateusza Nowackiego
                  </span>
                </div>
                <p className="mt-3 text-sm font-semibold text-teal-700">
                  NC Health Clinic Logo
                </p>
              </div>
            </article>
          </div>
        </section>

        <section className="py-14 sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-center font-serif text-3xl text-teal-700 sm:text-4xl">
              Wskazowki dla zdrowia
            </h2>

            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
              {healthPillars.map((pillar) => (
                <HealthPillarCard key={pillar.title} {...pillar} />
              ))}
            </div>
          </div>
        </section>

        <section className="bg-stone-50 py-14 sm:py-16">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl border border-orange-200 bg-white p-8 text-center shadow-sm sm:p-10">
              <p className="font-serif text-2xl text-teal-700 sm:text-3xl">
                Zadbaj o siebie juz dzis. Umow sie na konsultacje.
              </p>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-lg bg-green-600 px-7 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-green-700 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700"
                aria-label="Umow wizyte online przez ZnanyLekarz"
              >
                <CalendarCheck2 className="h-5 w-5" aria-hidden="true" />
                Umow wizyte online
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
