import EventList from "@/components/events/EventList"
import EventSearch from "@/components/events/EventSearch"
import { getAllEvents } from "@/dummy-data"
import { useRouter } from "next/router"


const EventsPage = () => {
  const router = useRouter()
  const events = getAllEvents()

  const onSearchedEvents = (year, month) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath)
  }

  return (
    <>
      <EventSearch onSearch={onSearchedEvents} />
      <EventList events={events} />
    </>
  )
}

export default EventsPage