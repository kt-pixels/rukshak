import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function UpdateEvent() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");

  const backToReverse = () => {
    navigate(-1);
  };

  const params = useParams();

  useEffect(() => {
    getEventsDetails();
  }, []);

  const getEventsDetails = async () => {
    console.log(params);
    let details = await fetch(`http://localhost:3000/updateEvent/${params.id}`);
    details = await details.json();
    console.log(details);
    setTitle(details.title);
    setDate(details.date);
    setTime(details.time);
    setLocation(details.location);
    setDescription(details.description);
  };

  const onSave = async () => {
    console.log(title, date, time, location, description);

    let update = await fetch(`http://localhost:3000/updateEvent/${params.id}`, {
      method: "put",
      body: JSON.stringify({ title, date, time, location, description }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    update = await update.json();
    console.log(update);

    if (update) {
      navigate(-1);
    }
  };
  return (
    <section className="events-updating">
      <div className="event-form">
        <form>
          <div className="input">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="input">
            <label htmlFor="date">Date</label>
            <input
              type="date"
              name="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div className="input">
            <label htmlFor="time">Time</label>
            <input
              type="time"
              name="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </div>
          <div className="input">
            <label htmlFor="location">Location</label>
            <input
              type="text"
              name="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <div className="input">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </form>
        <div className="buttons">
          <button className="cancle" onClick={backToReverse}>
            Cancle
          </button>
          <button className="save" onClick={onSave}>
            Update
          </button>
        </div>
      </div>
    </section>
  );
}

export default UpdateEvent;
