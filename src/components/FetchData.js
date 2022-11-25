import React, { useEffect } from "react";
import { useContext } from "react";
import { MovieContext } from "./Context";

const FetchData = () => {

const {state, dispatch} = useContext(MovieContext)


  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        "http://www.omdbapi.com/?apikey=5f1c171e&s=batman"
      );

      const data = await response.json();

      console.log(data);
    };

    getData();
  }, []);

  return (
    <div>
      <h1>Fetch Data</h1>
    </div>
  );
};

export default FetchData;
