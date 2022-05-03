import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import LocationMarker from "./LocationMarker";
import LoactionInfo from "./LocationInfo";

const Map = ({ eventData, center, zoom }) => {
  const [locInfo, setLocInfo] = useState(null);

  const markers = eventData.map((ev) => {
    if (ev.categories[0].id === 12) {
      return (
        <LocationMarker
          lat={ev.geometries[0].coordinates[1]}
          lng={ev.geometries[0].coordinates[0]}
          onClick={() => setLocInfo({ id: ev.id, title: ev.title })}
        />
      );
    }
    return null;
  });
  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDWTJCJEle8NjFGOIJXXNqVPGTMutSRXw0" }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {markers}
      </GoogleMapReact>
      {locInfo && <LoactionInfo info={locInfo} />}
    </div>
  );
};

Map.defaultProps = {
  center: {
    lat: 42.3265,
    lng: -122.8765,
  },
  zoom: 2,
};

export default Map;
