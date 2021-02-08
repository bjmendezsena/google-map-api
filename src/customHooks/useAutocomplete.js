import { useCallback } from "react";
import usePlacesAutocomplete  ,{
    getGeocode,
    getLatLng,
  } from "use-places-autocomplete";
import { center } from "../helpers/constants";
import { useDispatch , useSelector} from "react-redux";
import { addMarker } from "../actions/markerActions";

export const useAutocomplete = (mapRef) => {

const dispatch = useDispatch();
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      location: {
        lat: () => center.lat,
        lng: () => center.lng,
      },
      radius: 200 * 1000,
    },
  });

  const panTo = useCallback((lat, lng) => {
      mapRef.current.panTo({lat,lng});
      mapRef.current.setZoom(14);

  }, []);


  const onSelect = async (address) => {
      setValue(address, false);
      clearSuggestions();
   try {
       const result = await getGeocode({address});

       const {lat, lng} = await getLatLng(result[0]);
       const {location} = result[0].geometry;

       dispatch(
        addMarker({
          lat: location.lat(),
          lng: location.lng(),
          time: new Date(),
        })
      );

       panTo(lat, lng);
 
       
   } catch (error) {
       console.log(error);
   }
    
  };

  return [ready, value, status, data, setValue, onSelect];
};
