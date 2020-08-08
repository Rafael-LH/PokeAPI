import React, { useEffect } from "react";

const LoaderHoc = (propName) => (Component) => {
  const loader = (props) => {
    const isEmpty = (data) =>
      data === undefined ||
      data === null ||
      (Array.isArray(data) && !data.length) ||
      (typeof data === "object" && !Object.keys(data).length);

    return isEmpty(props[propName]) ? (
      <h1>Loading</h1>
    ) : (
      <Component {...props} />
    );
  };

  loader.displayName = "<Loader>"; // Assing a named component
  return loader;
};

export default LoaderHoc;
