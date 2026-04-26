import { UserRound } from 'lucide-react'
import Header from './components/Header'
import Footer from './components/Footer'

interface Partner {
  name: string
  subtitle?: string
  description: string
  email?: string
  phone?: string
  website?: string
}

interface PartnerCardProps extends Partner {}

const partners: Partner[] = [
  {
    name: 'Roman Ciesielski',
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
    description:
      'W trosce o zdrowie moich klientów współpracuję z doktorem Mateuszem Nowackim, który prowadzi gabinet chiropraktyki Health Clinic. Health Clinic to multidyscyplinarny zespół specjalistów i entuzjastów zdrowia - fizjoterapeutów specjalizujący się w pomocy przy bólach pleców i ramion, migrenach, a także masażach relaksacyjnych.',
    website: 'http://chiropraktyka.wroclaw.pl/',
  },
]

function PartnerCard({
  name,
  subtitle,
  description,
  email,
  phone,
  website,
}: PartnerCardProps) {
  return (
    <article className="rounded-xl border border-stone-200 bg-white p-6 shadow-sm">
      <h3 className="font-serif text-xl text-teal-700">{name}</h3>
      <div
        className="my-3 w-20 border-b-2 border-dotted border-orange-300"
        aria-hidden="true"
      />

      {subtitle ? (
        <p className="mb-3 text-sm font-semibold text-stone-600">{subtitle}</p>
      ) : null}

      <p className="text-sm leading-relaxed text-stone-700">{description}</p>

      {(email || phone || website) && (
        <div className="mt-4 space-y-1 text-sm text-stone-600">
          {email ? (
            <p>
              E-mail:{' '}
              <a
                href={`mailto:${email}`}
                className="font-medium text-teal-700 hover:text-orange-500"
              >
                {email}
              </a>
            </p>
          ) : null}
          {phone ? (
            <p>
              Tel:{' '}
              <a
                href={`tel:${phone.replaceAll(' ', '')}`}
                className="font-medium text-teal-700 hover:text-orange-500"
              >
                {phone}
              </a>
            </p>
          ) : null}
          {website ? (
            <p>
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
          ) : null}
        </div>
      )}
    </article>
  )
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-stone-700">
      <Header />

      <main className="bg-stone-50 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-12">
            <aside className="order-1 space-y-6 lg:order-2">
              <div className="mx-auto flex h-64 w-64 items-center justify-center rounded-2xl border-2 border-teal-200 bg-white shadow-md sm:h-72 sm:w-72 lg:mx-0 lg:h-80 lg:w-full">
                <UserRound
                  className="h-16 w-16 text-stone-400"
                  aria-hidden="true"
                />
                <span className="sr-only">
                  Zdjęcie profilowe psychoterapeuty
                </span>
              </div>

              <section className="rounded-xl border border-stone-200 bg-white p-6 shadow-sm">
                <h2 className="mb-3 font-serif text-2xl text-teal-700">
                  Moje motto
                </h2>
                <p className="border-l-4 border-orange-400 pl-4 leading-relaxed text-stone-700">
                  Każdy problem, który nas spotyka może stać się okazją do
                  rozwinięcia naszych nowych umiejętności, o które może nawet
                  nigdy byśmy siebie nie podejrzewali, gdybyśmy nie mieli
                  problemów.
                </p>
              </section>

              <section className="rounded-xl border border-stone-200 bg-white p-6 shadow-sm">
                <h2 className="mb-3 font-serif text-2xl text-teal-700">
                  Moja misja
                </h2>
                <p className="leading-relaxed text-stone-700">
                  Każdy z nas ma w sobie wszystkie zasoby potrzebne do
                  przeżywania pełni szczęścia w życiu. Celem mojej pracy jest
                  pomoc każdemu w odnalezieniu drogi do tych zasobów.
                </p>
              </section>
            </aside>

            <section className="order-2 lg:order-1 lg:col-span-2">
              <h1 className="font-serif text-4xl text-teal-700 sm:text-5xl">
                Witaj
              </h1>
              <p className="mt-3 text-base font-semibold text-stone-500 sm:text-lg">
                mgr Michał Kasprzyca - psycholog, psychoterapeuta
              </p>

              <div className="mt-8 space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Z wykształcenia jestem certyfikowanym psychoterapeutą
                  Wrocławskiego Instytutu Psychoterapii oraz absolwentem Szkoły
                  Wyższej Psychologii Społecznej w Warszawie, o kierunku
                  psychologii społecznej. Od jedenastu lat prowadzę własną
                  praktykę psychoterapeutyczną, specjalizuję się w terapii osób
                  dorosłych.
                </p>
                <p>
                  Swoje kompetencje i umiejętności doskonaliłem w ramach
                  rocznego szkolenia w Akademii Psychologii Zorientowanej na
                  Proces w Warszawie w zakresie prowadzenia terapii w ujęciu
                  procesowym.
                </p>
                <p>
                  Pracuję w nurcie integracyjnym, łączącym współczesne podejścia
                  psychoterapeutyczne: psychodynamiczne, ericksonowskie,
                  gestalt, pozytywne.
                </p>
                <p>
                  Doświadczenie zawodowe zdobywałem pracując w: przedszkolach,
                  gimnazjum i liceum ogólnokształcącym w Warszawie na stanowisku
                  psychologa; Ministerstwie Obrony Narodowej jako konsultanta
                  dowódcy d.s. profilaktyki psychologicznej; Ośrodkach pomocy
                  dzieciom i dorosłym z upośledzeniem umysłowym oraz szpitalu
                  psychiatrycznym w Anglii jako pracownik wsparcia
                  psychologicznego; Prowadziłem liczne szkolenia
                  psychoedukacyjne i profilaktyczne dla rodziców, nauczycieli,
                  młodzieży i dzieci w wieku przedszkolnym. Stworzyłem autorski
                  programu psychodramy dla dzieci, który stosowałem w kilku
                  przedszkolach w Warszawie i Wrocławiu.
                </p>
                <p className="rounded-lg border border-orange-200 bg-orange-50 p-4 font-medium text-stone-800">
                  W swojej praktyce kieruję się przekonaniem, że każdy z nas ma
                  w sobie wszystkie zasoby potrzebne do przeżywania pełni
                  szczęścia w życiu. Celem mojej pracy jest pomóc każdemu w
                  odnalezieniu drogi do tych zasobów.
                </p>
                <p>
                  Dbając o wysoką jakość mojej pracy, regularnie poddaję się
                  superwizji. Należę do Polskiego Towarzystwa Psychologicznego.
                </p>
              </div>
            </section>
          </div>

          <section className="mt-16 sm:mt-20">
            <h2 className="text-center font-serif text-2xl text-teal-700 sm:text-3xl">
              - Współpracuję z -
            </h2>

            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
              {partners.map((partner) => (
                <PartnerCard key={partner.name} {...partner} />
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}
