import { useState, useEffect } from "react";
import * as Font from "expo-font";

export function useLoadFont() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      try {
        await Font.loadAsync({
          "Jersey-Regular": require("../../assets/fonts/Jersey15-Regular.ttf"),
          "Oswald": require("../../assets/fonts/Oswald-VariableFont_wght.ttf"),
        });
        setFontsLoaded(true);
      } catch (error) {
        console.error("Error loading fonts", error);
        setFontsLoaded(false);
      }
    };

    loadFonts();
  }, []);

  return fontsLoaded;
}
