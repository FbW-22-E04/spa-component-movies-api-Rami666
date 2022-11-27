import { createContext, useReducer } from "react";

export const MovieContext = createContext();

const MovieContextProvider = ({ children }) => {
  const initialState = {
    movies: [],
    searchItem: "",
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "SendData":

      console.log("sss",action.payload);
        return {...state, movies: action.payload};

      default:
        return;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <MovieContext.Provider value={{ state, dispatch }}>
      {children}
    </MovieContext.Provider>
  );
};

export default MovieContextProvider;
