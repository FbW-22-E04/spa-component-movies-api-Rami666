import React, { useEffect } from "react";

const FetchData = () => {
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
