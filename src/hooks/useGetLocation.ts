import { useState } from "react";

type Coordinates = {
  latitude: number;
  longitude: number;
  accuracy: number;
};

type PositionError = {
  code: number;
  message: string;
};

type Position = {
  coords: Coordinates;
};

const useGetLocation = () => {
  const [long, setLong] = useState<number | undefined>();
  const [lat, setLat] = useState<number | undefined>();

  const getUserLocation = () => {
    const options: PositionOptions = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

    const success = (pos: Position) => {
      const crd: Coordinates = pos.coords;

      // console.log(`Latitude : ${crd.latitude}`);
      // console.log(`Longitude: ${crd.longitude}`);
      setLong(crd.longitude);
      setLat(crd.latitude);
      // console.log(`More or less ${crd.accuracy} meters.`);
    };

    const error = (err: PositionError) => {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    };

    console.log(
      navigator.geolocation.getCurrentPosition(success, error, options)
    );
  };

  return { lat, long, getUserLocation };
};

export default useGetLocation;
