import EventList from "@/components/events/EventList"
import { getFeaturedEvents } from "@/dummy-data"

export default function HomePage() {

  const featuresEvents = getFeaturedEvents()
  return (
    <>
      <div>
        <EventList events={featuresEvents} />
      </div>
    </>
  )
}
