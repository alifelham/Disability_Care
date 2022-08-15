import { useLoadScript } from "@react-google-maps/api";
import React, { Component } from 'react';
import PharmaMap from "../PharmaMap/PharmaMap";

const MainPharmaMap = () => {

const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDxb4uW_BrZtZ1AURWNSO99gGJlyXrzz1A",
    libraries: ["places"],
  });

  if (!isLoaded) return <div><p>"NO HELLO"</p></div>;
  else return <PharmaMap/>;
}

export default MainPharmaMap