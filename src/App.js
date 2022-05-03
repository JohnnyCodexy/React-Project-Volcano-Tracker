import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Map from "./Map";
import React, { useState, useEffect } from "react";
import Loading from "./Loading";

function App() {
  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      const res = await fetch("https://eonet.gsfc.nasa.gov/api/v2.1/events");
      console.log(res);
      const { events } = await res.json();
      setEventData(events);
      setLoading(false);
    };
    fetchEvents();
    console.log();
  }, []);

  return (
    <div className="App">
      <Header />
      {!loading ? <Map eventData={eventData} /> : <Loading />}
    </div>
  );
}

export default App;
