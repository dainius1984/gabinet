import { CalendarCheck2 } from 'lucide-react'
import { Footer, Header } from './HomePage'

interface PricingItem {
  name: string
  duration: string
  price: string
}

interface PricingRowProps extends PricingItem {}

const BOOKING_URL =
  'https://www.znanylekarz.pl/michal-kasprzyca/psycholog-psychoterapeuta/wroclaw?utm_source=widget-doctor-307228&utm_medium=small&utm_campaign=&utm_content=www-gabinet-psychoterapeutyczny-org.filesusr.com#highlight-calendar'

const pricingItems: PricingItem[] = [
  {
    name: 'Konsultacja psychologiczna',
    duration: '50 minut',
    price: '200 zl',
  },
  {
    name: 'Terapia indywidualna',
    duration: '50 minut',
    price: '200 zl',
  },
]

function PricingRow({ name, duration, price }: PricingRowProps) {
  return (
    <article className="rounded-xl border border-stone-200 bg-white px-5 py-6 shadow-sm sm:px-8 sm:py-7">
      <div className="flex items-end gap-4">
        <div className="shrink-0">
          <h3 className="font-serif text-xl font-semibold text-teal-700 sm:text-2xl">
            {name}
          </h3>
          <p className="mt-1 text-sm text-stone-500">{duration}</p>
        </div>

        <div
          className="mb-2 hidden h-px flex-1 border-b border-dotted border-orange-300 sm:block"
          aria-hidden="true"
        />

        <p className="ml-auto shrink-0 text-2xl font-bold text-orange-500 sm:text-3xl">
          {price}
        </p>
      </div>
    </article>
  )
}

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-stone-700">
      <Header />

      <main className="relative overflow-hidden bg-stone-50 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <section aria-labelledby="pricing-title">
            <h1
              id="pricing-title"
              className="mt-2 text-center font-serif text-4xl text-teal-700 sm:text-5xl"
            >
              Cennik
            </h1>

            <div className="mx-auto mb-10 mt-5 w-40 border-b-2 border-dotted border-orange-300 sm:mb-12" />
          </section>

          <section className="relative mx-auto max-w-4xl" aria-label="Lista cen">
            <div
              className="pointer-events-none absolute -right-4 top-6 hidden text-teal-700/20 lg:block"
              aria-hidden="true"
            >
              {/* Miejsce na SVG latawca */}
              <svg viewBox="0 0 160 220" className="h-44 w-32">
                <path
                  d="M80 10 L130 70 L80 130 L30 70 Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M80 130 C90 145, 70 155, 80 170 C90 185, 70 195, 80 210"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <div className="space-y-5 sm:space-y-6">
              {pricingItems.map((item) => (
                <PricingRow key={item.name} {...item} />
              ))}
            </div>

            <div
              className="pointer-events-none mt-10 flex justify-center text-teal-700/20"
              aria-hidden="true"
            >
              {/* Miejsce na SVG postaci */}
              <svg viewBox="0 0 420 120" className="h-24 w-full max-w-md">
                <path
                  d="M70 25 a10 10 0 1 0 0.1 0 M350 25 a10 10 0 1 0 0.1 0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M70 40 L70 90 M350 40 L350 90 M70 60 C140 80, 280 80, 350 60"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </section>

          <section className="mx-auto mt-10 max-w-4xl sm:mt-12">
            <div className="rounded-xl border border-orange-200 bg-orange-50 px-5 py-5 sm:px-7">
              <p className="leading-relaxed text-stone-700">
                Platnosc za sesje odbywa sie gotowka lub przelewem przed
                spotkaniem. Istnieje mozliwosc wystawienia faktury.
              </p>
            </div>
          </section>

          <section className="mt-10 flex justify-center sm:mt-12">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-green-600 px-7 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-green-700 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700"
              aria-label="Umow wizyte online przez ZnanyLekarz"
            >
              <CalendarCheck2 className="h-5 w-5" aria-hidden="true" />
              Umow wizyte online
            </a>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}
