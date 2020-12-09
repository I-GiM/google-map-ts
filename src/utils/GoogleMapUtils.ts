export const LoadMapApi = () => {
  const mapsUrl = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAP_API_KEY}&libraries=geometry,drawing,places`;
  const scripts = document.getElementsByTagName('script');

  for(let i = 0; i < scripts.length; i++) {
    if(scripts[i].src.indexOf(mapsUrl) === 0) {
      return scripts[i];
    } else {
      const googleMapScript = document.createElement('script');
      googleMapScript.src = mapsUrl;
      googleMapScript.async = true;
      googleMapScript.defer = true;
      window.document.body.appendChild(googleMapScript);
      
      return googleMapScript;
    }
  }
};