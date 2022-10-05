import React from "react";
import { useEffect, useState } from "react";
import "./Events.css";
import Event from "../../components/Event/Event";
import axios from "axios";

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    try {
      axios.get("http://localhost:5000/api/events").then((res) => {
        setEvents(res.data);
      });
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3">
      {events.map((event) => {
        return <Event key={event.id} event={event} />;
      })}
    </div>
  );
};

export default Events;
