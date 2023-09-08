import { useReducer, createContext } from "react";

export const ThemeContext = createContext();

const changeContextValue = (state, action) => {
  switch (action.type) {
    case "CHANGE_MODE":
      return { ...state, mode: action.payload };
    default:
      return state;
  }
};

function ThemeContextProvider({ children }) {
  const [state, dispatch] = useReducer(changeContextValue, {
    mode: "light",
  });

  const changeMode = (mode) => {
    dispatch({ type: "CHANGE_MODE", payload: mode });
  };

  return (
    <ThemeContext.Provider value={{ ...state, changeMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeContextProvider };
