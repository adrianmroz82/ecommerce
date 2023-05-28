import "./App.css";
import data from "./data.json";

import Header from "./components/Header/Header";
import { createContext, useContext } from "react";
import FeaturedArtwork from "./components/FeaturedArtwork/FeaturedArtwork";

console.log(data);

export const DataContext = createContext(data);

function App() {
  return (
    <DataContext.Provider value={data}>
      <Header />
      <FeaturedArtwork />
    </DataContext.Provider>
  );
}

export default App;
