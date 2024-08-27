"use client";

import ReactDOM from "react-dom";
import { useEffect } from "react";

const PreloadResources = () => {
  useEffect(() => {
    ReactDOM.preload("/ecom-bg.jpg", { as: "image" });
  }, []);

  return null;
}

export default PreloadResources;
