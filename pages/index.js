import EventList from "@/components/events/EventList"
import { getFeaturedEvents } from "@/dummy-data"
import Head from "next/head"
// import { getFeaturedEvents } from "@/helpers/api-util"

export default function HomePage({events}) {
  return (
    <>
      <div>
        <Head>
          <title>Nextjs - events</title>
          <meta name="description" content="Find a lot of great events that allow you to evolve your programming skills" />
        </Head>
        <EventList events={events} />
      </div>
    </>
  )
}

export async function getStaticProps() {

  // const featuredEvents = await getFeaturedEvents()
  const featuredEvents = getFeaturedEvents()
  
  return {
    props: {
      events: featuredEvents
    },
    revalidate: 1800
  }
}