import React from "react";
import "./styles.css";
import { Provider } from "react-redux";
import {store} from './store/store';

import { Map } from "./components/Map";

export const App = () => {
  return (
    <Provider store={store}>
      <Map />;
    </Provider>
  );
};
