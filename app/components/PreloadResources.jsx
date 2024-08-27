"use client";

import ReactDOM from "react-dom";

const PreloadResources = () => {
  ReactDOM.preload("/ecom-bg.jpg", {as: "image"});

  return null;
}

export default PreloadResources;
