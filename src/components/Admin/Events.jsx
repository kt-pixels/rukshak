import React, { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

function Event() {
  const [event, setEvent] = useState([]);
  useEffect(() => {
    getEvent();
  }, []);

  // Showing the events
  const getEvent = async () => {
    let event = await fetch("http://localhost:3000/getevents");
    event = await event.json();
    setEvent(event);
  };
  console.log("done", event);

  // delete the events
  const deleteEvent = async (id) => {
    let result = await fetch(`http://localhost:3000/deleteEvent/${id}`, {
      method: "delete",
    });
    result = await result.json();
    console.log(id);

    if (result) {
      getEvent();
    }
  };

  // update the events

  return (
    <section className="events-container">
      <div className="container-heading">
        <h2 className="heading">Rakshak Trust Events</h2>
        <Link to="add-events">
          <button className="btn">Add Events</button>
        </Link>
      </div>

      {/* events container */}
      <div className="rakshak-events">
        <div className="add-events-component">
          <Outlet />
        </div>
        <div className="events">
          {event.map((event, index) => (
            <div className="event" key={event._id}>
              <h3>
                {index + 1} : {event.title}
              </h3>
              <div className="para-flex">
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
              <div className="flex-buttons">
                <button onClick={() => deleteEvent(event._id)}>Delete</button>
                <Link to={`/dashboard/update-event/${event._id}`}>
                  <button>Update</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Event;
