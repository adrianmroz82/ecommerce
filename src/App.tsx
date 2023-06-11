import "./App.css";
import data from "./data.json";

import { Header } from "./components/Header/Header";
import { createContext } from "react";
import { FeaturedArtwork } from "./components/FeaturedArtwork/FeaturedArtwork";
import { ArtworkBrowser } from "./components/ArtworkBrowser/ArtworkBrowser";

console.log(data);

export const DataContext = createContext(data);

export const App = () => {
  return (
    <DataContext.Provider value={data}>
      <Header />
      <FeaturedArtwork />
      <ArtworkBrowser />
    </DataContext.Provider>
  );
};
