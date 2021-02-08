import React, { useRef } from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";
import "@reach/combobox/styles.css";
import { Search } from "./Search";
import { useMap } from "../customHooks/useMap";
import { center, options, mapContainerStyle } from "../helpers/constants";
import { useSelector } from "react-redux";

export const Map = () => {
  const ref = useRef();

  const markers = useSelector((state) => state.markers);

  const [onMapLoad, isLoaded, loadError] = useMap(ref);

  if (loadError) return "Error loading maps";


  return (
    <div className="container">
      {  !loadError && isLoaded ? (
        <>
          <Search mapRef={ref} />
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            zoom={8}
            center={center}
            options={options}
            onLoad={onMapLoad}
          >
            {markers.map((marker) => (
              <Marker
                key={marker.time + marker.lat}
                position={{
                  lat: marker.lat,
                  lng: marker.lng,
                }}
              />
            ))}
          </GoogleMap>
        </>
      ) : "Error loading maps"}
    </div>
  );
};
