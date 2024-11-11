/* 
Since the map was loaded on client side, 
we need to make this component client rendered as well else error occurs
*/
'use client'

//Map component Component from library
import { GoogleMap, Marker } from "@react-google-maps/api";

//Map's styling
export const defaultMapContainerStyle = {
  width: '100%',
  height: '200px',
  borderRadius: '8px',
};

const defaultMapCenter = {
  lat: 35.8799866,
  lng: 76.5048004
}

const defaultMapOptions = {
  zoomControl: false,
  tilt: 0,
  gestureHandling: 'none',
  mapTypeId: 'roadmap',
  fullscreenControl: false,
  streetViewControl: false,
  clickableIcons: false,
  disableDefaultUI: true,
};

import React, { useEffect, useState } from 'react';

const MapComponent = ({
  center = defaultMapCenter,
  zoom = 18,
}) => {
  const [mapCenter, setMapCenter] = useState(center);

  useEffect(() => {
    setMapCenter(center);
  }, [center]);

  return (
    <div className="w-full">
      <GoogleMap
        center={mapCenter}
        zoom={zoom}
        options={defaultMapOptions}
        mapContainerStyle={defaultMapContainerStyle}>
        <Marker position={mapCenter} />
      </GoogleMap>
    </div>
  )
};

export { MapComponent };