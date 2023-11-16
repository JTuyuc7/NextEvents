import EventContent from '@/components/event-detail/event-content'
import EventLogistics from '@/components/event-detail/event-logistics'
import EventSummary from '@/components/event-detail/event-summary'
import ErrorAlert from '@/components/ui/error-alert'
import { getEventById, getFeaturedEvents } from '@/dummy-data'
// import { getAllEvents, getEventById } from '@/helpers/api-util'
import Head from 'next/head'

import { useRouter } from 'next/router'

const EventDetailPage = ({ event }) => {
  // const router = useRouter()

  // const { eventid } = router.query
  // const event = getEventById(eventid)

  if (!event) {
    return (
      <>
        <ErrorAlert>
          <p className="center">No Events found!</p>
        </ErrorAlert>
      </>
    )
  }

  return (
    <>
      <Head>
        <title>{`Event - ${event.title} `}</title>
        <meta name="description" content={event.description} />
      </Head>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />

      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  )
}

export async function getStaticProps(context) {
  const eventId = context.params.eventid
  // const singleEvent = await getEventById(eventId)
  const singleEvent = getEventById(eventId)

  return {
    props: {
      event: singleEvent,
    },
    revalidate: 30,
  }
}

export async function getStaticPaths() {
  // const allEvents = await getFeaturedEvents()
  const allEvents = getFeaturedEvents()

  const paramsEventIds = allEvents.map((p) => ({
    params: { eventid: p.id.toString() },
  }))

  return {
    paths: paramsEventIds,
    fallback: false,
  }
}

export default EventDetailPage
