import React from "react";
import { useEffect, useState } from "react";
import "./Events.css";
import Event from "../../components/Event/Event";
import axios from "axios";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [eventMode, setEventMode] = useState("Online");
  const [eventTags, setEventTags] = useState("Tech");

  useEffect(() => {
    // try {
    //   axios.get("http://localhost:5000/api/events").then((res) => {
    //     setEvents(res.data);
    //   });
    // } catch (err) {
    //   console.log(err);
    // }

    const fetchApi = async () => {
      const response = await fetch(
        `http://localhost:5000/api/events/search?mode=${eventMode}&tags=${eventTags}`
      );
      const resJson = await response.json();
      setEvents(resJson);
    };
    fetchApi();
  }, [eventMode, eventTags]);

  return (
    <div className="events bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600">
      <div className="flex m-3">
        <div className="mb-4 mr-8">
          <label className="label block text-white font-bold mb-3 text-lg">
            Mode of Conduction
          </label>
          <select
            id="tags"
            className="bg-white border rounded text-gray-700 leading-tight focus:outline-none focus:shadow-outline block w-full p-2.5 "
            onChange={(e) => setEventMode(e.target.value)}
          >
            <option selected value="Online">
              Online
            </option>
            <option value="In-Person">In-Person</option>
          </select>
        </div>

        <div className="mb-4 ml-2">
          <label className="label block text-black font-bold mb-3 text-lg">
            Tags
          </label>
          <select
            id="tags"
            className="bg-white border rounded text-gray-700 leading-tight focus:outline-none focus:shadow-outline block w-full p-2.5 "
            onChange={(e) => setEventTags(e.target.value)}
          >
            <option value="Sports">Sports</option>
            <option selected value="Tech">
              Tech
            </option>
            <option value="Art">Art</option>
            <option value="Music">Music</option>
            <option value="Food">Food</option>
            <option value="Literature">Literature</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-3">
        {events.length === 0 ? (
          <h1 className="no-results">No results found</h1>
        ) : (
          events.map((event) => {
            return <Event key={event.id} event={event} />;
          })
        )}
      </div>
    </div>
  );
};

export default Events;
