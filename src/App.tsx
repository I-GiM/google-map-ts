import React, { useEffect, useState } from 'react';
import Map from './components/Map';
import { LoadMapApi } from './utils/GoogleMapUtils';

function App() {
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    const googleMapScript = LoadMapApi();
    googleMapScript?.addEventListener('load', () => {
      setScriptLoaded(true);
    })
  }, [])

  return (
    <div>
      {scriptLoaded && (
        <Map
          mapType={google.maps.MapTypeId.ROADMAP}
          mapTypeControl={true}
        />
      )}
    </div>
  );
}

export default App;
