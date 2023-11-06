import EventList from '@/components/events/EventList'
import ResultsTitle from '@/components/events/results-title'
import Button from '@/components/ui/Button'
import ErrorAlert from '@/components/ui/error-alert'
import { getFilteredEvents } from '@/dummy-data'
import { useRouter } from 'next/router'

const FilteredEventsPage = () => {
  const router = useRouter()

  const params = router.query.slug

  if (!params) {
    return <p className="center">Loading...</p>
  }

  const filteredYear = params[0]
  const filteredMonth = params[1]
  const numYear = +filteredYear
  const numMonth = +filteredMonth

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 0 ||
    numMonth > 12
  ) {
    return (
      <>
        <ErrorAlert>
          <p className="center">Invalid Date provided</p>
        </ErrorAlert>
        <div className="center">
          <Button goTo={'/events'}>Show All Events</Button>
        </div>
      </>
    )
  }

  const filteredEvents = getFilteredEvents({ year: numYear, month: numMonth })

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <>
        <ErrorAlert>
          <p className="center">No filtered events found</p>
        </ErrorAlert>
        <div className="center">
          <Button goTo={'/events'}>Show All Events</Button>
        </div>
      </>
    )
  }

  const date = new Date(numYear, numMonth - 1)

  return (
    <>
      <ResultsTitle date={date} />
      <EventList events={filteredEvents} />
    </>
  )
}

export default FilteredEventsPage
