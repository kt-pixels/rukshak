import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddEvents() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate()

  const backToReverse = () => {
    navigate(-1)
  }

  const onSave = async () => {
    console.log("save event", title, date, time, location, description);

    let addEvent = await fetch("http://localhost:3000/events", {
        method: "post",
        body: JSON.stringify({title, date, time, location, description}),
        headers: {
            "Content-Type" : "application/json"
        },
    })
    addEvent = await addEvent.json();
    console.log(addEvent);

    if(addEvent){
        alert("event added successfully")
    }else{
        alert("please try again")
    }
  };

  return (
    <section className="events-adding">
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
          <button className="cancle" onClick={backToReverse}>Cancle</button>
          <button className="save" onClick={onSave}>
            Save
          </button>
        </div>
      </div>
    </section>
  );
}

export default AddEvents;
