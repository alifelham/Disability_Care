import { useState, useMemo, useCallback, useRef } from "react";
import {
  GoogleMap,
  Marker,
  DirectionsRenderer,
  Circle,
  MarkerClusterer,
} from "@react-google-maps/api";
import React from 'react';
import './PharmaMap.css'
const google = window.google

  

export default function MainPharmaMap() {
 
  var center = { lat: 23.814966089088355, lng: 90.43480751836601 };
  var target = { lat: 23.82, lng: 90.44 };

  const [directions, setDirections] = useState();


  const options = useMemo(
    () => ({
      //disableDefaultUI: true,
      clickableIcons: true,
    }),
    []
  );

  const onLoad = useCallback((map) => (GoogleMap.currrent = map), []);
  
      const fetchDirections = (center, target) => {
    
        const service = new google.maps.DirectionsService();
        service.route(
          {
            origin: center,
            destination: target,
            travelMode: google.maps.TravelMode.DRIVING,
          },
          (result, status) => {
            if (status === "OK" && result) {
              setDirections(result);
            }
          }
        );
      };

  return (
    <div className="BOX">


      <div className="controls">
        <h1>DELIVERY DISTANCE </h1>
        <button className="logout-button"><a href="/medreq">PREVIOUS PAGE</a></button>
      </div>
      
      <div className="map">

        <GoogleMap
          zoom={16}
          mapContainerClassName="map-container"
          center={center}
          options={options}
          onLoad={onLoad}
        >


          <Marker position={target} label="DELIVERY" 
            onClick={() => { fetchDirections(center, target)}}/>
        
          <Marker position={center} label="ME" icon="" />
         

        
       
        {directions && (
            <DirectionsRenderer
              directions={directions}
              options={{
                polylineOptions: {
                  zIndex: 50,
                  strokeColor: "#1976D2",
                  strokeWeight: 5,
                },
              }}
            />
          )}
         

          <Circle center={center} radius={500} options={closeOptions} />
          <Circle center={center} radius={1000} options={middleOptions} />
          <Circle center={center} radius={1500} options={farOptions} />
        </GoogleMap>
      </div>
      </div>
  );
}

const defaultOptions = {
  strokeOpacity: 0.5,
  strokeWeight: 2,
  clickable: false,
  draggable: false,
  editable: false,
  visible: true,
};
const closeOptions = {
  ...defaultOptions,
  zIndex: 3,
  fillOpacity: 0.07,
  strokeColor: "#8BC34A",
  fillColor: "#8BC34A",
};
const middleOptions = {
  ...defaultOptions,
  zIndex: 2,
  fillOpacity: 0.07,
  strokeColor: "#FBC02D",
  fillColor: "#FBC02D",
};
const farOptions = {
  ...defaultOptions,
  zIndex: 1,
  fillOpacity: 0.07,
  strokeColor: "#FF5252",
  fillColor: "#FF5252",
};




