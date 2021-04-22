import { useState, useEffect } from "react";

const getWindowDimensions = () => window.innerWidth 
|| document.documentElement.clientWidth 
|| document.body.clientWidth;

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );
  // in this case useEffect will execute only once because
  // it does not have any dependencies.
  useEffect(() => {
    const resizeListener = () => {
      setWindowDimensions(getWindowDimensions())
    };
    // set resize listener
    window.addEventListener("resize", resizeListener);

    // clean up function
    return () => {
      // remove resize listener
      window.removeEventListener("resize", resizeListener);
    };
  }, []);

  return windowDimensions;
}
