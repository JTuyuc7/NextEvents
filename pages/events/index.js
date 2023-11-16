import EventList from "@/components/events/EventList"
import EventSearch from "@/components/events/EventSearch"
// import { getAllEvents } from "@/helpers/api-util"
import { getAllEvents } from "@/dummy-data"
import Head from "next/head"
import { useRouter } from "next/router"


const EventsPage = ({events}) => {
  const router = useRouter()
  // const events = getAllEvents()

  const onSearchedEvents = (year, month) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath)
  }

  return (
    <>
      <Head>
          <title>Nextjs - All Events</title>
          <meta name="description" content="Find a lot of great events that allow you to evolve your programming skills - 1" />
        </Head>
      <EventSearch onSearch={onSearchedEvents} />
      <EventList events={events} />
    </>
  )
}

export default EventsPage

export async function getStaticProps() {
  
  // const allEvents = await getAllEvents()
  const allEvents = getAllEvents()
  return {
    props: {
      events: allEvents || []
    },
    revalidate: 60
  }
}