import { markerReducer } from "../reducers/markerReducer";
import { types } from "../types/types";

describe("markerReducer tests", () => {
  test("Should be add a new marker", () => {
    const initState = [];
    const action = {
      type: types.addMarker,
      payload: {
        lat: 41.36858001543224,
        lng:2.1100374509270323,
      },
    };
    const state = markerReducer(initState, action);

    expect(state).toEqual([
        {
            lat: 41.36858001543224,
            lng:2.1100374509270323,
        }
      ]);
  });

  test("Should be return the current state", () => {
    const initState = [];
    const action = {
      type: 'Another state',
      payload: {
        lat: 41.36858001543224,
        lng:2.1100374509270323,
      },
    };
    const state = markerReducer(initState, action);

    expect(state).toEqual([]);
  });
});
