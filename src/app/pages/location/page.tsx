"use client";
import { useEffect } from 'react';
import { APIProvider, Map, useMap } from '@vis.gl/react-google-maps';

const Location = () => {
  const map = useMap();
  const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY || '';

  useEffect(() => {
    if (!map) return;
  }, [map]);

  return (
    <div className="flex justify-center items-center my-8">
      <APIProvider apiKey={apiKey}>
        <Map
          style={{
            width: '80%', 
            height: '400px', 
            borderRadius: '12px', 
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', 
          }}
          defaultCenter={{ lat: -31.886616, lng: -60.646716 }}
          defaultZoom={15}
          gestureHandling={'greedy'}
          disableDefaultUI={true}
        />
      </APIProvider>
    </div>
  );
};

export default Location;
