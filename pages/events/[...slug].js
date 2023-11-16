import EventList from '@/components/events/EventList'
import ResultsTitle from '@/components/events/results-title'
import Button from '@/components/ui/Button'
import ErrorAlert from '@/components/ui/error-alert'
// import { getFilteredEvents } from '@/helpers/api-util'
import { getFilteredEvents } from '@/dummy-data'
// import { useRouter } from 'next/router'

const FilteredEventsPage = ({
  hasError,
  filteredEvents,
  numYear,
  numMonth,
}) => {
  // const router = useRouter()

  // const params = router.query.slug

  // if (!params) {
  //   return <p className="center">Loading...</p>
  // }

  // const filteredYear = params[0]
  // const filteredMonth = params[1]
  // const numYear = +filteredYear
  // const numMonth = +filteredMonth

  const pageHeadData = (
    <Head>
      <title>{`Filtered Events`}</title>
      <meta
        name="description"
        content={`All events for ${numMonth}/${numYear}`}
      />
    </Head>
  )

  if (hasError) {
    return (
      <>
        {pageHeadData}
        <ErrorAlert>
          <p className="center">Invalid Date provided</p>
        </ErrorAlert>
        <div className="center">
          <Button goTo={'/events'}>Show All Events</Button>
        </div>
      </>
    )
  }

  // const filteredEvents = getFilteredEvents({ year: numYear, month: numMonth })

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <>
        {pageHeadData}
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
      {pageHeadData}
      <ResultsTitle date={date} />
      <EventList events={filteredEvents} />
    </>
  )
}

export default FilteredEventsPage

export async function getServerSideProps(context) {
  const { params } = context

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
    return {
      props: {
        hasError: true,
      },
      // notFound: true,
      // redirect: {
      //   destination: '/error'
      // }
    }
  }

  // const filteredEvents = await getFilteredEvents({ year: numYear, month: numMonth })
  const filteredEvents = getFilteredEvents({ year: numYear, month: numMonth })

  return {
    props: {
      filteredEvents: filteredEvents || [],
      numYear: numYear,
      numMonth: numMonth,
    },
  }
}
