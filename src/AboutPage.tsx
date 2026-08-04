import { useState } from 'react'
import { UserRound } from 'lucide-react'
import BookingInline from './components/BookingInline'
import Header from './components/Header'
import Footer from './components/Footer'

export default function AboutPage() {
  const [isProfileImageMissing, setIsProfileImageMissing] = useState(false)

  return (
    <div className="min-h-screen bg-white font-sans text-stone-700">
      <Header />

      <main className="bg-stone-50 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <section className="grid grid-cols-1 gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12">
            <section className="order-2 lg:order-1">
              <h1 className="font-serif text-4xl text-teal-700 sm:text-5xl">Witaj</h1>
              <p className="mt-3 text-base font-semibold text-stone-500 sm:text-lg">
                mgr Michał Kasprzyca - psycholog, psychoterapeuta
              </p>
              <p className="mt-4 max-w-2xl leading-relaxed text-stone-600">
                Od lat wspieram osoby dorosłe w odzyskiwaniu równowagi psychicznej,
                lepszym rozumieniu siebie oraz budowaniu trwałych zmian w codziennym
                życiu.
              </p>
              <div className="mt-5">
                <BookingInline compact />
              </div>
              <div className="mt-10 space-y-4 text-gray-700 leading-relaxed">
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

            <aside className="order-1 space-y-4 lg:order-2">
              <div className="mx-auto w-full max-w-[360px] overflow-hidden rounded-2xl border-2 border-teal-200 bg-white shadow-md">
                {isProfileImageMissing ? (
                  <div className="flex aspect-[4/5] items-center justify-center">
                    <UserRound className="h-16 w-16 text-stone-400" aria-hidden="true" />
                    <span className="sr-only">Zdjęcie profilowe psychoterapeuty</span>
                  </div>
                ) : (
                  <img
                    src="/img/1.jpg"
                    alt="Michał Kasprzyca"
                    className="aspect-[4/5] w-full scale-110 object-cover object-[38%_25%]"
                    onError={() => setIsProfileImageMissing(true)}
                  />
                )}
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
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}
