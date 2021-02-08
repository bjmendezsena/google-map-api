import React from "react";
import { Combobox } from "@reach/combobox";
import { useAutocomplete } from "../customHooks/useAutocomplete";
import { options } from "../helpers/constants";
export const Search = ({ mapRef }) => {
  const [ready, value, status, data, setValue, onSelect] = useAutocomplete(
    mapRef
  );

  const handleInputChange = ({ target }) => {
    setValue(target.value);
  };




  return (
    <div className="search">
      <Combobox onSelect={onSelect}>
        <input
          value={value}
          onChange={handleInputChange}
          disabled={!ready}
          placeholder="Search places..."
          type="text"
        />

        {status === "OK" ? (
          <ol>
            {data.map((option) => (
              <span key={option.place_id}>
              <hr class="solid"/>
              <li
                onClick={() => onSelect(option.description)}
                key={option.place_id}
              >
                {option.description}
              </li>
              </span>
            ))}
          </ol>
        ) : null}
      </Combobox>
    </div>
  );
};
