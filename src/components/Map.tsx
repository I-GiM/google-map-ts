import React, { useEffect, useRef, useState } from 'react';
import { Box } from '@chakra-ui/react';

interface MapProps {
  mapType: google.maps.MapTypeId,
  mapTypeControl?: boolean,
};

type GoogleLatLng = google.maps.LatLng;
type GoogleMap = google.maps.Map;

const Map: React.FC<MapProps> = ({mapType, mapTypeControl = false}) => {
  const ref = useRef<HTMLDivElement>(null)
  const [map, setMap] = useState<GoogleMap>();
  
  const startMap = () => {
    if(!map) {
      defaultMapStart();
    }
  };
  useEffect(startMap, [map]);

  const defaultMapStart = ():void => {
    const defaultAddress = new google.maps.LatLng(6.575959, 3.405472);
    initMap(14, defaultAddress);
  };

  const initMap = (zoomLevel: number, address: GoogleLatLng):void => {
    if(ref.current) {
      setMap(
        new google.maps.Map(ref.current, {
          zoom: zoomLevel,
          center: address,
          mapTypeControl: mapTypeControl,
          mapTypeId: mapType,
          zoomControl: true,
        })
      )
    }
  };

  return (
    <>
      <Box w="100vw" h="100vh" ref={ref}></Box>
    </>
  )
}

export default Map
