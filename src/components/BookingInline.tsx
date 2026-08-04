import { CalendarCheck2 } from 'lucide-react'

const BOOKING_URL =
  'https://www.znanylekarz.pl/michal-kasprzyca/psycholog-psychoterapeuta/wroclaw?utm_source=widget-doctor-307228&utm_medium=small&utm_campaign=&utm_content=www-gabinet-psychoterapeutyczny-org.filesusr.com#highlight-calendar'

interface BookingInlineProps {
  className?: string
  compact?: boolean
}

export default function BookingInline({
  className = '',
  compact = false,
}: BookingInlineProps) {
  return (
    <div className={className}>
      <a
        href={BOOKING_URL}
        target="_blank"
        rel="noreferrer"
        className={`inline-flex items-center gap-2 rounded-full bg-teal-700 font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-teal-800 hover:shadow-lg active:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700 ${
          compact ? 'px-4 py-2 text-sm' : 'px-6 py-3 text-base'
        }`}
        aria-label="Umów wizytę przez ZnanyLekarz (otworzy się w nowej karcie)"
      >
        <CalendarCheck2 className="h-4 w-4" aria-hidden="true" />
        Umów wizytę
      </a>
    </div>
  )
}
