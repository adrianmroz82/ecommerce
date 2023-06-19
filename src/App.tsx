import "./App.css";
import data from "./data.json";

import { Header } from "./components/Header/Header";
import { createContext, useEffect } from "react";
import { FeaturedArtwork } from "./components/FeaturedArtwork/FeaturedArtwork";
import { ArtworkBrowser } from "./components/ArtworkBrowser/ArtworkBrowser";

import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBoY5CkJuhQF33v0YwfWWIrCVgG1d6HaXg",
  authDomain: "shop-5c66f.firebaseapp.com",
  projectId: "shop-5c66f",
  storageBucket: "shop-5c66f.appspot.com",
  messagingSenderId: "1096838676439",
  appId: "1:1096838676439:web:d9adf9e1d712d206a69592",
  measurementId: "G-Q2D43BQQD7",
};

initializeApp(firebaseConfig);

const db = getFirestore();

export const DataContext = createContext(data);

export const App = () => {
  const productsCollectionRef = collection(db, "products");

  useEffect(() => {
    const getProducts = async () => {
      const products = await getDocs(productsCollectionRef);
      console.log(products.docs.map((doc) => doc.data()));
    };

    getProducts();
  });
  return (
    <DataContext.Provider value={data}>
      <Header />
      <FeaturedArtwork />
      <ArtworkBrowser />
    </DataContext.Provider>
  );
};
