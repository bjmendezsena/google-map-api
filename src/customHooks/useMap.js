import { useLoadScript } from "@react-google-maps/api";
import { useCallback} from "react";
import { GOOGLE_MAPS_API_KEY } from "../helpers/constants";

export const useMap = (mapRef) => {

    const libraries = ["places"];
  const {isLoaded, loadError} = useLoadScript({
    googleMapsApiKey:process.env.REACT_APP_GOOGLE_MAP_API_KEY,
    libraries,
  });

  const onMapLoad = useCallback(map => {
    mapRef.current = map;
  },[mapRef]);



    return [onMapLoad,isLoaded, loadError];
}
