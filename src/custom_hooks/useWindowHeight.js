import { useState, useEffect } from "react";

export const useWindowHeight = () => {
  const isWindowClient = typeof window === "object";

  const [windowHeight, setWindowHeight] = useState(
    isWindowClient ? window.scrollY : undefined
  );

  useEffect(() => {
    const setSize = () => {
      setWindowHeight(window.scrollY);
      // console.log(windowHeight)
    }

    if (isWindowClient) {
      window.addEventListener("scroll", setSize);

      return () => window.removeEventListener("scroll", setSize);
    }
  }, [isWindowClient, setWindowHeight, windowHeight]);
  return windowHeight;
}
export default useWindowHeight;