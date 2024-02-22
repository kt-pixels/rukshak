import React, { useEffect, useState } from "react";
import "./Events.css";

function Events() {
    const [events, setEvents] = useState([])

    useEffect(() => {
        getEvents();
    }, [])

    const getEvents = async () => {
        let result = await fetch("http://localhost:3000/getevents");
        result = await result.json()
        setEvents(result)
    }
    console.log("events", events)

  return (
    <div className="event-container">
      <div className="background">
        <h2>Upcoming Events</h2>
      </div>

      <div className="event-content-container">
        {events.map((event, index) => (
            <div className="event">
            <h3>{index + 1}{" "}{event.title}</h3>
            <p>
              <strong>Date:</strong> {event.date}
            </p>
            <p>
              <strong>Time:</strong> {event.time}
            </p>
            <p>
              <strong>Location:</strong> {event.location}
            </p>
            <p>
              <strong>Description:</strong> {event.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Events;
