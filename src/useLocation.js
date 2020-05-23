import { useState, useEffect } from "react";

export default () => {
  const [lat, setLat] = useState(null);
  const [errorMessage, setErroeMessage] = useState(null);
  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      (position) => setLat(position.coords.latitude),
      (err) => setErroeMessage(err.message)
    );
  }, []);
  return [lat, errorMessage];
};
