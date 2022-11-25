import { createContext, useReducer } from "react";

export const MovieContext = createContext();

const MovieContextProvider = ({ children }) => {
  const initialState = {
    movie: [],
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "":
        return;

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
