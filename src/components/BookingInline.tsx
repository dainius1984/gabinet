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
        className={`inline-flex items-center gap-2 rounded-lg border border-green-700 bg-green-600 font-semibold text-white shadow-sm transition hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700 ${
          compact ? 'px-4 py-2 text-sm' : 'px-6 py-3 text-base'
        }`}
        aria-label="Umow wizyte przez ZnanyLekarz (otworzy sie w nowej karcie)"
      >
        <CalendarCheck2 className="h-4 w-4" aria-hidden="true" />
        Umow wizyte
      </a>
    </div>
  )
}
