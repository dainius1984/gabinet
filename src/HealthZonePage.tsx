import { useState } from 'react'
import type { LucideIcon } from 'lucide-react'
import { Activity, Coffee, ExternalLink, Leaf, UserRound } from 'lucide-react'
import BookingInline from './components/BookingInline'
import Header from './components/Header'
import Footer from './components/Footer'

interface HealthPillar {
  title: string
  description: string
  icon: LucideIcon
}

interface HealthPillarCardProps extends HealthPillar {}

interface Partner {
  name: string
  subtitle?: string
  description: string
  email?: string
  phone?: string
  website?: string
}

interface PartnerCardProps extends Partner {}

const PARTNER_URL = 'http://chiropraktyka.wroclaw.pl/'
const healthPillars: HealthPillar[] = [
  {
    title: 'Dieta',
    description: 'Zdrowa dieta jako paliwo dla mózgu.',
    icon: Leaf,
  },
  {
    title: 'Ruch',
    description: 'Gimnastyka i cykliczne masaże.',
    icon: Activity,
  },
  {
    title: 'Odpoczynek',
    description: 'Świadomy relaks jako profilaktyka antystresowa.',
    icon: Coffee,
  },
]

const partners: Partner[] = [
  {
    name: 'Roman Ciesielskiii',
    subtitle: 'Dr. n. med. specjalista psychiatra dzieci i młodzieży',
    description:
      'Certyfikowany psychoterapeuta. Kieruje wrocławskim Instytutem Psychoterapii. Pełni funkcje ordynatora Oddziału Dziennego Psychiatrii dla Dzieci i Młodzieży we Wrocławiu.',
    email: 'infodpi@wroclaw.pl',
    phone: '512 219 845',
  },
  {
    name: 'Anna Maroń',
    subtitle: 'Dr. n. med. specjalista pediatra',
    description:
      'Klinika Pediatrii, Alergologii i Kardiologii - Samodzielny Publiczny Szpital Kliniczny Nr 1 we Wrocławiu. Chałubińskiego 2, 50-368, Wrocław.',
    phone: '604 062 900',
  },
  {
    name: 'Nowacki Chiropraktyka NC Health Clinic',
    subtitle: 'dr Mateusz Nowacki',
    description:
      'W trosce o zdrowie moich klientów współpracuję z doktorem Mateuszem Nowackim, który prowadzi gabinet chiropraktyki Health Clinic. Health Clinic to multidyscyplinarny zespół specjalistów i entuzjastów zdrowia - fizjoterapeutów specjalizujący się w pomocy przy bólach pleców i ramion, migrenach, a także masażach relaksacyjnych.',
    website: 'http://chiropraktyka.wroclaw.pl/',
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

function PartnerCard({
  name,
  subtitle,
  description,
  email,
  phone,
  website,
}: PartnerCardProps) {
  const contactRows = [
    email ? (
      <p key="email">
        E-mail:{' '}
        <a
          href={`mailto:${email}`}
          className="font-medium text-teal-700 hover:text-orange-500"
        >
          {email}
        </a>
      </p>
    ) : (
      <p key="email-placeholder" aria-hidden="true">
        &nbsp;
      </p>
    ),
    phone ? (
      <p key="phone">
        Tel:{' '}
        <a
          href={`tel:${phone.replaceAll(' ', '')}`}
          className="font-medium text-teal-700 hover:text-orange-500"
        >
          {phone}
        </a>
      </p>
    ) : (
      <p key="phone-placeholder" aria-hidden="true">
        &nbsp;
      </p>
    ),
    website ? (
      <p key="website">
        WWW:{' '}
        <a
          href={website}
          target="_blank"
          rel="noreferrer"
          className="font-medium text-teal-700 hover:text-orange-500"
        >
          {website}
        </a>
      </p>
    ) : (
      <p key="website-placeholder" aria-hidden="true">
        &nbsp;
      </p>
    ),
  ]

  return (
    <article className="flex h-full flex-col rounded-xl border border-stone-200 bg-white p-6 shadow-sm">
      <h3 className="min-h-[3.75rem] font-serif text-xl leading-snug text-teal-700">
        {name}
      </h3>
      <div
        className="my-3 w-20 border-b-2 border-dotted border-orange-300"
        aria-hidden="true"
      />

      <p className="mb-3 min-h-[3.2rem] text-sm font-semibold text-stone-600">
        {subtitle ?? ' '}
      </p>

      <p className="flex-1 text-sm leading-relaxed text-stone-700">{description}</p>

      {(email || phone || website) && (
        <div className="mt-4 grid min-h-[4.75rem] content-end gap-1 text-sm text-stone-600">
          {contactRows}
        </div>
      )}
    </article>
  )
}

export default function HealthZonePage() {
  const [isPartnerImageMissing, setIsPartnerImageMissing] = useState(false)

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
              O holistycznym podejściu do zdrowia psychicznego i fizycznego
            </p>
            <div className="mt-6 flex justify-center">
              <BookingInline compact />
            </div>
          </div>
        </section>

        <section className="py-14 sm:py-16">
          <article className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-stone-700 sm:text-xl">
                Żyjemy w bardzo wymagającym świecie, w którym łatwo zapomnieć o
                równowadze między psychiką a ciałem. Tempo codzienności, nadmiar
                obowiązków i stałe napięcie sprawiają, że sygnały zmęczenia
                ignorujemy zbyt długo. Tymczasem dbanie o kondycję psychiczną i
                fizyczną jest jedną z najważniejszych inwestycji w jakość życia.
              </p>

              <p className="leading-relaxed text-stone-600">
                Holistyczne podejście do zdrowia zakłada, że emocje, myśli, ciało
                i styl życia są ze sobą ściśle powiązane. Kiedy przez dłuższy czas
                doświadczamy stresu, może on objawiać się nie tylko spadkiem
                nastroju, ale również bezsennością, napięciem mięśniowym,
                przemęczeniem czy trudnościami z koncentracją. Dlatego wartość
                profilaktyki budujemy codziennymi, małymi krokami.
              </p>

              <p className="leading-relaxed text-stone-600">
                Wsparcie psychoterapeutyczne pomaga lepiej rozumieć swoje
                potrzeby, regulować emocje i wracać do kontaktu ze sobą.
                Równolegle warto zadbać o podstawy dobrostanu: regularny ruch,
                zbilansowaną dietę, regenerację i odpoczynek. To razem tworzy
                fundament trwałej odporności psychicznej.
              </p>
            </div>

            <div className="mt-10 rounded-2xl border border-orange-200 bg-orange-50 p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <Coffee className="h-5 w-5 text-orange-500" aria-hidden="true" />
                <h2 className="font-serif text-2xl text-teal-700">Czas na relaks</h2>
              </div>
              <p className="mt-4 leading-relaxed text-stone-700">
                Nasze cele życiowe i rozwój są ogromnie ważne, ale nie mniej
                istotne jest tworzenie przestrzeni na odpoczynek. Świadomy relaks
                obniża poziom napięcia, poprawia koncentrację i wspiera układ
                nerwowy. Kilkanaście minut dziennie przeznaczonych na oddech,
                spacer lub wyciszenie może stanowić realną profilaktykę
                antystresową i pomagać odzyskać poczucie wewnętrznej równowagi.
              </p>
            </div>
          </article>
        </section>

        <section className="bg-stone-50 py-14 sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-center font-serif text-3xl text-teal-700 sm:text-4xl">
              Artykuły
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
                  5 sygnałów, że potrzebujesz zatrzymania
                </h3>
                <p className="mt-4 leading-relaxed text-stone-600">
                  Przeciążenie psychiczne często rozwija się stopniowo. Najpierw
                  pojawia się stałe zmęczenie, trudności ze snem i spadek
                  koncentracji. Następnie rośnie drażliwość, a codzienne zadania
                  zaczynają kosztować znacznie więcej energii niż zwykle.
                </p>
                <p className="mt-3 leading-relaxed text-stone-600">
                  Dobrze działają małe rytuały regeneracyjne: regularne przerwy,
                  spacer bez telefonu, spokojny oddech i ograniczenie bodźców
                  wieczorem. Taki plan nie musi być idealny – ważne, aby był
                  powtarzalny i realny.
                </p>
                <p className="mt-3 leading-relaxed text-stone-600">
                  Jeśli objawy utrzymują się długo, warto skorzystać z konsultacji
                  i uporządkować priorytety, zanim napięcie przejdzie w stan
                  chroniczny.
                </p>
                <ul className="mt-5 space-y-2 text-sm leading-relaxed text-stone-600">
                  <li>- Trudno Ci zasnąć mimo zmęczenia.</li>
                  <li>- Coraz częściej reagujesz drażliwie na drobne sytuacje.</li>
                  <li>- Masz poczucie, że „działasz na autopilocie”.</li>
                  <li>- Nie odczuwasz satysfakcji z rzeczy, które dawniej cieszyły.</li>
                  <li>- Odkładasz regenerację, bo „najpierw musisz wszystko domknąć”.</li>
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
                  Granice psychiczne w codziennym życiu
                </h3>
                <p className="mt-4 leading-relaxed text-stone-600">
                  Stawianie granic nie oznacza dystansu wobec ludzi. Oznacza
                  jasne komunikowanie, na co się zgadzasz, a na co nie – z
                  szacunkiem dla siebie i innych. To podstawa zdrowych relacji.
                </p>
                <p className="mt-3 leading-relaxed text-stone-600">
                  Dobre granice są konkretne: „Potrzebuję czasu do jutra”,
                  „Nie mogę teraz rozmawiać”, „Taki sposób rozmowy mi nie służy”.
                  Krótkie, spokojne komunikaty zmniejszają napięcie i pomagają
                  unikać nieporozumień.
                </p>
                <p className="mt-3 leading-relaxed text-stone-600">
                  Jeśli pojawia się poczucie winy, warto pamiętać, że granice
                  nie oddalają – one porządkują relacje i chronią zasoby
                  psychiczne potrzebne do codziennego funkcjonowania.
                </p>
                <div className="mt-5 rounded-lg border border-orange-200 bg-orange-50 p-4 text-sm leading-relaxed text-stone-700">
                  Przykładowy komunikat granicy: „Doceniam to, że pytasz, ale nie
                  mogę podjąć się tego teraz. Wrócę do tematu jutro.”
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="bg-stone-50 py-14 sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-center font-serif text-3xl text-teal-700 sm:text-4xl">
              Partner dla zdrowia ciała
            </h2>

            <article className="mt-8 grid grid-cols-1 items-center gap-8 rounded-2xl border border-stone-200 bg-white p-6 shadow-sm sm:p-8 lg:grid-cols-2">
              <div>
                <h3 className="font-serif text-2xl text-teal-700">
                  Nowacki Chiropraktyka NC Health Clinic
                </h3>
                <p className="mt-4 leading-relaxed text-stone-600">
                  W trosce o zdrowie moich klientów współpracuję z doktorem
                  Mateuszem Nowackim, który prowadzi gabinet chiropraktyki Health
                  Clinic. Health Clinic to multidyscyplinarny zespół specjalistów
                  i entuzjastów zdrowia – fizjoterapeutów specjalizujących się w
                  pomocy przy bólach pleców i ramion, migrenach, a także masażach
                  relaksacyjnych.
                </p>
                <a
                  href={PARTNER_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-teal-700 transition hover:text-orange-500"
                >
                  Odwiedź stronę partnera
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>

              <div className="mx-auto flex w-full max-w-xs flex-col items-center">
                <div className="flex h-56 w-64 items-center justify-center overflow-hidden rounded-2xl border-2 border-teal-200 bg-white p-6 shadow-md">
                  {isPartnerImageMissing ? (
                    <div className="flex h-full w-full items-center justify-center">
                      <UserRound className="h-14 w-14 text-stone-400" aria-hidden="true" />
                      <span className="sr-only">Logo NC Health Clinic</span>
                    </div>
                  ) : (
                    <img
                      src="/img/4.jpg"
                      alt="NC Health Clinic - logo"
                      className="h-full w-full object-contain"
                      onError={() => setIsPartnerImageMissing(true)}
                    />
                  )}
                </div>
                <p className="mt-3 text-sm font-semibold text-teal-700">
                  NC Health Clinic
                </p>
              </div>
            </article>
          </div>
        </section>

        <section className="py-14 sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-center font-serif text-3xl text-teal-700 sm:text-4xl">
              Wskazówki dla zdrowia
            </h2>

            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
              {healthPillars.map((pillar) => (
                <HealthPillarCard key={pillar.title} {...pillar} />
              ))}
            </div>
          </div>
        </section>

        <section className="bg-stone-50 py-14 sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-center font-serif text-2xl text-teal-700 sm:text-3xl">
              - Współpracuję z -
            </h2>

            <div className="mt-8 grid grid-cols-1 items-stretch gap-6 md:grid-cols-3">
              {partners.map((partner) => (
                <PartnerCard key={partner.name} {...partner} />
              ))}
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  )
}
