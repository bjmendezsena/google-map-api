import { types } from "../types/types";

export const addMarker = (marker) => ({
  type: types.addMarker,
  payload: marker,
});
