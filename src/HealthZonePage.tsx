import type { LucideIcon } from 'lucide-react'
import { Activity, Coffee, ExternalLink, Leaf } from 'lucide-react'
import BookingInline from './components/BookingInline'
import Header from './components/Header'
import Footer from './components/Footer'

interface HealthPillar {
  title: string
  description: string
  icon: LucideIcon
}

interface HealthPillarCardProps extends HealthPillar {}

const PARTNER_URL = 'http://chiropraktyka.wroclaw.pl/'
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
      <div className="mx-auto flex max-w-7xl justify-center px-4 pt-6 sm:px-6 lg:px-8">
        <BookingInline compact />
      </div>

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
              Artykuly
            </h2>

            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              <article
                id="artykul-relaks"
                className="scroll-mt-28 rounded-2xl border border-stone-200 bg-white p-6 shadow-sm sm:p-8"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-orange-500">
                  Czas na relaks
                </p>
                <h3 className="mt-2 font-serif text-2xl text-teal-700">
                  5 sygnalow, ze potrzebujesz zatrzymania
                </h3>
                <p className="mt-4 leading-relaxed text-stone-600">
                  Przeciazenie psychiczne czesto rozwija sie stopniowo. Najpierw
                  pojawia sie stale zmeczenie, trudnosci ze snem i spadek
                  koncentracji. Nastepnie rosnie drazliwosc, a codzienne zadania
                  zaczynaja kosztowac znacznie wiecej energii niz zwykle.
                </p>
                <p className="mt-3 leading-relaxed text-stone-600">
                  Dobrze dzialaja male rytualy regeneracyjne: regularne przerwy,
                  spacer bez telefonu, spokojny oddech i ograniczenie bodzcow
                  wieczorem. Taki plan nie musi byc idealny - wazne, aby byl
                  powtarzalny i realny.
                </p>
                <p className="mt-3 leading-relaxed text-stone-600">
                  Jesli objawy utrzymuja sie dlugo, warto skorzystac z konsultacji
                  i uporzadkowac priorytety zanim napiecie przejdzie w stan
                  chroniczny.
                </p>
                <ul className="mt-5 space-y-2 text-sm leading-relaxed text-stone-600">
                  <li>- Trudno Ci zasnac mimo zmeczenia.</li>
                  <li>- Coraz czesciej reagujesz drazliwie na drobne sytuacje.</li>
                  <li>- Masz poczucie, ze "dzialasz na autopilocie".</li>
                  <li>- Nie odczuwasz satysfakcji z rzeczy, ktore dawniej cieszyly.</li>
                  <li>- Odkładasz regeneracje, bo "najpierw musisz wszystko domknac".</li>
                </ul>
              </article>

              <article
                id="artykul-granice"
                className="scroll-mt-28 rounded-2xl border border-stone-200 bg-white p-6 shadow-sm sm:p-8"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-orange-500">
                  Relacje i granice
                </p>
                <h3 className="mt-2 font-serif text-2xl text-teal-700">
                  Granice psychiczne w codziennym zyciu
                </h3>
                <p className="mt-4 leading-relaxed text-stone-600">
                  Stawianie granic nie oznacza dystansu wobec ludzi. Oznacza
                  jasne komunikowanie, na co sie zgadzasz, a na co nie - z
                  szacunkiem dla siebie i innych. To podstawa zdrowych relacji.
                </p>
                <p className="mt-3 leading-relaxed text-stone-600">
                  Dobre granice sa konkretne: "Potrzebuje czasu do jutra",
                  "Nie moge teraz rozmawiac", "Taki sposob rozmowy mi nie sluzy".
                  Krotkie, spokojne komunikaty zmniejszaja napiecie i pomagaja
                  unikac nieporozumien.
                </p>
                <p className="mt-3 leading-relaxed text-stone-600">
                  Jesli pojawia sie poczucie winy, warto pamietac, ze granice
                  nie oddalaja - one porzadkuja relacje i chronia zasoby
                  psychiczne potrzebne do codziennego funkcjonowania.
                </p>
                <div className="mt-5 rounded-lg border border-orange-200 bg-orange-50 p-4 text-sm leading-relaxed text-stone-700">
                  Przykladowy komunikat granicy: "Doceniam to, ze pytasz, ale nie
                  moge podjac sie tego teraz. Wroce do tematu jutro."
                </div>
              </article>
            </div>
          </div>
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

      </main>

      <Footer />
    </div>
  )
}
